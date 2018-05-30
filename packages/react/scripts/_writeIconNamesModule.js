const fs = require("fs");
const path = require("path");

const DIST_FILE = path.resolve(
  __dirname,
  "../src/elements/components/Icons/release/hig-icon-names.js"
);

/**
 * As icons are changed or removed, this object can be used to override generated keys and names.
 * This can be used to prevent breaking changes, and/or provide a more readable API.
 * @type {Object.<string, string>}
 */
const CONFIG_NAME_OVERRIDES = {
  /* OLD_KEY: 'new-name', */
  /* HUMAN_READABLE_KEY: 'machine-readable-name', */
  /* REMOVED_KEY: undefined */
};

/**
 * @param {string} cleanFileName .e.g foo-bar-16
 * @returns {string} .e.g foo-bar
 */
function getIconName(cleanFileName) {
  const pieces = cleanFileName.split("-");

  pieces.pop();

  return pieces.join("-");
}

/**
 * @param {string} iconName .e.g foo-bar
 * @returns {string} .e.g FOO_BAR
 */
function getConstantName(iconName) {
  return iconName
    .split("-")
    .map(str => str.toUpperCase())
    .join("_");
}

/**
 * @param {string[]} iconNames
 * @returns {Object.<string, string>}
 */
function createIconNameConstants(iconNames) {
  return iconNames.reduce((acc, iconName) => {
    const constantName = getConstantName(iconName);
    acc[constantName] = iconName;
    return acc;
  }, {});
}

/**
 * @param {Object.<string, string>} iconNameConstants
 * @returns {string} ES2015 JavaScript
 */
function createIconNamesModuleScript(iconNameConstants) {
  const data = JSON.stringify(iconNameConstants, null, 2);

  return `export default Object.freeze(${data});\n`;
}

/**
 * @param {string[]} cleanFileNames
 */
function writeIconNamesModule(cleanFileNames) {
  const iconNames = cleanFileNames.map(getIconName);
  const iconNameConstants = createIconNameConstants(iconNames);
  const data = createIconNamesModuleScript({
    ...iconNameConstants,
    ...CONFIG_NAME_OVERRIDES
  });

  fs.writeFileSync(DIST_FILE, data);
  // eslint-disable-next-line no-console
  console.log(`Icon name constants bundle created in: ${DIST_FILE}`);
}

module.exports = writeIconNamesModule;
