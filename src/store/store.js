import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters: {
    getCollectById: (state) => (id) => {
      return state.collectArticles.find(item => item.id === id)
    },
    getThinkGoodById: (state) => (id) => {
      return state.goodArticles.find(item => item.article.id === id)
    }
  },
  mutations: {
    handleStoreCollect (state, param) {
      let {isCollect, article} = param
      let curIndex = state.collectArticles.findIndex((item) => item.id === article.id)
      if (curIndex >= 0) {
        if (!isCollect) {
          state.collectArticles.splice(curIndex, 1)
        }
      } else {
        if (isCollect) {
          state.collectArticles.push(article)
        }
      }
      let storageData = {
        data: state.collectArticles
      }
      localStorage.setItem('collect', JSON.stringify(storageData))
    },
    handleStoreThinkGood (state, param) {
      let { isGood, curCount, article } = param
      let curIndex = state.goodArticles.findIndex((item) => item.article.id === article.id)
      if (curIndex >= 0) {
        if (!isGood) {
          state.goodArticles.splice(curIndex, 1)
        }
      } else {
        if (isGood) {
          state.goodArticles.push({
            article,
            curCount
          })
        }
      }
      console.log('state.goodArticles', state.goodArticles)
      let storageData = {
        data: state.goodArticles
      }
      localStorage.setItem('thinkGood', JSON.stringify(storageData))
    }
  }
})

export default store
