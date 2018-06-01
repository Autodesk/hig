const fs = require("fs");
const sets = require("../../src/sets");

/**
 * @param {string[]} iconNames
 * @returns {Object.<string, string>}
 */
function createSetMap(svgs) {
  return sets.map(set =>
    Object.assign(set, {
      iconNames: svgs.filter(svg => svg.size === set.size).map(svg => svg.title)
    })
  );
}

/**
 * @param {Object.<string, string>} svgs with metadata
 */
function writeIconSets(svgs, filePath) {
  const setMap = createSetMap(svgs);

  const bundleData = JSON.stringify(setMap);
  fs.writeFileSync(filePath, bundleData);
  // eslint-disable-next-line no-console
  console.log(`Icon sets bundle created in: ${filePath}`);
}

module.exports = writeIconSets;
