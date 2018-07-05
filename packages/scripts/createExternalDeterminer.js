/**
 * @param {string[]} externalDependencies dependencies and peerDependencies
 * @returns {function(string): boolean} A function to use for `rollupConfig.inputOptions.external`
 */
module.exports = function createExternalDeterminer(externalDependencies) {
  return function external(moduleName) {
    const isCssModule = moduleName.endsWith(".css");
    const isPackageDependency =
      externalDependencies.findIndex(dependencyName =>
        moduleName.startsWith(dependencyName)
      ) >= 0;

    return !isCssModule && isPackageDependency;
  };
};
