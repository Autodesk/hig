#!/usr/bin/env node
const readPkg = require("read-pkg");
const isStableVersion = require("@hig/scripts/isStableVersion");

async function start() {
  const { name: packageName, version } = await readPkg();
  const currentTag = `${packageName}@${version}`;

  if (isStableVersion(version)) {
    console.log(`${currentTag} is a stable version.`);
    process.exit(0);
  }

  console.log(`${currentTag} is a pre-release version.`);
  process.exit(1);
}

start();
