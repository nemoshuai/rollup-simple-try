/*
 * @Author: your name
 * @Date: 2021-12-30 17:29:48
 * @LastEditTime: 2021-12-31 16:47:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /rollup-try/main.js
 */
import { username } from './data.json'
import answer from 'the-answer'
import vm from 'virtual-module'

console.log(username)
console.log(vm)

export default function () {
  console.log('the answer is ' + answer);
}
