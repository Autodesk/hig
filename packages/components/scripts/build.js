/* eslint-disable no-console, global-require, import/no-dynamic-require */
const CleanCss = require("clean-css");
const esprima = require("esprima");
const fs = require("fs");
const path = require("path");
const util = require("util");
const mkdirpFn = require("mkdirp");
const rollup = require("rollup");

const componentsPackageMeta = require("../package.json");

const mkdirp = util.promisify(mkdirpFn);
const readFile = util.promisify(fs.readFile);
const copyFile = util.promisify(fs.copyFile);
const writeFile = util.promisify(fs.writeFile);

const BUILD_PATH = path.resolve(__dirname, "../build");

function getPackagePath(packageName) {
  const packageMainPath = require.resolve(packageName);

  return path.resolve(packageMainPath, "../..");
}

function getPackageMeta(packagePath) {
  const packageJsonPath = path.join(packagePath, "package.json");

  if (!fs.existsSync(packageJsonPath)) return null;

  return require(packageJsonPath);
}

/**
 * @param {string} packageName
 */
function isScopedComponentPackage(packageName) {
  const packagePath = getPackagePath(packageName);
  const packageMeta = getPackageMeta(packagePath);

  if (!packageMeta) return false;

  const { name } = packageMeta;

  return name.startsWith("@hig");
}

/**
 * @param {ExportNamedDeclaration} exportDeclaration
 * @returns {string[]}
 */
function getNamesFromDeclaration(exportDeclaration) {
  return exportDeclaration.specifiers.map(specifier => specifier.exported.name);
}

/**
 * Parsed the package's main module and returns all of the export names
 * @param {string} packageName
 * @returns {string[]}
 */
function getPackageExportNames(packagePath) {
  const packageMeta = getPackageMeta(packagePath);
  const packageModulePath = path.join(packagePath, packageMeta.module);
  const moduleFileSource = fs.readFileSync(packageModulePath, "utf8");
  const { body } = esprima.parseModule(moduleFileSource);

  return body.reduce((result, statement) => {
    if (statement.type === "ExportDefaultDeclaration") {
      return result.concat(["default"]);
    }

    if (statement.type === "ExportNamedDeclaration") {
      return result.concat(getNamesFromDeclaration(statement));
    }

    return result;
  }, []);
}

/**
 * @returns {string[]}
 */
function getScopedPackages() {
  const { dependencies } = componentsPackageMeta;

  return Object.keys(dependencies).reduce((result, packageName) => {
    if (isScopedComponentPackage(packageName)) {
      const packagePath = getPackagePath(packageName);
      const packageMeta = getPackageMeta(packagePath);
      const packageExportNames = getPackageExportNames(packagePath);

      result.push({ packagePath, packageMeta, packageExportNames });
    }

    return result;
  }, []);
}

/**
 * @param {string} word
 */
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

/**
 * @param {string} packageName
 */
function createModuleName(packageName) {
  return packageName.slice(5);
}

/**
 * @param {string} packageName
 */
function createComponentName(packageName) {
  return packageName
    .slice(5)
    .split("-")
    .map(capitalize)
    .join("");
}

/**
 * @param {Object[]} scopedPackages
 */
function renderIndexModule(scopedPackages) {
  const statements = scopedPackages.map(packageInfo => {
    const { packageMeta } = packageInfo;
    const packageName = packageMeta.name;
    const componentName = createComponentName(packageName);

    return `export { default as ${componentName} } from "${packageName}";`;
  });

  return `${statements.join("\n")}\n`;
}

function createIndexModuleDestPath(ext) {
  return path.resolve(BUILD_PATH, `index.${ext}`);
}

/**
 * @param {string} scopedPackages
 */
async function createIndexModule(scopedPackages) {
  const data = renderIndexModule(scopedPackages);
  const dest = createIndexModuleDestPath("es.js");

  return writeFile(dest, data);
}

/**
 * @param {string} packageName
 */
function createComponentModuleDestPath(packageName, ext) {
  const moduleName = createModuleName(packageName);

  return path.resolve(BUILD_PATH, `${moduleName}.${ext}`);
}

/**
 * @param {Object} scopedPackage
 * @param {Object} scopedPackage.packageMeta
 * @param {string[]} scopedPackage.packageExportNames
 */
function createComponentModule({ packageMeta, packageExportNames }) {
  const packageName = packageMeta.name;
  const moduleExports = packageExportNames.join(", ");
  const dest = createComponentModuleDestPath(packageName, "es.js");
  const data = `export { ${moduleExports} } from "${packageName}";\n`;

  return writeFile(dest, data);
}

/**
 * @param {string} scopedPackages
 */
function getModulePaths(scopedPackages, ext) {
  return [
    createIndexModuleDestPath(ext),
    ...scopedPackages.map(({ packageMeta }) =>
      createComponentModuleDestPath(packageMeta.name, ext)
    )
  ];
}

/**
 * @param {string} scopedPackages
 */
async function generateModules(scopedPackages) {
  await Promise.all([
    createIndexModule(scopedPackages),
    ...scopedPackages.map(createComponentModule)
  ]);
}

/**
 * @param {string} srcPath
 */
async function transformModule(srcPath) {
  const destPath = srcPath.replace(".es.js", ".js");
  const bundle = await rollup.rollup({
    input: srcPath,
    external: moduleName => moduleName.startsWith("@hig")
  });

  return bundle.write({
    file: destPath,
    format: "cjs",
    exports: "named"
  });
}

/**
 * @param {Object[]} scopedPackages
 */
async function transformModules(scopedPackages) {
  const paths = getModulePaths(scopedPackages, "es.js");
  const operations = paths.map(transformModule);

  return Promise.all(operations);
}

function getStyleSheetPath({ packagePath, packageMeta }) {
  const { style: filePath } = packageMeta;

  if (!filePath) return null;

  return path.resolve(packagePath, filePath);
}

/**
 * @param {Object[]} scopedPackages
 */
async function buildIndexStylesheet(scopedPackages) {
  const readOperations = scopedPackages.map(async scopedPackage => {
    const styleSheetPath = getStyleSheetPath(scopedPackage);

    if (!styleSheetPath) return "";

    return readFile(styleSheetPath, "utf8");
  });

  const sources = await Promise.all(readOperations);
  const input = sources.join("\n");
  const dest = createIndexModuleDestPath("css");
  const output = new CleanCss({ level: 2 }).minify(input);

  return writeFile(dest, output.styles);
}

/**
 * @param {Object[]} scopedPackages
 */
async function copyComponentStylesheets(scopedPackages) {
  const operations = scopedPackages.map(async scopedPackage => {
    const srcPath = getStyleSheetPath(scopedPackage);

    if (!srcPath) return undefined;

    const { packageMeta } = scopedPackage;
    const packageName = packageMeta.name;
    const destPath = createComponentModuleDestPath(packageName, "css");

    return copyFile(srcPath, destPath);
  });

  return Promise.all(operations);
}

async function start() {
  const { version } = componentsPackageMeta;

  console.log(`Building @hig/components v${version}`);

  const scopedPackages = getScopedPackages();

  await mkdirp(BUILD_PATH);
  console.log("Generating modules...");
  await generateModules(scopedPackages);
  console.log("Transforming modules...");
  await transformModules(scopedPackages);
  console.log("Building index stylesheet...");
  await buildIndexStylesheet(scopedPackages);
  console.log("Copying component stylesheets...");
  await copyComponentStylesheets(scopedPackages);
  console.log("Build complete.");
}

start().catch(error => {
  console.error("Build failed.", error);
  process.exit(1);
});
