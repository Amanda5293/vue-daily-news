import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import PersonPrefer from '@/components/PersonPrefer'
import ArticleDetail from '@/components/ArticleDetail'
import ArticleComments from '@/components/ArticleComments'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: MainPage
    },
    {
      path: '/person',
      component: PersonPrefer
    },
    {
      path: '/article/:id',
      name: 'article',
      component: ArticleDetail
    },
    {
      path: '/comments/:articleId',
      name: 'comments',
      component: ArticleComments
    }
  ]
})
