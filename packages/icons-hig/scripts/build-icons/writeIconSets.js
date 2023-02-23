const fs = require("fs");
const sets = require("../../src/sets");
const capitalizeCamelCase = require('./capitalizeCamelCase');

/**
 * @param {Object[]} iconNames
 * @returns {Object.<string, string>}
 */
function createSetMap(svgs) {
  return sets.map(set =>
    Object.assign(set, {
      iconNames: svgs.filter(svg => svg.size === set.size).map(svg => capitalizeCamelCase(svg.title))
    })
  );
}

/**
 * @param {Object[]} svgs with metadata
 * @param {string} filePath path where file will be written
 */
function writeIconSets(svgs, filePath) {
  const setMap = createSetMap(svgs);

  const bundleData = JSON.stringify(setMap);
  fs.writeFileSync(filePath, bundleData);
  // eslint-disable-next-line no-console
  console.log(`Icon sets bundle created in: ${filePath}`);
}

module.exports = writeIconSets;
