// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
// 解决移动端点击事件300ms延迟
import fastClick from 'fastclick'
// 引入swiper 插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 导入样式文件
import 'swiper/dist/css/swiper.css'
import 'styles/reset.styl'

Vue.config.productionTip = false
fastClick.attach(document.body)

// 使用swiper插件
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
