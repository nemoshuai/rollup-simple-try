/*
 * @Author: your name
 * @Date: 2021-12-31 16:40:35
 * @LastEditTime: 2021-12-31 16:50:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /rollup-try/plugins/rollup-plugin-example.js
 */
export default function myExample() {
  return {
    name: 'my-example', // 插件的名称，输出到warnings和errors
    resolveId (source) {
      if(source === 'virtual-module') {
        return source; // 表示接管
      }

      return null;
    },
    load (id) {
      if(id === 'virtual-module') {
        return 'export default "this is virtual"' // virtual module模块的源代码
      }
      return null; // 
    }
  }
}
