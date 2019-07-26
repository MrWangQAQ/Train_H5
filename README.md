# 1. my-task

> A Vue.js project

## 1.1. Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 1.2. 文件目录结构
---

```
├─ build                     // webpack相关配置  
│  ├─ build.js               // 生产环境构建代码
│  ├─ check-versions.js      // 检查node和npm版本
│  ├─ utils.js               // 构建工具方法
│  ├─ vue-loader.conf.js     // css加载器配置
│  ├─ webpack.base.conf.js   // webpack基础配置
│  ├─ webpack.dev.conf.js    // webpack开发环境配置
│  ├─ webpack.prod.conf.js   // webpack生产环境配置
├─ config                    // vue的相关配置文件 
│  ├─ dev.env.js             // 开发环境变量配置
│  ├─ index.js               // 项目变量配置
│  ├─ prod.env.js            // 生产环境变量配置
│  ├─ test.env.js            // 测试环境变量配置
├─ src                       // 资源文件夹（开发时候）  
│  ├─ assets                 // 存放静态资源文件（比如图片）
│  ├─ components             // 公共组件
│  ├─ config                 // 数据配置文件（工具型js）
│  ├─ router                 // 路由文件
│  ├─ style                  // 公用样式
│  ├─ view                   // page 页面代码
│  ├─ App.vue                // 入口vue
│  ├─ main.js                // 入口js
├─ static                    // 用不着
├─ test                      // 单元测试
│  ├─ babelrc                // babel配置 es6转es5
│  ├─ .postcssrc.js          // css工具
│  ├─ index.html             // html模板入口
│  ├─ package-lock.json      // npm install 运行之后生成的package的来源和版本号记录
│  ├─ package.json           // 项目基本信息（名称、版本、依赖等）
```

