const fs = require("fs");
const path = require("path");
const StyleDictionary = require("style-dictionary");
const util = require("util");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const BUILD_DIRECTORY = path.resolve(__dirname, "../build");
const TEMP_DIRECTORY = path.resolve(__dirname, "../.temp");

/** Style Dictionary requires paths with trailing slashes */
const buildPathByPlatform = {
  scss: `${BUILD_DIRECTORY}/scss/variables/`
};

function handleError(error) {
  /* eslint-disable-next-line no-console */
  console.error("Build failed.", error);
  process.exit(1);
}

function getThemeFiles() {
  return fs
    .readdirSync(BUILD_DIRECTORY)
    .filter(buildFile => buildFile.endsWith("Theme.json"));
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
async function parseTheme(themeFile) {
  const themeName = themeFile.replace(".json", "");
  const themeFilePath = path.resolve(BUILD_DIRECTORY, themeFile);
  const content = await readFile(themeFilePath, "utf8");
  const theme = JSON.parse(content);
  const themeFormatted = formatTheme(theme);
  const output = JSON.stringify(themeFormatted);
  const tempFile = path.resolve(TEMP_DIRECTORY, themeFile);

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
