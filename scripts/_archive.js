const fs = require("fs");
const path = require("path");

const archiver = require("archiver");
const mkdirp = require("mkdirp");

const BASE_PATH = path.resolve(__dirname, "..");
const ARCHIVES_DIR = path.join(BASE_PATH, ".archives");

function getArchivePath(archiveFilename) {
  return path.join(ARCHIVES_DIR, archiveFilename);
}

function createDeferred() {
  let resolve;
  let reject;

  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });

  return { promise, resolve, reject };
}

async function createArchive(fileGlobs, archiveFilename) {
  const archivePath = getArchivePath(archiveFilename);
  const archive = archiver("tar", { gzip: true });
  const { promise, resolve, reject } = createDeferred();

  await mkdirp(ARCHIVES_DIR);

  const writer = fs.createWriteStream(archivePath);

  archive.pipe(writer);
  writer.on("close", () => resolve(archivePath));
  archive.on("error", reject);
  writer.on("error", reject);
  fileGlobs.forEach(pattern => archive.glob(pattern, { dot: true }));
  archive.finalize();

  return promise;
}

function handleError(error) {
  console.error(error);
  process.exit(1);
}

module.exports = { createArchive, handleError };
