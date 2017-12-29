<template>
<div class="layer sign">
	<div class="clearfix sign-pannel">
		<p class="sign-title">为中国加油&nbsp;安全·无畏</p>
		<p class="sign-des">点亮五环&nbsp;赢360手机新品</p>
		<p class="sign-button-pannel"><span v-on:click="signFunc">戳我点亮</span></p>
		<span class="signup-rule-btn" v-on:click="signFrameSeen=true">点亮规则</span>
		<div class="signup-frame" v-if="signFrameSeen">
			<div id="luckyDetails" class="signupDetail">
				<!-- <p id="luck-close" class="ld-close">X</p> -->
				<img id="luck-close" v-on:click="signFrameSeen=false" class="tp-close" src="http://b1.qikucdn.com/dfsj_imgs/zhuanti/fans0614/images/luck-close.png" alt="">
				<p class="ld-title">活动规则</p>
				<p class="ld-time">活动时间：2016年8月8日-8月12日</p>
				<div class="ld-rule">
					<p class="ld-rule-title">点亮规则:</p>
					<p class="ld-rule-des">1、每天登录参与点亮活动；</p>
					<p class="ld-rule-des">2、点亮2个环即可有机会参与360智能硬件系列产品抽奖；</p>
					<p class="ld-rule-des">3、点亮4个环即可有机会参与360手机新品抽奖；</p>
				</div>	
			</div>
		</div>
		<div class="sign-day">
			<div class="first-day"></div>
			<div class="second-day"></div>
			<div class="third-day"></div>
			<div class="fouth-day"></div>
			<div class="fifth-day"></div>

			<img v-if="daypos" v-bind:class="daypos" src="http://b1.qikucdn.com/dfsj_imgs/zhuanti/dlwh0808/images/day_light.png"/>

		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'SignDiv',
	props: ['name'],
	data: function() {
		return {
			signFrameSeen: false,
			sign_days: 3
		}
	},
	methods: {
		signFunc: function() {
			axios.post('http://dsb.bbs.360.cn/zt/dlwh0808/index.php?mod=sign').then((res) => {
				console.log(res.data)
			})
		}
	},
	computed: {
		daypos: function() {
			if (this.sign_days === 0) {
				return 'first-day-pos'
			}
			if (this.sign_days === 1) {
				return 'second-day-pos'
			}
			if (this.sign_days === 2) {
				return 'third-day-pos'
			}
			if (this.sign_days === 3) {
				return 'four-day-pos'
			}
			if (this.sign_days === 4) {
				return 'five-day-pos'
			}
			return false
		},
		username: function() {
			console.log('signdiv')
			return this.name
		}
	}
}
</script>

