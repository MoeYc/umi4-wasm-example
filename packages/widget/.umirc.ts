import { defineConfig } from '@umijs/max';
export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/index' }, 
  ],
  favicons: ['https://img.alicdn.com/imgextra/i1/O1CN01NmoRAx1EODnQRYlVm_!!6000000000341-73-tps-32-32.ico'],
 
  // extraBabelPlugins: process.env.NODE_ENV === 'production' ? ['babel-plugin-dynamic-import-node'] : [],
  // @ts-ignore
  chainWebpack(config) {
    config.set('experiments', {
      ...config.get('experiments'),
      asyncWebAssembly: true
    })

    const REG = /\.wasm$/

    config.module.rule('asset').exclude.add(REG).end();

    config.module
      .rule('wasm')
      .test(REG)
      .exclude.add(/node_modules/)
      .end()
      .type('webassembly/async')
      .end()
  },
});