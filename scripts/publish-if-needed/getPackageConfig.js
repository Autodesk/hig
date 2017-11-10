const path = require('path');

module.exports = function getPackageConfig(packageName) {
  return require(path.join('../../packages', packageName, 'package.json'));
};
