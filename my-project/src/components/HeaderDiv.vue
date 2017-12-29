<template>
	<div class="personinfo">
		<input type="button" name="" value="按钮" v-on:click="callFather">
		<input type="hidden" id="uid" v-model="uid" />
		<input type="input" id="username" v-model="username" />
		<div v-if="login"  class="personlogged" v-on:click="callFather">
			<a class="pl-link" href="http://bbs.360.cn/apk/download/" target="_blank">360社区APP</a>
			<span class="pl-line">|</span>
			<a class="pl-link" href="http://bbs.360.cn/" target="_blank">进入社区</a>
			<span class="pl-line">|</span>
			<a class="pl-link" href="http://www.qiku.com/" target="_blank">360手机商城</a>
			<!-- <a class="userimg" href="../../home.php?mod=space&uid=<?php echo $_G[uid]; ?>" target="_blank">
	            <img id="userimg" src="http://ucenter.bbs.360.cn/avatar.php?uid=<?php echo $_G[uid]; ?>&amp;size=middle" title="<?php echo $_G[member][username];?>" alt="<?php echo $_G[member][username];?>">
	        </a> -->
	        <a class="username" target="_blank" href="../../home.php?mod=space">{{username}}</a>					
						
			<a class="userlogout" target="_blank" href="">退出</a>	

        </div>
        <div v-else class="personunlog">
			<a class="pl-link" href="http://bbs.360.cn/apk/download/" target="_blank">360社区APP</a>
			<span class="pl-line">|</span>
			<a class="pl-link" href="http://bbs.360.cn/" target="_blank">进入社区</a>
			<span class="pl-line">|</span>
			<a class="pl-link" href="http://www.qiku.com/" target="_blank">360手机商城</a>
			<a class="personlog" href="../../member.php?mod=logging&amp;action=login">登录</a>
			<a class="personreg" href="../../member.php">注册</a>	
		</div>
	</div>
</template>

<script>
export default {
	name: 'HeaderDiv',
	props: ['name'],
	data: function() {
		return {
			uid: 1111
		}
	},
	methods: {
		callFather: function() {
			this.$emit('isLogin')
		}
	},
	computed: {
		login: function() {
			return this.uid ? this.uid : false
		},
		username: function() {
			return this.name
		}
	}
}
</script>

<style>
.personlogged {
    position: absolute;
    right: 167px;
    top: 44px;
    z-index: 100;
}
.pl-link {
    color: #fff;
    padding-right: 3px;
}
.pl-line {
    color: #fff;
    padding-right: 3px;
}
.username, .userlogout {
    color: #fff;
}
.username {
    padding-left: 25px;
}
</style>