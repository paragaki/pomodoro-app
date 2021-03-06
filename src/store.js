import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    timer: null,
    counter: 1500,
    maxCount: 0,
    isTimerOn: false,
    activeTab: 'Pomodoro'
  },
  getters: {
    dateCounter: (state) => {
      const minutes = Math.floor(state.counter / 60)
      const seconds = state.counter % 60
      return `${('00' + minutes).slice(-2)}:${('00' + seconds).slice(-2)}`
    },
    activeTab: (state) => {
      return state.activeTab
    }
  },
  mutations: {
    start (state) {
      state.isTimerOn = true
      state.timer = setInterval(() => --state.counter, 1000)
    },
    pause (state) {
      state.isTimerOn = false
      clearInterval(state.timer)
    },
    reset (state) {
      state.isTimerOn = false
      clearInterval(state.timer)
      state.counter = state.maxCount
    },
    changeTab (state, payload) {
      state.activeTab = payload.activeTab
    },
    setCount (state, payload) {
      state.maxCount = payload.maxCount
    }
  }
})

export default store