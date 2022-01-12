/*
 * @Author: your name
 * @Date: 2021-12-31 14:23:18
 * @LastEditTime: 2021-12-31 16:34:38
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /rollup-try/foo.js
 */

const rollup = require('rollup')
const json = require('rollup-plugin-json')
const resolve = require('rollup-plugin-node-resolve')
const { terser } = require('rollup-plugin-terser')

const inputOptions = {
  input: './main01.js',
  plugins: [json(), resolve(), terser()]
}

const outputOptions =  {
  file: 'bundle01.js',
  format: 'umd',
  name: 'bundle01', // node-resolve 必须提供 不然UnhandledPromiseRejectionWarning,
}

async function build() {
  const bundle = await rollup.rollup(inputOptions);
  
  console.log(bundle.watchFiles);
  
  const { output } = await bundle.generate(outputOptions);

  for(const chunkOrAsset of output) {
    if(chunkOrAsset.type === 'asset') {
      console.log('Asset', chunkOrAsset)
    } else {
      console.log('chunk', chunkOrAsset.modules)
    }
  }

  await bundle.write(outputOptions);
  await bundle.close();
}

const watchOptions = {
  ...inputOptions,
  output: [outputOptions],
  watch: {
    exclude: "node_modules/**"
  }
}

const watcher = rollup.watch(watchOptions);

watcher.on('event', event => {
  if(event.code === 'BUNDLE_END') {
    console.log('构建', event.output)
  }
})

build();

watcher.close()
