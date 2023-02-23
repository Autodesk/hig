const path = require("path");
const fs = require("fs");

const sets = require("../../src/sets");

/**
 * @param {string} dirPath - Path of directory containing the icon to load
 * @param {string} fileName - Name of the icon file to load
 * @returns {{ title: string, data: string, size: string }[]}
 */
function loadSvg(dirPath, fileName) {
  const fullPath = path.resolve(dirPath, fileName);
  return fs.readFileSync(fullPath, "utf8");
}

/**
 * @param {string} path - Path of directory containing icons
 * @param {string} size - Size of icon in px
 * @returns {{ title: string, data: string, size: string }[]}
 */
function svgsForDir(dirPath, size) {
  const fileNames = fs.readdirSync(dirPath).filter(f => f[0] !== ".");
  return fileNames.map(fileName => {
    const title = path.basename(fileName, ".svg");
    const svgData = loadSvg(dirPath, fileName, title);

    return { title, size, data: svgData };
  });
}

/**
 * @param {string} path - Path of directory containing icon sets
 * @returns {{ title: string, data: string, size: string }[]}
 */
function readSvgs(srcDir) {
  return sets.reduce(
    (acc, { dirName, size }) =>
      acc.concat(svgsForDir(path.join(srcDir, dirName), size)),
    []
  );
}

module.exports = readSvgs;
