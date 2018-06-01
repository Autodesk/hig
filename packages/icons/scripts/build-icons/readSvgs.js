const path = require("path");
const fs = require("fs");

const sets = require("../../src/sets");

function loadSvg(dirPath, fileName) {
  const fullPath = path.resolve(dirPath, fileName);
  return fs.readFileSync(fullPath, "utf8");
}

function svgsForDir(dirPath, size) {
  const fileNames = fs.readdirSync(dirPath).filter(f => f[0] !== ".");
  return fileNames.map(fileName => {
    const title = path.basename(fileName, ".svg");
    const svgData = loadSvg(dirPath, fileName, title);

    return { title, size, data: svgData };
  });
}

function readSvgs(srcDir) {
  return sets.reduce(
    (acc, { dirName, size }) =>
      acc.concat(svgsForDir(path.join(srcDir, dirName), size)),
    []
  );
}

module.exports = readSvgs;
