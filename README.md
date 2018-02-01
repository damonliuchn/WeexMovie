# 本工程尝试实现
1. Web端做SPA，Native端做多页应用
2. 使用Vuex

# 启动
1. npm install
2. npm run serve
3. npm run dev:native
4. 使用weexplaygroud 浏览 http://yourhost:10004/dist/pages/index.js

## Todo

3、https://github.com/alibaba/weex-ui   wxc-tab-page

3、https://github.com/bingo-oss/bui-weex  tabbar

4、navigator

5、Android App

## 一、build native
- 每个vue文件都为生成一个独立的bundle
- 每个 page下的vue都是入口
即 *.vue --> mixins --> 加载vue-router和vuex
- 每个bundle都有自己独立的vuex环境，互不相通

## 二、build web
- 所有的vue页面都会打包成一个bundle
- 入口是entry-web.js
即 index.html -> entry-web.js --> router-web.js --> index.vue --> mixins --> 加载router-native(无效)和vuex
- 整个项目里页面间的vuex环境相通

## 三、工具记录
1. weex 脚手架
npm install  -g  weex-toolkit #用npm安装 weex-toolkit

2. weex 调试
weex debug #会安装weex-devtool  然后开启debug调试

3. weex 包管理
weex create #会安装weexpack

4. Android weex server host 设置
- 使用真机，设置电脑真实ip
- 使用真机并且连接usb调试，设置localhost 使用adb reverse
- 使用genomotion 设置ip 为10.0.2.3 或使用虚 AVD 设置ip 10...忘了

---
参考：
http://xiazhou.me/blog/20170214.html