/**
 * @param {string[]} externalDependencies dependencies and peerDependencies
 * @returns {Function} A function to use for `rollupConfig.inputOptions.external`
 */
module.exports = function createExternalDeterminer(externalDependencies) {
  /**
   * Determines whether the given module is external
   * @param {string} moduleName
   * @returns {boolean}
   */
  return function external(moduleName) {
    const packageName = moduleName.split("/").shift();

    return externalDependencies.includes(packageName);
  };
};
