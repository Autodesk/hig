#! /usr/bin/env node

const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
// const string = require('rollup-plugin-string');
const postcss = require('rollup-plugin-postcss');
// const svg = require('rollup-plugin-svg');
// const rootImport = require('rollup-plugin-root-import');
// const resolve = require('rollup-plugin-node-resolve');
// const commonjs = require('rollup-plugin-commonjs');
const json = require('rollup-plugin-json');
const postcssFuncitons = require('postcss-functions');

const inputOptions = {
  input: 'src/index.js',
  plugins: [
    // resolve(),
    // commonjs(),
    // rootImport({
    //   root: `${__dirname}/src`,
    //   useEntry: 'prepend',
    //   extensions: '.js'
    // }),
    babel({
      exclude: ['node_modules/**', '**/*.scss', '**/*.html', '**/*.svg', '**/*.json'],
      "presets": [
        ["env",
          {
            "modules": false,
            "targets": {
              "browser": ">1%"
            }
          }
        ],
        "stage-2",
        "react"
      ],
      "plugins": ["external-helpers"]
    }),
    json(),
    postcss({
      extract: true,
      output: "build/index.css",
      plugins: [postcssFuncitons]
    }),
    // svg()
  ]
};

const esModulesOutputOptions = {
  name: 'HIG',
  file: 'build/index.es.js',
  format: 'es',
  external: ['hig-interface', 'mustache', 'i18next']
};

// const browserFriendlyOutputOptions = {
//   name: 'HIG',
//   file: 'build/index.js',
//   format: 'cjs'
// };

async function build() {
  let bundle;
  try {
    bundle = await rollup.rollup(inputOptions);
    bundle.write(esModulesOutputOptions);
    // bundle.write(browserFriendlyOutputOptions);
  } catch (e) {
    console.log(e);
  }
}

build();