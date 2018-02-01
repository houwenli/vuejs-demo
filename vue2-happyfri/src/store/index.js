import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import action from './action'

Vue.use(Vuex)

const state = {
	level: '第一周',
	itemNum: 1,
	allTime: 0,
	timer: '',
	answerid: [],
	itemDetail: [{

	}]
}

export default new Vuex.Store({
	state,
	mutations,
	action
})