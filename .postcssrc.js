// https://github.com/michael-ciniawsky/postcss-load-config
/**
 * @description 转换css工具
 */

module.exports = {
  "plugins": {
    // 用import引入css
    "postcss-import": {},
    // 用路径url引入css文件
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
}
