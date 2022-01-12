/*
 * @Author: your name
 * @Date: 2021-12-30 17:43:36
 * @LastEditTime: 2021-12-31 16:47:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /rollup-try/rollup.config.js
 */
import json from 'rollup-plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import myExample from './plugins/rollup-plugin-my-example'
export default {
  input: './main.js',
  output: [
    {
      file: 'bundle.js',
      name: 'bundle',
      format: 'umd'
    },
    {
      file: 'bundle.min.js',
      format: 'iife',
      name: 'version',
      plugins: [terser()]
    }
  ],
  watch: {
    exclude: "node_modules/**"
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
    myExample(),
    babel({ 
      exclude: "node_modules/**",
      // plugins: ['external-helpers']
   })
  ]
}