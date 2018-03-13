<template>
	<div>
		<transition name="slide">
			<aside class="aside" v-show="menuShow">
				<ul>
					<li :class="{chose:menuNum == 1}" @click="changeMenu(1)">
						<span>首页</span>
						<i class="iconfont" :class="{'icon-ic_star_black':menuNum == 1,'icon-ic_star':menuNum != 1}" />
					</li>
					<li v-for="(value,index) in list" v-bind:class="{chose:menuNum == value.id}" v-on:click="changeMenu(value.id)">
						<span>{{value.name}}</span>
						<i class="iconfont" :class="{'icon-ic_star_black':menuNum == value.id,'icon-ic_star':menuNum != value.id}" />
					</li>
					<li>
						<span>项目地址</span>
						<i class="iconfont icon-github" />
					</li>
				</ul>
			</aside>
		</transition>
		<transition name="cover">
			<div class="cover" v-show="menuShow" @click="toggle"></div>
		</transition>	
	</div>
		
</template>

<script>
import {mapState,mapActions} from 'vuex'
import api from '../../api'
export default {
	name:'slide',
	data(){
		return {
			list:[]
		}
	},
	computed:{
		...mapState(['menuNum','menuShow'])
	},
	components:{

	},
	methods:{
		...mapActions(['altMenuNum','altMenuStatu']),
		changeMenu(id){
			this.altMenuNum(id)
		},
		toggle(){
			this.altMenuStatu();
		}
	},
	created(){
		api.getTopics().then(data=>{
			this.list = data.data.others
		})
	}
}
</script>

<style lang="scss">
.aside {
    z-index: 11;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: fixed;
    width:60%;
    &.slide-enter-to, &.slide-leave-to{
		transition: transform 0.3s;
    }		
	&.slide-enter, &.slide-leave-to{
		transform:translate3d(-286px,0,0);
	}
    ul {
	    margin: 0;
	    float: left;
	    width: 100%;
	    height: 100%;
	    padding: 1.3rem 0.5rem 0.5rem;
	    overflow: auto;
	    background: rgba(91, 116, 146, 0.75);
	    transition: transform 0.3s ease;
	    -webkit-overflow-scrolling: touch;
	}
	li {
	    cursor: pointer;
	    font-size: 0.43rem;
	    list-style: none;
	    color: #fff;
	    margin-top: 20px;
	    .iconfont {
		    float: right;
		    font-size: 0.6rem;
		}
	}
	li.chose {
	    color: #FFD300;
	}
}
.cover {
    width: 100%;
    height: 100%;
    background: rgba(172, 185, 201, 0.4);
    transition: opacity 0.3s ease;
    position: fixed;
    z-index: 10;
    &.cover-enter-to, &.cover-leave-to{
		transition: opacity 0 ease;
    }		
	&.cover-enter, &.cover-leave-to{
		opacity:0;
	}
}
</style>