<template>
	<div class="loading-pannel" v-if="loadingShow">
		<div class="loading" >
			<span class="left"></span>
			<span class="middle"></span>
			<span class="right"></span>
		</div>
	</div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
	name:'loading',
	data(){
		return {

		}
	},
	computed:{
		...mapState(['loadingShow'])
	},
	components:{

	},
	created(){

	}
}
</script>

<style lang="scss">
.loading-pannel{
	width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    background-color: #fff;
}
.loading {
	width: 25%;
	height: 0.4rem;
	margin: 25% auto 0;
	position: relative;
  	span {
		display: block;
		width: 0.4rem;
		height: 0.4rem;
		border-radius: 50%;
		position: absolute;
		background: #5B7492;
		transform: translate(-50%, 0);
	}
	.left {
		background: #FFD300;
		animation: lMove 2.5s ease infinite;
	}
	.middle {
		left: 50%;
		animation: mMove 2.5s ease infinite;
	}
	.right {
		left: 100%;
		background: #acb9c8;
		animation: rMove 2.5s ease infinite;
	}
}
@keyframes lMove {
0% {
    left: 0;
}
25% {
    left: 50%;
    background: #FFD300;
}
50% {
    left: 100%;
    background: #5B7492;
}
75% {
    left: 50%;
    background: #acb9c8;
}
100% {
    left: 0;
}
}
@keyframes mMove {
25% {
    background: #5B7492;
}
50% {
    background: #FFD300;
}
75% {
    background: #5B7492;
}
}
@keyframes rMove {
0% {
    left: 100%;
}
25% {
    left: 50%;
}
50% {
    left: 0;
    background: #acb9c8;
}
75% {
    left: 50%;
    background: #FFD300;
}
100% {
    left: 100%;
}
}
</style>