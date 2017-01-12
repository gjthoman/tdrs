import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    points: []
  },
  mutations: {
    addPoint (state, { title, date }) {
      state.points.push({
        title: title,
        date: date
      })
    },
    removePoint (state, {point}) {
      const index = state.points.indexOf(point)
      state.points.splice(index, 1)
    }
  }
})
