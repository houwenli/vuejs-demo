import Vue from 'vue'
import Vuex from 'vuex'
import AudioInfo from './modules/audio.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    allInfo: {
      username: 'houwenli',
      isShowMenu: false
    },
    count: 0
  },
  getters: {
    getAllInfo: state => state.allInfo,
    getInfo: (state, key) => state.allInfo.key
  },
  mutations: {
    setAllInfo: (state, obj) => { state.allInfo = obj },
    addInfo: (state, obj) => {
      for (var i in obj) {
        state.allInfo[i] = obj[i]
      }
    },
    INCREMENT: (state) => {
      state.count++
    },
    DECREMENT: (state) => {
      state.count--
    }
  },
  actions: {
    set_AllInfo: ({commit}, obj) => commit('setAllInfo', obj),
    add_Info: ({commit},obj) => commit('addInfo',obj),
    increment: ({commit}) => commit('INCREMENT'),
    decrement: ({commit}) => commit('DECREMENT')
  },
  modules:{
  	audioinfo: AudioInfo
  }
})
export default store
