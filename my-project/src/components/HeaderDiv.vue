<template>
	<div class="personinfo">
		<input type="hidden" id="uid" v-model="uid" />
		<div v-if="login"  class="personlogged">
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
	name:'HeaderDiv',
	data:function(){
		return {
			username:'houwenli',
			uid:1111
		}
	},
	computed:{
		login:function(){
			return this.uid?true:false;
		}
	}
}
</script>

<style>
	
</style>