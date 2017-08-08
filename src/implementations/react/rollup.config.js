
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
        '../hig.web/dist/hig.js': [
          'Button',
          'Checkbox',
          'GlobalNav',
          'IconButton',
          'RadioButton',
          'Range',
          'TextArea',
          'TextField'
        ]
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
