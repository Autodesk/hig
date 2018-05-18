const cloneDeep = require("lodash.clonedeep");
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const {
  excludePackageNames,
  includeBuildPaths,
  includeDependencyPaths
} = require("./circleciCacheConfig.json");

const BASE_PATH = path.resolve(__dirname, "..");
const PACKAGES_PATH = path.resolve(BASE_PATH, "packages");
const CONFIG_PATH = path.resolve(BASE_PATH, ".circleci/config.yml");
const YAML_CONFIG = { lineWidth: 9999 };

/**
 * Determines whether the given path contains a package
 * @param {string} packagePath Absolute path
 */
function isPackage(packagePath) {
  const packagePathStats = fs.lstatSync(packagePath);
  const packageJsonPath = path.join(packagePath, "package.json");

  if (!packagePathStats.isDirectory() || !fs.existsSync(packageJsonPath)) {
    return false;
  }

  const { name } = require(packageJsonPath);

  return !excludePackageNames.includes(name);
}

/**
 * Determines whether the given package directory should be cached
 * @param {string} packagePath Absolute path
 */
function isCachedPackage(packagePath) {
  const packageJsonPath = path.join(packagePath, "package.json");
  const { scripts } = require(packageJsonPath);

  return !!(scripts && scripts.build);
}

function getPackageDirectories() {
  const subDirectories = fs.readdirSync(PACKAGES_PATH);

  return subDirectories.reduce((result, packageDirName) => {
    const packagePath = path.resolve(PACKAGES_PATH, packageDirName);

    if (isPackage(packagePath)) {
      result.push(packagePath);
    }

    return result;
  }, []);
}

function getPackagePath(packageDir) {
  return packageDir.substring(BASE_PATH.length + 1);
}

function createCachePath(subPath) {
  return packageDir => {
    const packagePath = getPackagePath(packageDir);

    // String interpolation is used to create deterministic values
    return `${packagePath}/${subPath}`;
  };
}

function getPackageBuildPaths(packageDirs) {
  const buildPaths = packageDirs
    .filter(isCachedPackage)
    .map(createCachePath("build"));

  return includeBuildPaths.concat(buildPaths).sort();
}

function getPackageDependencyPaths(packageDirs) {
  const dependencyPaths = packageDirs.map(createCachePath("node_modules"));

  return includeDependencyPaths.concat(dependencyPaths).sort();
}

function createConfig({ parsedConfig, buildPaths, dependencyPaths }) {
  const config = cloneDeep(parsedConfig);

  config.jobs.bootstrap.steps[4].save_cache.paths = dependencyPaths;
  config.jobs["package-build"].steps[4].save_cache.paths = buildPaths;

  return config;
}

function updateCircleCiCacheConfig() {
  const packageDirs = getPackageDirectories();
  const buildPaths = getPackageBuildPaths(packageDirs);
  const dependencyPaths = getPackageDependencyPaths(packageDirs);
  const configSrc = fs.readFileSync(CONFIG_PATH, "utf8");
  const parsedConfig = yaml.load(configSrc);
  const updatedConfig = createConfig({
    parsedConfig,
    buildPaths,
    dependencyPaths
  });
  const updatedSrc = yaml.dump(updatedConfig, YAML_CONFIG);

  fs.writeFileSync(CONFIG_PATH, updatedSrc);
}

updateCircleCiCacheConfig();
