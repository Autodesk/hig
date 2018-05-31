const path = require("path");
const readSVGs = require("./readSvgs");
const writeBundle = require("./writeBundle");
const optimize = require("./optimizeSVGData");

const buildDir = path.resolve(__dirname, "../../build/");
const srcDir = path.resolve(__dirname, "../../src/icons");

async function run() {
  const svgs = await readSVGs(srcDir);
  // const optimized = await Promise.all(svgs.map(optimize));
  // console.log(optimized);

  writeBundle(svgs, buildDir, "icons.json");
}

run();
