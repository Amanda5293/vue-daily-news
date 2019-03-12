import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import ThemeNews from '@/components/ThemeNews'
import PersonInfo from '@/components/PersonInfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/main',
      component: MainPage
    },
    {
      path: '/theme',
      component: ThemeNews
    },
    {
      path: '/person',
      component: PersonInfo
    }
  ]
})
