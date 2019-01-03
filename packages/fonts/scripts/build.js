const fs = require("fs");
const mkdirp = require("mkdirp");
const path = require("path");
const util = require("util");
const readdir = util.promisify(fs.readdir);

const BASE_DIR = path.resolve(__dirname, "..");
const BUILD_DIR = path.join(BASE_DIR, "build");
const STYLESHEETS_DIR = path.join(BASE_DIR, "src");

async function copyStylesheets() {
  const stylesPaths = await readdir(STYLESHEETS_DIR);
  const processes = stylesPaths.map(async filename => {
    const file = path.resolve(STYLESHEETS_DIR, filename);
    const dest = path.join(BUILD_DIR, filename);

    return fs.copyFile(file, dest, (err) => {
      if (err) throw err;
    });
  });

  return Promise.all(processes);
}

async function build() {
  mkdirp.sync(BUILD_DIR);

  return Promise.all([copyStylesheets()]);
}

build().catch(console.error);
