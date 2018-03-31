#! /usr/bin/env node

const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const postcss = require('rollup-plugin-postcss');
const json = require('rollup-plugin-json');
const postcssFuncitons = require('postcss-functions');

const inputOptions = {
  input: 'src/index.js',
  plugins: [
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
  ]
};

const esModulesOutputOptions = {
  name: 'HIG',
  file: 'build/index.es.js',
  format: 'es',
  external: ['hig-interface', 'mustache', 'i18next']
};

async function build() {
  let bundle;
  try {
    bundle = await rollup.rollup(inputOptions);
    bundle.write(esModulesOutputOptions);
  } catch (e) {
    console.log(e);
  }
}

build();