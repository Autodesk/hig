/**
 * @param {string} iconName .e.g foo-bar
 * @returns {string} .e.g FOO_BAR
 */
function getNameConstant(iconName) {
  return iconName
    .split("-")
    .map(str => str.toUpperCase())
    .join("_");
}

/**
 * @param {{ title: string }} svg SVG with metadata
 * @returns {{ title: string, nameConstant: string }}
 */
function addNameConstant(svg) {
  return Object.assign(svg, { nameConstant: getNameConstant(svg.title) });
}

module.exports = addNameConstant;
