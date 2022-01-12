/*
 * @Author: your name
 * @Date: 2021-12-31 14:35:51
 * @LastEditTime: 2021-12-31 16:32:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /rollup-try/main01.js
 */
import { username } from './data.json'
import answer from 'the-answer'

console.log('username', username)

export default function () {
  console.log('the answer is ' + answer);
}
