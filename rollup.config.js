// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import postcss from 'rollup-plugin-postcss';
import multiInput from 'rollup-plugin-multi-input';

export default {
  input: ['src/*.js'],
  output: {
    dir: 'demo',
    format: 'esm'
  },
  plugins: [
    multiInput(),
    postcss({
      extract: false,
      inject: false,
      use: ['sass']
    }),
    resolve({
      mainFields: ['module'],
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs(),
    terser()
  ]
};
