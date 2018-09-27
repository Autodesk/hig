// node build-themes.js
const fs = require("fs");

const BUILD_DIRECTORY = "build";
const DICTIONARY_DIRECTORY = `${BUILD_DIRECTORY}/dictionary`;
const SCSS_DIRECTORY = `${BUILD_DIRECTORY}/scss`;
const SCSS_VARIABLES_DIRECTORY = `${SCSS_DIRECTORY}/variables/`;

const buildFiles = fs.readdirSync(`${BUILD_DIRECTORY}/`);
const themeFiles = buildFiles.filter((buildFile) => buildFile.match(/.*Theme\.json/));

try {
  fs.mkdirSync(DICTIONARY_DIRECTORY);
} catch (err) {
  if (err.code !== 'EEXIST') {
    throw err;
  }
}

themeFiles.forEach((themeFile) => {
  const themeName = themeFile.replace(/\.json$/g, "");
  const destination = `_${themeName}.scss`;

  const StyleDictionary = require("style-dictionary").extend({
    "source": [`${DICTIONARY_DIRECTORY}/${themeFile}`],
    "platforms": {
      "scss": {
        "buildPath": SCSS_VARIABLES_DIRECTORY,
        "files": [{
          "destination": destination,
          "format": "scss/variables"
        }]
      }
    }
  });

  const content = fs.readFileSync(`${BUILD_DIRECTORY}/${themeFile}`, "utf8");
  const theme = JSON.parse(content);
  const themeFormatted = {};

  Object.keys(theme).forEach((key) => {
    const formattedKey = key.replace(/\./g, "-")
    themeFormatted[formattedKey] = { value: theme[key] }
  });

  const output = JSON.stringify(themeFormatted);

  fs.writeFile(`${DICTIONARY_DIRECTORY}/${themeFile}`, output, function(err) {
    console.log(err);
  });

  StyleDictionary.buildAllPlatforms();
});
