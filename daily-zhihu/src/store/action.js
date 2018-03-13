export default {
	altMenuStatu({commit}){
		commit('ALT_MENUSTATUS')
	},
	altMenuNum({commit},id){
		commit('ALT_MENUNUM',id);
	},
	altLoadingStatus({commit}){
		commit('ALT_LOADINGSTATUS')
	},
	altToTopStatus({commit},type){
		commit('ALT_TOTOPSTATUS',type)
	}
}