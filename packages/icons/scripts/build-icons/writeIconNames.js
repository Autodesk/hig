const fs = require("fs");

/**
 * @param {string[]} iconNames
 * @returns {Object.<string, string>}
 */
function createNameMap(svgs) {
  return svgs.reduce(
    (acc, svg) => Object.assign(acc, { [svg.nameConstant]: svg.title }),
    {}
  );
}

/**
 * @param {Object[]} svgs with metadata
 * @param {string} filePath path where file will be written
 */
function writeIconNames(svgs, filePath) {
  const nameMap = createNameMap(svgs);

  const bundleData = JSON.stringify(nameMap);
  fs.writeFileSync(filePath, bundleData);
  // eslint-disable-next-line no-console
  console.log(`Icon name constants bundle created in: ${filePath}`);
}

module.exports = writeIconNames;
