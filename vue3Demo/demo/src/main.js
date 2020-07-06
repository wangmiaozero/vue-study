/*
 * @Description: cls
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-07-06 09:34:18
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-07-06 10:50:19
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import Viewer from 'v-viewer';
Vue.config.productionTip = false
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/element-variables.scss';
import 'viewerjs/dist/viewer.css';
Vue.use(Viewer);
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
