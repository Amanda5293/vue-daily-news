import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  collectNews: [],
  goodNews: []
}

const store = new Vuex.Store({
  state,
  mutations: {
    _getCollectIndex (id) {
      return state.collectNews.findIndex((val, index) => val.id === id)
    }
  }
})

export default store
