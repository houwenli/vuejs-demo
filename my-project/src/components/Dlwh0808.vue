<template>
	<div id="main">
    	<HeaderDiv v-bind:name="username" v-on:isLogin="loginLog"></HeaderDiv>
    	<SignDiv v-bind:name="username"></SignDiv>
	</div>
</template>

<script>

import HeaderDiv from './HeaderDiv.vue'
import SignDiv from './SignDiv.vue'

export default {
	name: 'Dlwh0808',
	data: function() {
		return {
			title: '为中国加油 安全·无畏',
			username: ''
		}
	},
	methods: {
		loginLog: function() {
			alert('登录了')
		}
	},
	mounted: function() {
		this.$http.post('http://dsb.bbs.360.cn/zt/dlwh0808/index.php?mod=sign').then((res) => {
			console.log(res.data)
			this.username = 'houwenli'
		})
	},
	components: { HeaderDiv, SignDiv }
}
</script>

<style>
	
</style>