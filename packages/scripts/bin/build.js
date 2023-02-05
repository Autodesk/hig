#! /usr/bin/env node
require("@weave-design/scripts/buildPackage")().catch(error => {
  console.error("Build failed.", error);
  process.exit(1);
});
