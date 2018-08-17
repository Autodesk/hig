#! /usr/bin/env node
require("@hig/scripts/buildPackage")().catch(error => {
  console.error("Build failed.", error);
  process.exit(1);
});
