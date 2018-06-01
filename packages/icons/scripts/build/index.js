const path = require("path");
const readSVGs = require("./readSvgs");
const writeBundle = require("./writeBundle");
const optimize = require("./optimizeSVGData");

const buildDir = path.resolve(__dirname, "../../build/");
const srcDir = path.resolve(__dirname, "../../src/icons");

async function run() {
  const svgs = await readSVGs(srcDir);
  const optimizedSvgs = await Promise.all(svgs.map(optimize));

  writeBundle(optimizedSvgs, buildDir, "icons.json");
}

run();
