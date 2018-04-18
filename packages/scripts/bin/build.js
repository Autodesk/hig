#! /usr/bin/env node

const path = require("path");
const rollup = require("rollup");
const babel = require("rollup-plugin-babel");
const commonjs = require("rollup-plugin-commonjs");
const nodeResolve = require("rollup-plugin-node-resolve");
const postcss = require("rollup-plugin-postcss");
const json = require("rollup-plugin-json");
const postcssFuncitons = require("postcss-functions");
const postcssImport = require("postcss-import");
const createBuildPreset = require('@hig/babel-preset/build');

const packageMeta = require(path.resolve(process.cwd(), "package.json"));

const {
  name: packageName,
  version: packageVersion,
  peerDependencies = {},
  dependencies = {},
  main: mainOutputFile = "build/index.js",
  module: esOutputFile = "build/index.es.js",
  css: cssOutputFile = "build/index.css"
} = packageMeta;

const external = Object.keys(peerDependencies).concat(
  Object.keys(dependencies)
);

const inputOptions = {
  input: "src/index.js",
  external,
  plugins: [
    nodeResolve(),
    babel({
      babelrc: false,
      ...createBuildPreset()
    }),
    commonjs(),
    json(),
    postcss({
      extract: true,
      output: cssOutputFile,
      plugins: [postcssFuncitons, postcssImport]
    })
  ]
};

const esModulesOutputOptions = {
  name: "HIG",
  file: esOutputFile,
  format: "es"
};

const cjsOutputOptions = {
  file: mainOutputFile,
  format: "cjs"
}

async function build() {
  console.log(`Bundling ${packageName} v${packageVersion}.`);

  try {
    const bundle = await rollup.rollup(inputOptions);

    bundle.write(esModulesOutputOptions);
    bundle.write(cjsOutputOptions);
  } catch (e) {
    console.log(e);
  }
}

build();
