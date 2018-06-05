const monorepoConfig = require("semantic-release-monorepo");
const readPkg = require("read-pkg");

const packageName = readPkg.sync().name;

module.exports = {
  ...monorepoConfig,
  tagFormat: `${packageName}@\${version}`,
  prepare: [
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/git"
  ]
};
