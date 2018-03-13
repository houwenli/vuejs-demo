<template>
	<header class="header">
		<i v-if="!flag" class="iconfont icon-ic_menu" @click="toggle"></i>
		<i v-if="flag" class="iconfont icon-ic_back" @click="back"></i>
	</header>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
	name:'Header',
	data(){
		return {

		}
	},
	computed:{
		...mapState(['flag','menuShow'])
	},
	methods: {
		...mapActions(['altMenuStatu']),
		back(n){
			if(n){
				this.$router.push({path:'home'})
			}else{
				window.history.back()
			}
		},
		toggle(){
			this.altMenuStatu();
		}
	},
	created(){

	}
}
</script>

<style lang="scss">
.header {
    width: 100%;
    height: 1.5rem;
    z-index: 9;
    padding-left: 5%;
    position: fixed;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.51) 95%);
	.iconfont {
	    color: #fff;
	    font-size: 0.8rem;
	    top: 20%;
	    position: relative;
	}
}
</style>