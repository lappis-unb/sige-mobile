import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      campus: {
        acronym: 'Todos os campi',
        id: null
      }
    },
    mutations: {
      change (state, newCampus) {
        state.campus = newCampus
      }
    },
    getters: {
      campus: state => state.campus
    }
  })
  return Store
}
