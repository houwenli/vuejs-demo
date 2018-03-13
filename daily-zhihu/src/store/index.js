import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
	flag: false,
	menuShow: false,
	menuNum: 1,
	loadingShow: false,
	toTopShow: false
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})