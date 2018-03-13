<template>
	<div v-if="showFlag" class="circle" @click="top()">
		<i class="iconfont icon-ic_top"></i>
	</div>
</template>

<script>
import Scroll from '../scroll.js'
import {mapState, mapActions} from 'vuex'
export default {
	name:'backscroll',
	mixins: [Scroll],
	data(){
		return {
			
		}
	},
	computed:{
		...mapState({
			showFlag: state=>state.toTopShow
		})
	},
	components:{

	},
	methods: {
		...mapActions(['altToTopStatus']),
		top(){
			let dom = document.querySelector('.app-view')
			let height = dom.scrollTop
			let scrollTop = parseInt(height / 50);
			let time = setInterval(function() {
				height -= scrollTop;
				if (height <= 0) {
					dom.scrollTop = 0;
					clearInterval(time);
				} else {
					dom.scrollTop = height;
				}
			}, 1);
		},
		onScroll() {
			const scroller = this.scroller
			const isWindow = scroller === window
			const height = Math.ceil(window.screen.height / 2);
			const scrollTop = isWindow ? scroller.scrollY : scroller.scrollTop
			// 监听页面已滑动的位置，当页面滑动半屏之后，显示“返回顶部”按钮
			if (scrollTop > height) {
				this.altToTopStatus(1);
			}else{
				this.altToTopStatus(0);
			}
		}
	},
	created(){

	}
}
</script>

<style lang="scss">
.circle {
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.80);
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.50);
	right: 5%;
	bottom: 5vw;
	position: fixed;
	z-index: 10;
	i {
		top: 50%;
		left: 50%;
		font-size: 0.6rem;
		color: #ACB9C9;
		transform: translate(-50%, -50%);
		position: absolute;
	}
}
</style>