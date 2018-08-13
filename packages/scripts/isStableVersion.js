const semver = require("semver");

/**
 * @param {string} version
 * @returns {boolean}
 */
module.exports = function isStableVersion(version) {
  return !semver.prerelease(semver.clean(version));
};
