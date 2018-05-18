const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const BASE_PATH = path.resolve(__dirname, "..");
const PACKAGES_PATH = path.resolve(BASE_PATH, "packages");
const CONFIG_PATH = path.resolve(BASE_PATH, ".circleci/config.yml");

const excludePackageNames = [
  "@hig/babel-preset",
  "@hig/scripts",
  "hig-interface",
  "hig-react",
  "hig-vanilla"
];

const includeBuildPaths = ["packages/react/lib", "packages/vanilla/lib"];

const includeDependencyPaths = [
  ".dependency-hash",
  "node_modules",
  "packages/react/node_modules",
  "packages/vanilla/node_modules"
];

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

function diffArray(previous, next) {
  const remove = previous.reduce((result, value) => {
    if (!next.includes(value)) result.push(value);
    return result;
  }, []);
  const add = next.reduce((result, value) => {
    if (!previous.includes(value)) result.push(value);
    return result;
  }, []);
  const hasChanges = !!(add.length || remove.length);

  return { hasChanges, add, remove };
}

function getCachePathsDiff({ config, buildPaths, dependencyPaths }) {
  const previousDependencyPaths =
    config.jobs.bootstrap.steps[4].save_cache.paths;
  const previousBuildPaths =
    config.jobs["package-build"].steps[4].save_cache.paths;
  const dependencyPathsDiff = diffArray(
    previousDependencyPaths,
    dependencyPaths
  );
  const buildPathsDiff = diffArray(previousBuildPaths, buildPaths);
  const hasChanges =
    dependencyPathsDiff.hasChanges || buildPathsDiff.hasChanges;

  return { hasChanges, dependencyPathsDiff, buildPathsDiff };
}

function checkCiConfig() {
  const packageDirs = getPackageDirectories();
  const buildPaths = getPackageBuildPaths(packageDirs);
  const dependencyPaths = getPackageDependencyPaths(packageDirs);
  const configSrc = fs.readFileSync(CONFIG_PATH, "utf8");
  const config = yaml.load(configSrc);
  const cachePathDiff = getCachePathsDiff({
    config,
    buildPaths,
    dependencyPaths
  });

  if (cachePathDiff.hasChanges) {
    console.log("\x1b[37m\x1b[41m");
    console.error("The CI cache configuration is outdated. Please update the config using the diff below and try again.");
    console.log("\x1b[0m");
    console.log(cachePathDiff);
    process.exit(1);
  }
}

checkCiConfig();
