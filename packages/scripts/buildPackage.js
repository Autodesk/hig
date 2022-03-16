/** @todo Refactor this module to not have side effects */

const path = require("path");
const { rollup } = require("rollup");
const { babel } = require("@rollup/plugin-babel");
const commonjs = require("@rollup/plugin-commonjs");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const json = require("@rollup/plugin-json");
const svgr = require("@svgr/rollup");
const createBuildPreset = require("@hig/babel-preset/build");

const createExternalDeterminer = require("./createExternalDeterminer");

/* eslint-disable-next-line import/no-dynamic-require */
const packageMeta = require(path.resolve(process.cwd(), "package.json"));

const {
  name: packageName,
  version: packageVersion,
  peerDependencies = {},
  dependencies = {},
  main: mainOutputFile = "build/index.js",
  module: esOutputFile = "build/index.es.js"
} = packageMeta;

const externalDependencies = Object.keys(peerDependencies).concat(
  Object.keys(dependencies)
);

const inputOptions = {
  input: "src/index.js",
  external: createExternalDeterminer(externalDependencies),
  plugins: [
    nodeResolve(),
    svgr.default(),
    json(),
    babel({
      babelrc: false,
      babelHelpers: 'bundled',
      ...createBuildPreset()
    }),
    commonjs()
  ]
};

const esModulesOutputOptions = {
  name: "HIG",
  file: esOutputFile,
  format: "es"
};

const cjsOutputOptions = {
  file: mainOutputFile,
  format: "cjs",
  exports: "named"
};

module.exports = async function buildPackage() {
  /* eslint-disable-next-line no-console */
  console.log(`Bundling ${packageName} v${packageVersion}.`);

  const bundle = await rollup(inputOptions);

  return Promise.all([
    bundle.write(esModulesOutputOptions),
    bundle.write(cjsOutputOptions)
  ]);
};
