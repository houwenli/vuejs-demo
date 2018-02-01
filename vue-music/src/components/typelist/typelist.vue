<template>
<div class="typelist">
	<i class="info" v-bind:class="iconInfo"></i> 
	<div class="typelist-detail">
		<span class="name">{{listName}}</span> 
		<span class="count" v-show="showCount">({{listCount}})</span> 
		<p v-if="showBorder" class="border-1px"></p> 
		<i v-if="isPlaying" class="isPlaying icon-volume-medium"></i>
	</div>
</div>
</template>

<script>
export default {
	props: {
		name:{
			type: String,
			default: '未曾遗忘的青春'
		},
		count:{
			type: String,
			default: '1'
		},
		hasBorder: {
			type: Boolean,
			default: true
		},
		playing: {
			type: Boolean,
			default: false
		},
		iconinfo: {
			type: String
		},
	},
	data () {
		return {
			iconInfo:this.iconinfo,
			listName:this.name,
			listCount:this.count
		}
	},
	computed: {
		showCount(){
			return this.count !== 'none'
		},
		showBorder(){
			return this.hasBorder
		},
		isPlaying(){
			return this.playing
		}
	},
	methods: {

	}
}
</script>

<style lang="scss">
$bgcolor:#f7f7f7;
.typelist {
    height: 50px;
    background: $bgcolor;
    position: relative;
    .info {
	    font-size: 20px;
	    position: absolute;
	    top: 50%;
	    color: #c62f2f;
	    left: 15px;
	    -webkit-transform: translate(0, -50%);
	    transform: translate(0, -50%);
	}
	.typelist-detail {
	    height: 100%;
	    line-height: 50px;
	    margin-left: 50px;
	    box-sizing: border-box;
	    font-size: 0;
	    .name {
		    color: #333;
		    font-size: 14px;
		    margin-right: 6px;
		    vertical-align: middle;
		}
		.count {
		    color: #aaa;
		    font-size: 10px;
		    font-weight: 400;
		    vertical-align: middle;
		}
		.border-1px {
		    position: relative;
		    &:after{
		    	display: block;
			    position: absolute;
			    left: 0;
			    bottom: 0;
			    width: 100%;
			    border-top: 1px solid rgba(7,17,27,0.1);
			    content: ' ';
		    }
		}
		.isPlaying {
		    font-size: 14px;
		    position: absolute;
		    top: 50%;
		    color: #c62f2f;
		    right: 5px;
		    width: 36px;
		    height: 36px;
		    line-height: 36px;
		    text-align: center;
		    -webkit-transform: translate(0, -50%);
		    transform: translate(0, -50%);
		}
	    .icon-volume-medium:before {
		    content: "哈哈";
		}
	}
}
</style>