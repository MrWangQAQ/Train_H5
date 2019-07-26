/**
 * webpack基础配置 —— base
 */

'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

/**
 * @description 传入dir拼入上层目录的绝对路径后面
 * @params dir 路径
 * @returns 一个路径
 */
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  context: path.resolve(__dirname, '../'),
  // 入口
  entry: {         // 入口路径
    app: './src/main.js'
  },
  // 出口
  output: {
    path: config.build.assetsRoot,    // 打包后输出路径
    filename: '[name].js',        // 输出文件名称默认原名
    publicPath: process.env.NODE_ENV === 'production'       // webpack构建的时候为项目中的所有资源指定一个基础路径
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {    // 决定要做的事情（配置模块如何解析）
    extensions: ['.js', '.vue', '.json'],   // 配置 这些后缀的文件引入不需要加扩展名
    alias: {    // 设置别名，为了后续引用方便，减少复杂度
      'vue$': 'vue/dist/vue.esm.js', 
      '@': resolve('src'),     // 配置@为项目src路径，为项目路径跟上src
    }
  },
  /**
   * test： 正则表达式，匹配文件
   * loader/loaders参数，用来指示用哪个或哪些loader来处理目标资源，这俩货
        表达的其实是一个意思，只是写法不一样，我个人推荐用loader写成一行，多个
        loader间使用!分割，这种形式类似于管道的概念，又或者说是函数式编程。形
        如loader: 'css?!postcss!less'，可以很明显地看出，目标资源先经less-loader
        处理过后将结果交给postcss-loader作进一步处理，然后最后再交给css-loader。
   * include： 指明那些文件夹要使用该loader
   * options： 作为参数传给loader
   * exclude： 需要忽略的资源
   */
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.scss$/,
        loader: ["style", "css", "sass"],
      }
    ]
  },
  node: {   // 一个对象，node的全局变量或者模块名称
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
