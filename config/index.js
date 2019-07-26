/**
 * 项目配置变量
 */

'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},         // 开发环境的代理，可以做跨域（仅开发环境下）

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST    开发启动服务地址
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined   启动端口
    autoOpenBrowser: false,       // 是否项目跑完之后自动打开默认浏览器
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,        // 是否使用eslint检查
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true    // 是否开启cssSourceMap： cssSourceMap记录代码压缩前的位置，当产生错误时直接定位到未压缩前的位置，将大大的方便我们调试。
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),   // 编译index.html存放位置（绝对定位）

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),     // 编译输出静态资源的绝对路径
    assetsSubDirectory: 'static',             // 除了index.html被编译过的文件都放在这里面
    assetsPublicPath: '/',        // index.html引用static里面的资源根路径

    /**
     * Source Maps
     */

    productionSourceMap: true,      // 构建生产环境时候是否开始sourceMap
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',     // 配置source-map 对于js的转换

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,        // 是否开启gzip压缩
    productionGzipExtensions: ['js', 'css'],      // 什么后缀的需要使用gzip

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report       // 是否在生成完之后查看分析报告
  }
}
