export default {
	//点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
	addNum({ commit , state },id){
		commit('REMEMBER_ANSWER', id)
		if(state.itemNum < state.itemDetail.length){
			commit('ADD_ITEMNUM',1)
		}
	},
	// 记录正确答案
	rememberRightAnswer({ commit },id){
		commit('REMEMBER_RIGHTANSWER', id)
	},
	//初始化做题时间，以及初始化信息
	initializeData({ commit }){
		commit('REMEMBER_TIME');
		commit('INITIALIZE_DATA');
	}

}