<style>
.sign {
    width: 100%;
    background: url(http://b1.qikucdn.com/dfsj_imgs/zhuanti/dlwh0808/images/sign_pc.png?v=1.0.0) top center no-repeat;
}
.sign-pannel {
    width: 1242px;
    margin: 0 auto;
    padding-top: 75px;
    position: relative;
}
.sign-pannel>p {
    text-align: center;
}
.sign-title {
    color: #f15a24;
    font-size: 80px;
    font-weight: bold;
}
.sign-des {
    color: #fff;
    font-size: 36px;
    font-weight: lighter;
    margin: 10px 0 34px;
}
.sign-button-pannel span {
    width: 220px;
    height: 54px;
    line-height: 54px;
    display: inline-block;
    background-color: #f15a24;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    -webkit-border-radius: 8px;
    -o-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    border-radius: 8px;
    cursor: pointer;
}
.signup-rule-btn {
    position: absolute;
    right: 336px;
    top: 275px;
    font-size: 18px;
    letter-spacing: 1px;
    cursor: pointer;
    color: #fff;
}
.signup-rule-btn:before {
    content: '';
    position: absolute;
    margin-top: 8px;
    margin-left: -15px;
    height: 0;
    width: 0;
    border-color: #fff transparent transparent transparent;
    border-style: dashed dashed solid dashed;
    border-width: 10px 5px;
}
.sign-day {
    position: relative;
    width: 870px;
    height: 504px;
    margin: 60px auto;
    background: url(http://b1.qikucdn.com/dfsj_imgs/zhuanti/dlwh0808/images/wuhuan.png?v=1.0.0) top center no-repeat;
}
.sign-day div {
    width: 246px;
    height: 246px;
    position: absolute;
    display: none;
    -webkit-border-radius: 50%;
    -o-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%;
    -webkit-animation: rotate 8s infinite linear;
    -moz-animation: rotate 8s infinite linear;
    -ms-animation: rotate 8s infinite linear;
    animation: rotate 8s infinite linear;
}
.sign-day .first-day {
    top: 12px;
    left: 11px;
    background: url(http://b1.qikucdn.com/dfsj_imgs/zhuanti/dlwh0808/images/day1.png?v=1.0.0) top center no-repeat;
}
.sign-day .second-day {
    top: 12px;
    left: 311px;
    background: url(http://b1.qikucdn.com/dfsj_imgs/zhuanti/dlwh0808/images/day2.png?v=1.0.0) top center no-repeat;
}
.sign-day .third-day {
    top: 12px;
    left: 615px;
    background: url(http://b1.qikucdn.com/dfsj_imgs/zhuanti/dlwh0808/images/day3.png?v=1.0.0) top center no-repeat;
}
.sign-day .fouth-day {
    top: 247px;
    left: 161px;
    background: url(http://b1.qikucdn.com/dfsj_imgs/zhuanti/dlwh0808/images/day4.png?v=1.0.0) top center no-repeat;
}
.sign-day .fifth-day {
    top: 247px;
    left: 462px;
    background: url(http://b1.qikucdn.com/dfsj_imgs/zhuanti/dlwh0808/images/day5.png?v=1.0.0) top center no-repeat;
}
.sign-day>img {
    position: absolute;
    -webkit-animation: rotate-light 1s infinite linear;
    -moz-animation: rotate-light 1s infinite linear;
    -ms-animation: rotate-light 1s infinite linear;
    animation: rotate-light 1s infinite linear;
}
.signup-frame {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: -moz-linear-gradient(rgba(11,11,11,0.1),rgba(11,11,11,0.6)) repeat-x rgba(11,11,11,0.2);
    background: -webkit-gradient(linear,0% 0,0% 100%,from(rgba(11,11,11,0.1)),to(rgba(11,11,11,0.6))) repeat-x rgba(11,11,11,0.2);
    filter: progid:DXImageTransform.Microsoft.Shadow(color=#efefef,Direction=180,Strength=14);
    z-index: 12;
    color: black;
    text-align: left;
}
.signupDetail {
    width: 770px;
    height: 400px;
    background-color: #fff;
    color: #3c3c3c;
    margin: 0 auto;
    margin-top: 160px;
    border-radius: 4px;
    padding-left: 25px;
    position: relative;
}
.tp-close {
    cursor: pointer;
    position: absolute;
    right: -21px;
    top: -19px;
    width: 5%;
}
.ld-title {
    padding: 40px 0;
    font-size: 24px;
    text-align: center;
}
.ld-time {
    padding-bottom: 30px;
    font-size: 22px;
}
.ld-rule {
    margin-bottom: 20px;
}
.ld-rule-title {
    font-size: 18px;
    padding-bottom: 10px;
    letter-spacing: 1px;
}
.ld-rule-des {
    line-height: 30px;
}
.first-day-pos {
	left: 7px;
	top: 9px;
}
.second-day-pos {
	left: 309px;
	top: 9px;
}
.third-day-pos {
	left: 612px;
	top: 9px;
}
.four-day-pos {
	left: 158px;
	top: 244px;
}
.five-day-pos {
	left: 460px;
	top: 244px;
}
@-webkit-keyframes rotate-light {
    0% {
        -webkit-transform: rotate(360deg);
    }
    100% {
        -webkit-transform: rotate(0deg);
    }
}
@-moz-keyframes rotate-light {
    0% {
        -moz-transform: rotate(360deg);
    }
    100% {
        -moz-transform: rotate(0deg);
    }
}
@-ms-keyframes rotate-light {
    0% {
        -ms-transform: rotate(360deg);
    }
    100% {
        -ms-transform: rotate(0deg);
    }
}
@keyframes rotate-light {
    0% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
@-webkit-keyframes rotate {
    0% {
        -webkit-transform: rotateY(0deg);
    }
    20% {
        -webkit-transform: rotateY(360deg);
    }
    100% {
        -webkit-transform: rotateY(360deg);
    }
}
@-moz-keyframes rotate {
    0% {
        -moz-transform: rotateY(0deg);
    }
    20% {
        -moz-transform: rotateY(360deg);
    }
    100% {
        -moz-transform: rotateY(360deg);
    }
}
@-ms-keyframes rotate {
    0% {
        -ms-transform: rotateY(0deg);
    }
    20% {
        -ms-transform: rotateY(360deg);
    }
    100% {
        -ms-transform: rotateY(360deg);
    }
}
@keyframes rotate {
    0% {
        transform: rotateY(0deg);
    }
    20% {
        transform: rotateY(360deg);
    }
    100% {
        transform: rotateY(360deg);
    }
}
</style>