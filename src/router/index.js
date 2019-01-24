import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Player from '@/pages/Player/Player'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/Player',
      name:'Player',
      component:Player
    }
  ]
})
