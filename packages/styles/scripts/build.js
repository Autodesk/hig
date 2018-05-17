const buildPackage = require("@hig/scripts/buildPackage");
const fs = require("fs");
const mkdirp = require("mkdirp");
const path = require("path");
const sass = require("node-sass");
const util = require("util");

const readdir = util.promisify(fs.readdir);
const renderSass = util.promisify(sass.render);
const writeFile = util.promisify(fs.writeFile);

const BASE_DIR = path.resolve(__dirname, "..");
const BUILD_DIR = path.join(BASE_DIR, "build");
const STYLESHEETS_DIR = path.join(BASE_DIR, "src/stylesheets");

async function buildStylesheets() {
  const stylesPaths = await readdir(STYLESHEETS_DIR);
  const processes = stylesPaths.map(async filename => {
    const file = path.resolve(STYLESHEETS_DIR, filename);
    const dest = path.join(BUILD_DIR, filename).replace("scss", "css");
    const result = await renderSass({ file });

    return writeFile(dest, result.css);
  });

  return Promise.all(processes);
}

async function build() {
  mkdirp.sync(BUILD_DIR);

  return Promise.all([buildPackage(), buildStylesheets()]);
}

build().catch(console.error);
