const fs = require("fs");
const path = require("path");
const StyleDictionary = require("style-dictionary");
const util = require("util");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const THEME_DATA_JSON_DIRECTORY = path.resolve(__dirname, "../build/json");
const BUILD_DIRECTORY = path.resolve(__dirname, "../build");
const TEMP_DIRECTORY = path.resolve(__dirname, "../.temp");

/** Style Dictionary requires paths with trailing slashes */
const buildPathByPlatform = {
  scss: `${BUILD_DIRECTORY}/scss/variables/`,
  less: `${BUILD_DIRECTORY}/less/variables/`
};

function handleError(error) {
  /* eslint-disable-next-line no-console */
  console.error("Build failed.", error);
  process.exit(1);
}

function getThemeFiles() {
  const themeFiles = fs.readdirSync(THEME_DATA_JSON_DIRECTORY);

  if (themeFiles.length === 0) {
    throw new Error("Can't build theme artifacts, no theme files found");
  }

  return themeFiles;
}

/**
 * @param {Object} theme
 * @returns {Object}
 */
function formatTheme(theme) {
  return Object.keys(theme).reduce((result, key) => {
    const formattedKey = key.replace(/\./g, "-");

    /* eslint-disable-next-line no-param-reassign */
    result[formattedKey] = { value: theme[key] };

    return result;
  }, {});
}

/**
 * @typedef {Object} ParsedTheme
 * @property {string} output
 * @property {string} tempFile
 * @property {string} themeName
 */

/**
 * @param {string} themeFile
 * @returns {ParsedTheme}
 */
async function parseTheme(themeName) {
  const themeFilePath = path.resolve(
    THEME_DATA_JSON_DIRECTORY,
    `${themeName}/resolvedRoles.json`
  );
  const content = await readFile(themeFilePath, "utf8");
  const theme = JSON.parse(content);
  const themeFormatted = formatTheme(theme);
  const output = JSON.stringify(themeFormatted);
  const tempFile = path.resolve(TEMP_DIRECTORY, `${themeName}.json`);

  return {
    output,
    tempFile,
    themeName
  };
}

/**
 * @param {string} tempFile
 * @param {string} themeName
 */
function createArtifactBuilder(tempFile, themeName) {
  return StyleDictionary.extend({
    source: [tempFile],
    platforms: {
      scss: {
        buildPath: buildPathByPlatform.scss,
        files: [
          {
            destination: `_${themeName}.scss`,
            format: "scss/variables"
          }
        ]
      },
      less: {
        buildPath: buildPathByPlatform.less,
        files: [
          {
            destination: `_${themeName}.less`,
            format: "less/variables"
          }
        ]
      }
    }
  });
}

/**
 * @param {string} themeFile
 */
async function buildThemeArtifacts(themeFile) {
  const { output, tempFile, themeName } = await parseTheme(themeFile);
  await writeFile(tempFile, output);

  // The builder must be initialized after the temp file is written
  const builder = createArtifactBuilder(tempFile, themeName);

  builder.buildAllPlatforms();
}

function start() {
  if (!fs.existsSync(TEMP_DIRECTORY)) {
    fs.mkdirSync(TEMP_DIRECTORY);
  }

  const jobs = getThemeFiles().map(buildThemeArtifacts);

  return Promise.all(jobs);
}

start().catch(handleError);
