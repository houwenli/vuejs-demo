<template>
	<div class="app-view">
		<v-header></v-header>
		<Slide></Slide>
		<Swipe></Swipe>
		<Content></Content>
		<Loading></Loading>
		<Backscroll v-bind:scroller="scroller"></Backscroll>
	</div>
</template>

<script>
import Header from '../components/header/header.vue'
import Slide from '../components/slide/slide.vue'
import Swipe from '../components/swipe/swipe.vue'
import Content from '../components/content/content.vue'
import Loading from '../components/loading/loading.vue'
import Backscroll from '../components/backscroll/backscroll.vue'
export default {
	name:'',
	data(){
		return {
			scroller: null
		}
	},
	computed:{

	},
	components:{
		'v-header': Header,
		'Slide': Slide,
		'Swipe': Swipe,
		'Content': Content,
		'Loading': Loading,
		'Backscroll':Backscroll
	},
	created() {

	},
	mounted() {
		this.scroller = this.$el
	}
}
</script>

<style lang="scss">
	.app-view{
		width: 100vw;
	    height: 100vh;
	    overflow: auto;
	}
</style>