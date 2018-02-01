const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMEMBER_ANSWER = 'REMEMBER_ANSWER'
const REMEMBER_TIME = 'REMEMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'

export default {
	//点击进入下一题
	[ADD_ITEMNUM](state ,num){
		state.itemNum += num;
	},

	// 记录用户答案
	[REMEMBER_ANSWER](state, id){
		state.answerid.push(id)
	},

	// 记录做题时间
	[REMEMBER_TIME](state){
		state.timer = setInterval(()=>{
			state.allTime++
		},1000)
	},

	// 重新开始，初始化
	[INITIALIZE_DATA](state){
		state.itemNum = 1;
		state.allTime = 0;
		state.timer = '';
		state.answerid = [];
	}
}