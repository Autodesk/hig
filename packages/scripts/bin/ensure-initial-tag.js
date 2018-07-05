#!/usr/bin/env node
const execa = require("execa");
const path = require("path");
const readPkg = require("read-pkg");
const isStableVersion = require("@hig/scripts/isStableVersion");

/**
 * @param {string} packageName
 * @returns {string[]}
 */
async function getTagVersions(packageName) {
  return (await execa.stdout("git", ["tag"]))
    .split("\n")
    .map(tag => tag.trim())
    .filter(tag => tag.startsWith(packageName))
    .map(tag => tag.split("@").pop());
}

/**
 * @param {string} versions
 * @returns {boolean}
 */
function hasInitialVersion(versions) {
  return versions.includes("0.0.0");
}

/**
 * @returns {Promise<boolean>}
 */
async function hasStableVersion(packageName) {
  const versions = await getTagVersions(packageName);

  return Boolean(versions.find(isStableVersion));
}

/**
 * @returns {Promise<string>}
 */
async function getInitialCommitHash() {
  const packageJsonPath = path.resolve(process.cwd(), "package.json");
  const args = [
    "log",
    "--diff-filter=A",
    "--pretty=format:%H",
    packageJsonPath
  ];

  return execa.stdout("git", args).then(str => str.trim());
}

/**
 * @param {string} packageName
 * @param {string} commitHash
 * @returns {Promise<void>}
 */
async function createInitialTag(packageName, commitHash) {
  return execa.stdout("git", [
    "tag",
    "-a",
    `${packageName}@0.0.0`,
    "-m",
    '"Initial tag for Semantic Release."',
    commitHash
  ]);
}

/**
 * @returns {Promise<void>}
 */
async function start() {
  const { name: packageName } = await readPkg();

  if (await hasStableVersion(packageName)) return;

  console.log(`Creating an initial tag for ${packageName}.`);

  const commitHash = await getInitialCommitHash();

  await createInitialTag(packageName, commitHash);
}

start().catch(error => {
  console.error(error);
  process.exit(1);
});
