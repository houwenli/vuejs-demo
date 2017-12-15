<template>
	<div id="main">
		<p>{{title}}</p>
    	
    	<HeaderDiv></HeaderDiv>
	</div>
</template>

<script>

import HeaderDiv from './HeaderDiv.vue'


export default {
	name: 'Dlwh0808',
	data: function(){
		return {
			title : '为中国加油 安全·无畏'
		}
	},
	components:{HeaderDiv}
}
</script>

<style>
	
</style>