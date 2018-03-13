<template>
	<div class="app-view">
		<v-header></v-header>
		<Slide></Slide>
		<Content></Content>
		<Loading></Loading>
		<Backscroll v-bind:scroller="scroller"></Backscroll>
	</div>
</template>

<script>
import Header from '../components/header/header.vue'
import Slide from '../components/slide/slide.vue'
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
		'Content': Content,
		'Loading': Loading,
		'Backscroll':Backscroll
	},
	created(){
	},
	mounted(){
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
	.theme {
	    height: 8rem;
	    position: relative;
		overflow: hidden;
	    div {
	        top: 0;
	        left: 0;
	        width: 100%;
	        height: 100%;
	        opacity: 0.4;
	        position: absolute;
	        background-color: blue;
	    }
	    img {
	        width: auto;
	        height: 8rem;
	        left: 50%;
	        transform: translate(-50%,0);
	        position: relative;
	    }
		h3,p{
			margin: 0;
		}
	    h3 {
	        width: 70%;
	        color: #fff;
	        font-size: 0.5rem;
	        line-height: 1rem;
	        right: 5%;
	        bottom: 1.5rem;
	        text-align: right;
	        position: absolute;
	        text-shadow: 1px 1px 10px rgba(0, 0, 0, .5);
	        p:first-child {
	            position: relative;
	            margin-bottom: 0.5rem;
	            &:before {
	                content: "";
	                width: 3rem;
	                bottom: -.3rem;
	                right: 0;
	                display: block;
	                position: absolute;
	                border: 2px solid yellow;
	            }
	        }

	    }
	}
</style>