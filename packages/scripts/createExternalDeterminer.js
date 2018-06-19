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
    return Boolean(
      externalDependencies.find(dependencyName =>
        moduleName.startsWith(dependencyName)
      )
    );
  };
};
