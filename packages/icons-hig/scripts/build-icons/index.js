const path = require("path");
const readSVGs = require("./readSvgs");
const optimize = require("./optimizeSVGData");
const addNameConstant = require("./addNameConstant");
const writeBundle = require("./writeBundle");
const writeIconNames = require("./writeIconNames");
const writeIconSets = require("./writeIconSets");

const BUILD_DIR = path.resolve(__dirname, "../../src/release/");
const SRC_DIR = path.resolve(__dirname, "../../src/icons");
const BUNDLE_DIST_PATH = path.resolve(__dirname, "../../src/index.js");
const NAMES_DIST_PATH = path.join(BUILD_DIR, "hig-icon-names.json");
const SETS_DIST_PATH = path.join(BUILD_DIR, "hig-icon-sets.json");

async function run() {
  const svgs = await readSVGs(SRC_DIR);
  const constantNamedSvgs = svgs.map(addNameConstant);
  const optimizedSvgs = await Promise.all(constantNamedSvgs.map(optimize));

  writeBundle(optimizedSvgs, BUNDLE_DIST_PATH);
  writeIconNames(optimizedSvgs, NAMES_DIST_PATH);
  writeIconSets(optimizedSvgs, SETS_DIST_PATH);
}

run();
