const localPackageJson = require("../../package.json");

// Get the package.json version from the local codebase
module.exports = function getLocalVersion() {
  return localPackageJson.version;
};
