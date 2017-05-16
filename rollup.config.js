/**
Copyright 2016 Autodesk,Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
import babel from 'rollup-plugin-babel';
import fs from 'fs';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import es2015Rollup from 'babel-preset-es2015-rollup';
import reactPreset from 'babel-preset-react';

const pkg = JSON.parse(fs.readFileSync('./package.json'));

export default {
  entry: 'src/react-hig.js',
  plugins: [
    resolve(),

    commonjs({
      namedExports: {
        '../hig.web/dist/hig.js': ['Button', 'GlobalNav']
      }
    }),

    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [es2015Rollup, reactPreset],
      plugins: [
        'transform-class-properties',
        [
          'transform-object-rest-spread',
          {
            useBuiltIns: true
          }
        ]
      ]
    })
  ],
  targets: [
    { dest: pkg.main, format: 'cjs' },
    { dest: pkg.module, format: 'es' },
    { dest: pkg['umd:main'], format: 'umd', moduleName: 'ReactHIG' }
  ],

  external: ['react', 'react-dom', 'prop-types'],
  globals: {
    react: 'React',
    ['react-dom']: 'ReactDOM',
    ['prop-types']: 'PropTypes'
  }
};
