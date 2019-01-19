// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//移动端click的300毫秒延迟处理
import fastClick from 'fastclick'

//进行基础的样式处理，保证样式的一致
import "@/assets/styles/reset.css";
//对于移动端border 1px 的处理
import "@/assets/styles/border.css";

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
