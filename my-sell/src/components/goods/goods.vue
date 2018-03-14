<template>
<div>
	<div class="goods">
		<div class="menu-wrapper" ref="menuWrapper">
			<ul>
				<li class="menu-item" v-for="(item,index) in goods" v-bind:class="{'current':currentIndex === index}" v-on:click="showMenu(index)" ref="menuList">
					<span class="text border-1px">
						<span v-if="item.type>=0" class="icon" v-bind:class="classMap[item.type]" ></span>
						{{item.name}}
					</span>
				</li>
			</ul>
		</div>
		<div class="foods-wrapper" ref="foodsWrapper">
			<ul>
				<li class="food-list" v-for="(item,index) in goods" ref="foodList">
					<h1 class="title">{{item.name}}</h1>
					<ul>
						<li class="food-item border-1px" v-for="(foodItem,foodIndex) in item.foods">
							<div class="icon">
								<img width="57" height="57" v-bind:src="foodItem.icon">
							</div>
							<div class="content">
								<h2 class="name">{{foodItem.name}}</h2> 
								<p class="desc"></p> 
								<div class="extra">
									<span class="count">月售{{foodItem.sellCount}}份</span>
									<span>好评率{{foodItem.rating}}%</span>
								</div> 
								<div class="price">
									<span class="now">￥{{foodItem.price}}</span>
									<span class="old" v-if="foodItem.oldPrice">￥{{foodItem.oldPrice}}</span>
								</div> 
								<div class="cartcontrol-wrapper">
									<div class="cartcontrol">
										<div class="cart-decrease" style="display: none;">
											<span class="inner icon-remove_circle_outline"></span>
										</div> 
										<div class="cart-count" style="display: none;"></div> 
										<div class="cart-add icon-add_circle"></div>
									</div>
								</div>
							</div> 
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import BScroll from 'better-scroll';

const ERR_OK = 0;
// 判断环境
const debug = process.env.NODE_ENV !== 'production';

export default {
	name:'',
	data(){
		return {
			goods:[],
			listHeight:[],
			scrollY:0
		}
	},
	computed:{
		currentIndex:function(){
			for (let i = 0; i < this.listHeight.length; i++) {
	          let height1 = this.listHeight[i];
	          let height2 = this.listHeight[i + 1];
	          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
	            this._followScroll(i);
	            return i;
	          }
	        }
			return 0;
		}
	},
	components:{

	},
	methods:{
		showMenu(index){
			let foodList = this.$refs.foodList;
			let el = foodList[index];
			this.foodsScroll.scrollToElement(el,300);
		},
		_initScroll(){
			this.menuScroll = new BScroll(this.$refs.menuWrapper,{
				click: true
			});
			this.foodsScroll = new BScroll(this.$refs.foodsWrapper,{
				click: true,
				probeType: 3
			});
			this.foodsScroll.on('scroll',(pos)=>{
				if (pos.y <= 0) {
            		this.scrollY = Math.abs(Math.round(pos.y));
          		}
			})
		},
		_calculateHeight(){
			let foodList = this.$refs.foodList;
			let height = 0;
			this.listHeight.push(height);
			for(let i = 0; i < foodList.length; i++){
				let item = foodList[i];
				height += item.clientHeight;
				this.listHeight.push(height);
			}
		},
		_followScroll(index){
			this.menuScroll.scrollToElement(this.$refs.menuList[index],300)
		}
	},
	created(){
		this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
		const url = debug ? '/api/goods' : '';
		axios.get(url).then((response)=>{
			console.log(response)
			response = response.data;
			if(response.errno == ERR_OK){
				this.goods = response.data;
				this.$nextTick(function(){
					this._initScroll();
					this._calculateHeight();
				});
			}
		})
	}
}
</script>

<style lang="scss">
.goods {
  display: flex;
  position: absolute;
  top: 174px;
  bottom: 46px;
  width: 100%;
  overflow: hidden;
  .menu-wrapper {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 80px;
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
    .menu-item {
		  display: table;
		  height: 54px;
		  width: 56px;
		  padding: 0 12px;
		  line-height: 14px;
		  .text {
			  display: table-cell;
			  width: 56px;
			  vertical-align: middle;
			  position: relative;
			  font-size: 12px;
			  .icon {
				  display: inline-block;
				  vertical-align: top;
				  width: 12px;
				  height: 12px;
				  margin-right: 2px;
				  background-size: 12px 12px;
				  background-repeat: no-repeat;
				}
			}
		}
	}
	.menu-item.current {
	  position: relative;
	  z-index: 10;
	  margin-top: -1px;
	  background: #fff;
	  font-weight: 700;
	}
	.foods-wrapper {
		flex: 1;
		.title {
		  padding-left: 14px;
		  height: 26px;
		  line-height: 26px;
		  border-left: 2px solid #d9dde1;
		  font-size: 12px;
		  color: #93999f;
		  background: #f3f5f7;
		}
		 .food-item {
		  display: flex;
		  margin: 18px;
		  padding-bottom: 18px;
		  position: relative;
		  .icon {
			  flex: 0 0 57px;
			  margin-right: 10px;
			}
			.content {
			  flex: 1;
			  .name {
				  margin: 2px 0 8px 0;
				  height: 14px;
				  line-height: 14px;
				  font-size: 14px;
				  color: #07111b;
				}
				.desc, .extra {
				  line-height: 10px;
				  font-size: 10px;
				  color: #93999f;
				}
				.desc {
				  line-height: 12px;
				  margin-bottom: 8px;
				}
				.extra .count {
				  margin-right: 12px;
				}
				.price {
				  font-weight: 700;
				  line-height: 24px;
				  .now {
					  margin-right: 8px;
					  font-size: 14px;
					  color: #f01414;
					}
					.old {
					  text-decoration: line-through;
					  font-size: 10px;
					  color: #93999f;
					}
				}
				.cartcontrol-wrapper {
				  position: absolute;
				  right: 0;
				  bottom: 12px;
				  .cartcontrol {
					  font-size: 0;
					  .cart-decrease {
						  display: inline-block;
						  padding: 6px;
						  opacity: 1;
						  -webkit-transform: translate3d(0, 0, 0);
						  transform: translate3d(0, 0, 0);
						  .inner {
						    display: inline-block;
						    line-height: 24px;
						    font-size: 24px;
						    color: #00a0dc;
						    -webkit-transition: all 0.4s linear;
						    transition: all 0.4s linear;
						    -webkit-transform: rotate(0);
						    transform: rotate(0);
							}
						}
						.cart-count {
						  display: inline-block;
						  vertical-align: top;
						  width: 12px;
						  padding-top: 6px;
						  line-height: 24px;
						  text-align: center;
						  font-size: 10px;
						  color: #93999f;
						}
						.cart-add {
						  display: inline-block;
						  padding: 6px;
						  line-height: 24px;
						  font-size: 24px;
						  color: #00a0dc;
						  .icon-add_circle:before {
							  content: "\E908";
							}
						}
					}  
				}
			}
		}
	}
}
</style>