<template>
	<div class="sidebar">
		<transition name="fade" @touchmove.stop.prevent>
			<div class="menu-mask" v-show="isReallShow" v-on:click="hideMenu"></div>
		</transition>
		<transition name="side">
			<div class="menu-content" v-show="isReallShow">
				<div class="menu-detail">
					<div class="menu-userInfo" v-bind:style="{backgroundImage:'url('+userinfo.bg+')'}">
						<img width="56" height="56" class="avatar" src="/static/images/userlogo.jpg">
						<div class="user-detail">
							<span class="name">{{userinfo.name}}</span>
							<img v-bind:src="userinfo.avatar" class="isvip">
							<span class="progress">Lv.{{userinfo.grade}}</span>
						</div>
						<span class="sign"><i class="icon-coin" style="display: none;"></i>已签到</span>
					</div>
					<div class="content">
						<side-list iconclass="icon-message" sidetitle="我的消息"></side-list>
						<side-list iconclass="icon-vip" sidetitle="我的会员" disc="2018.05.10到期"></side-list>
						<side-list iconclass="icon-market" sidetitle="商城"></side-list>					
						<span class="split" style="background: rgb(240, 240, 240); height: 5px; border-color: rgb(238, 238, 238);"></span> 
						<side-list iconclass="icon-friend" sidetitle="我的好友"></side-list>
						<side-list iconclass="icon-place" sidetitle="附近的人"></side-list>
						<span class="split" style="background: rgb(240, 240, 240); height: 5px; border-color: rgb(238, 238, 238);"></span> 
						<side-list iconclass="icon-theme" sidetitle="个性换肤" disc="官方红"></side-list>
						<side-list iconclass="icon-set-time" sidetitle="定时播放"></side-list>
						<side-list iconclass="icon-lock" sidetitle="音乐闹钟"></side-list>
						<side-list iconclass="icon-car" sidetitle="驾驶模式"></side-list>
						<side-list iconclass="icon-cloud" sidetitle="音乐云盘"></side-list>
					</div>
					<div class="footer">
						<p class="border-1px"></p> 
						<div class="nightmode">
							<i class="icon-night"></i> 
							<span>夜间模式</span>
						</div> 
						<div class="setting">
							<i class="icon-setting"></i> 
							<span>设置</span>
						</div> 
						<div class="exit">
							<i class="icon-exit"></i> 
							<span>退出</span>
						</div>
					</div>
				</div>
			</div>
		</transition>
		
			
	</div>
</template>

<script>
	import sidelist from '../sidelist/sidelist.vue'
	export default {
	  props: {
	    info: {
	    	type: Object,
	    	default: function(){
	    		return {}
	    	}
	    }
	  },
	  data () {
	    return {
	      
	    }
	  },
	  methods:{
		hideMenu(){
			this.$store.dispatch('add_Info',{isShowMenu:false})
		}
	  },
	  computed:{
	  	isReallShow () {
	  		return this.$store.state.allInfo.isShowMenu
	  	},
	  	userinfo () {
	  		return this.info
	  	}
	  },
	  components: {
	    'side-list': sidelist
	  },
	  created(){
	  	
	  }
	}
</script>

<style lang="scss">
.sidebar .menu-mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 1;
    z-index: 10;
    background: rgba(0,0,0,0.5);
    transfrom: translateZ(0);
    &.fade-enter-to, &.fade-leave-to{
    	transition: opacity 0.3s;
    }
	&.fade-enter, &.fade-leave-to{
		opacity: 0;
	}
}
.sidebar .menu-content {
    position: fixed;
    width: 286px;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 11;
    overflow-y: auto;
    background: #fff;
    -webkit-overflow-scrolling: touch;
    &.side-enter-to, &.side-leave-to{
		transition: transform 0.3s;
    }		
	&.side-enter, &.side-leave-to{
		transform:translate3d(-286px,0,0);
	}			
    .menu-detail {
    	.menu-userInfo{
    		box-sizing: border-box;
		    width: 100%;
		    height: 168px;
		    position: relative;
		    padding: 50px 15px 15px 15px;
    		background-size: cover;
    		.avatar {
			    position: absolute;
			    bottom: 50px;
			    left: 15px;
			    border-radius: 50%;
			}
			.user-detail {
			    position: absolute;
			    bottom: 20px;
			    left: 15px;
			    font-size: 0;
			    .name {
				    display: inline-block;
				    font-size: 16px;
				    font-weight: 500;
				    color: #fff;
				    vertical-align: middle;
				    max-width: 130px;
				    text-overflow: ellipsis;
				    white-space: nowrap;
				    overflow: hidden;
				}
				.isvip {
				    width: 14px;
				    height: 14px;
				    vertical-align: middle;
				    margin-left: 6px;
				}
				.progress {
				    font-size: 8px;
				    padding: 1px 4px;
				    border-radius: 8px;
				    color: #fff;
				    font-weight: 400;
				    border: 1px solid #fff;
				    margin-left: 6px;
				    vertical-align: middle;
				}
			}
			.sign {
			    display: inline-block;
			    height: 14px;
			    line-height: 14px;
			    position: absolute;
			    bottom: 15px;
			    font-size: 12px;
			    right: 15px;
			    padding: 4px 8px;
			    border: 1px solid #e1e1e1;
			    border-radius: 12px;
			    color: #fff;
			}
    	}
    }
    .content {
	    background: #fff;
	    display: block;
	    padding-bottom: 40px;
	    .split {
		    display: block;
		    width: 100%;
		    box-sizing: border-box;
		    border-width: 1px;
		    border: none;
		    border-top-width: 1px;
		    border-top-style: solid;
		    border-bottom-width: 1px;
		    border-bottom-style: solid;
		}
	}
	.footer {
	    background: #f00;
	    position: fixed;
	    transfrom: translateZ(0);
	    bottom: 0;
	    height: 40px;
	    width: 286px;
	    font-size: 0;
	    background: #fff;
	    .border-1px {
		    position: relative;
			&:after {
			    display: block;
			    position: absolute;
			    left: 0;
			    bottom: 0;
			    width: 100%;
			    border-top: 1px solid rgba(7,17,27,0.1);
			    content: ' ';
			}
		}
		div {
		    display: inline-block;
		    font-size: 16px;
		    height: 100%;
		    text-align: center;
		    span {
			    font-size: 16px;
			    vertical-align: middle;
			}
			i {
			    color: #999;
			    font-size: 18px;
			    vertical-align: middle;
			}
		}
		.nightmode {
		    width: 40%;
		    line-height: 40px;
		    &:active {
		    	background: #d5d5d5;
		    }
		}
		.setting, .exit {
		    width: 30%;
		    line-height: 40px;
		    &:active {
		    	background: #d5d5d5;
		    }
		}
	}
}
</style>