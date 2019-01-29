import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    text: '',
    volumeLink: '',
    result: {}
  },
  getters: {
    text: state => {
      return state.text
    },
    volumeLink: state => {
      return state.volumeLink
    },
    result: state => {
      return state.result
    }
  },
  mutations: {
    getBook: (state) => {
      const googleBooksApi = 'https://www.googleapis.com/books/v1/volumes?q='
      console.log(state.text)
      fetch(googleBooksApi + state.text)
        .then(response => response.json())
        .then(data => {
          state.volumeLink = data.items[0].selfLink
          fetch(state.volumeLink)
            .then(res => res.json())
            .then(data => {
              state.result = data
            })
        })
    }
  },
  actions: {
    getBook: ({commit}) => {
      commit('getBook')
    }
  }
})
