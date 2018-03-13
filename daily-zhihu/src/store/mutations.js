const ALT_MENUSTATUS = 'ALT_MENUSTATUS'
const ALT_MENUNUM = 'ALT_MENUNUM'
const ALT_LOADINGSTATUS = 'ALT_LOADINGSTATUS'
const ALT_TOTOPSTATUS = 'ALT_TOTOPSTATUS'

export default {
	// 改变菜单状态显示/影藏
	[ALT_MENUSTATUS](state){
		state.menuShow = !state.menuShow
	},
	[ALT_MENUNUM](state, id){
		state.menuNum = id
	},
	[ALT_LOADINGSTATUS](state){
		state.loadingShow = !state.loadingShow
	},
	[ALT_TOTOPSTATUS](state, type){
		if(type){
			state.toTopShow = true
		}else{
			state.toTopShow = false
		}
	}
}