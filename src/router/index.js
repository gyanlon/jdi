import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//export default 是对外暴露这个配置
export default new Router({
  routes: []
})
/**
你的可能跟我的有些不一样，我这里删除了原先定义的路由

2.如果你安装脚手架的时候没有选择安装路由,那就在src目录下
新建一个router文件和一个index.js,在这个js文件里配置全部
路由，推荐把路由配置文件单独抽离出来

这样做完之后，打开main.js,使用下路由

*/