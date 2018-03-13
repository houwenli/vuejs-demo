<template>
	<div>
		<div class="theme" v-if="">
			<img src="http://pic4.zhimg.com/60b69ef145a472f2c6b5302453f95eaa.jpg">
			<div></div>
			<h3>
				<p>了解自己和别人，了解彼此的欲望和局限。</p>
				<p>日常心理学</p>
			</h3>
		</div>
		<div class="list">
			<p class="list-time">{{time}}</p>
			<div v-for="(value,index) in list" class="list-con">
				<img v-bind:src="value.images[0]">
				<p>{{value.title}}</p>
			</div>
		</div>
		<Infinitescroll v-bind:loading="loading" v-bind:scroller="scroller" v-on:load="loadMore"></Infinitescroll>
	</div>
</template>

<script>
import api from '../../api'
import Infinitescroll from '../infinitescroll/infinitescroll.vue'
import {mapState,mapActions} from 'vuex'
export default {
	name:'',
	data(){
		return {
			list:[],
			tops:[],
			time:'1997/01/01',
			scroller:null,
			loading:false,
			count:1
		}
	},
	computed:{

	},
	components:{
		'Infinitescroll':Infinitescroll
	},
	methods:{
		...mapActions(['altLoadingStatus']),
		getList(type){
			if(type){
				api.getNews().then(data=>{
					this.tops = data.data.top_stories
					this.list = data.data.stories
					this.time = data.data.date.substring(0,4)+"/"+data.data.date.substring(4,6)+"/"+data.data.date.substring(6,8)
					if(this.list){
						this.altLoadingStatus()
					}
				})
			}else{
				// 加载下一页
				api.getNewsByDate(this.GetDate(this.count)).then((data)=> {
					Array.prototype.push.apply(this.list,data.data.stories)
					// this.list.push(data.data.stories);
					this.loading = false;
				});	
			}
		},
		loadMore(){
			this.loading = true
			setTimeout(()=>{
				this.count--;
				this.getList()
			},500)	
		},
		GetDate(Count) {
			var dd = new Date();
			dd.setDate(dd.getDate() + Count); //获取AddDayCount天后的日期
			var y = dd.getFullYear();
			var m = dd.getMonth() + 1; //获取当前月份的日期
			m = m >= 10 ? m : "0" + m
			var d = dd.getDate();
			d = d >= 10 ? d : "0" + d;
			return y + "" + m + "" + d;
		}
	},
	created(){
		this.getList(1)
		this.altLoadingStatus()
	},
	mounted(){
		this.scroller= document.querySelector('.app-view')
	}
}
</script>

<style lang="scss">
.list {
    width: 90%;
    z-index: 1;
    position: relative;
    margin: .8rem auto 0;
    padding-top: 0;
    .list-time {
	    top: -0.8rem;
	    margin: 0;
	    color: #fff;
	    padding: 0 1rem;
	    font-size: 0.4rem;
	    line-height: 0.8rem;
	    letter-spacing: 0.1rem;
	    border-radius: 0.4rem;
	    text-align: center;
	    background-color: #FFD300;
	    transform: translate(0, -50%);
	    position: absolute;
	    box-shadow: 0 3px 10px 0 rgba(91, 115, 146, 0.15);
	}
	.list-con {
	    cursor: pointer;
	    display: flex;
	    padding: 0.3rem;
	    margin-bottom: 0.4rem;
	    border-radius: 0.15rem;
	    align-items: center;
	    background-color: #fff;
	    box-shadow: 0 3px 10px 0 rgba(91, 115, 146, 0.15);
	    img {
		    width: 2rem;
		    margin-right: 0.4rem;
		}
		p {
		    color: #5B7492;
		    font-size: 0.4rem;
		    text-align: justify;
		    margin: 0;
		}
	}
}
</style>