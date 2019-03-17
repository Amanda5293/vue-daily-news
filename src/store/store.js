import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  collectArticles: [],
  goodArticles: []
}

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
    }
  }
})

export default store
