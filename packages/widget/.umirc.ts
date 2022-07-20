import { defineConfig } from '@umijs/max';
export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/index' }, 
  ],
  outputPath: '../../dist/widget',
  mfsu: {},
 
  favicons: ['https://img.alicdn.com/imgextra/i1/O1CN01NmoRAx1EODnQRYlVm_!!6000000000341-73-tps-32-32.ico'],
  fastRefresh: true,
 
  extraBabelPlugins: process.env.NODE_ENV === 'production' ? ['babel-plugin-dynamic-import-node'] : [],
  // @ts-ignore
  chainWebpack(conf) {
    conf.module
    .rule('wasm$')
      .test(/\.wasm$/)
    .include
      .add(/public/)
      .end()
    .type('webassembly/async')
  }
});