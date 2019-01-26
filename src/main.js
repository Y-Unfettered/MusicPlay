// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//移动端click的300毫秒延迟处理
import fastClick from 'fastclick'
//swiper的使用
import VueAwesomeSwiper from 'vue-awesome-swiper'
//axiox的引用
import axios from 'axios'
//vuex的注册
import { store } from "./store/store";
import * as wilddog from 'wilddog'

//进行基础的样式处理，保证样式的一致
import "styles/reset.css";
//对于移动端border 1px 的处理
import "styles/border.css";
//iconfont
import "styles/iconfont.css";
//swiper
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
axios.defaults.baseURL = 'http://localhost:3000';
var config = {
  syncURL: "https://wd5641080783zkrsci.wilddogio.com/"
};
wilddog.initializeApp(config);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
