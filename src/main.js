import Vue from 'vue';

import App from './App';

//这里引入你刚才定义的 router下的index.js
/*
	注意：只有是index.js的文件，引入的时候不用像下边这样写
	import router from './router/index.js',
	可以省略掉index.js,而如果是其它的名字就要引入全部
	比如：import router from './router/router.js'
*/
import router from './router';

new Vue({
  el: '#app',
  router, // 引入后在这里使用下
  render: h => h(App)
});

Vue.config.productionTip = false;