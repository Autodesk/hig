const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const string = require('rollup-plugin-string');
const collectSass = require('rollup-plugin-collect-sass');
const svg = require('rollup-plugin-svg');
const rootImport = require('rollup-plugin-root-import');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const json = require('rollup-plugin-json');

const inputOptions = {
  input: 'src/index.js',
  plugins: [
    resolve(),
    commonjs(),
    rootImport({
      root: `${__dirname}/src`,
      useEntry: 'prepend',
      extensions: '.js'
    }),
    babel({
      exclude: ['node_modules/**', '**/*.scss', '**/*.html', '**/*.svg', '**/*.json']
    }),
    json(),
    collectSass({
      include: '**/*.scss',
      extract: 'lib/hig.css',
      importOnce: true
    }),
    string({
      include: '**/*.html'
    }),
    svg()
  ]
};

const esModulesOutputOptions = {
  name: 'HigVanilla',
  file: 'lib/hig.es.js',
  format: 'es',
  external: ['hig-interface', 'mustache', 'i18next']
};

const browserFriendlyOutputOptions = {
  name: 'Hig',
  file: 'lib/hig.js',
  format: 'umd'
};

async function build() {
  let bundle;
  try {
    bundle = await rollup.rollup(inputOptions);
    bundle.write(esModulesOutputOptions);
    bundle.write(browserFriendlyOutputOptions);
  } catch (e) {
    console.log(e);
  }
}

build();