<template>
	<div class="header">
		<div class="header-wrapper">
			<i class="menu icon-menu" v-on:click="showMenu"></i>
			<div class="centermenu">
				<router-link tag="i" to="/mymusic">
					<i class="music icon-music"></i>
				</router-link>
				<router-link tag="i" to="/findmusic">
					<i class="find icon-wangyi"></i>
				</router-link>
				<router-link tag="i" to="/community">
					<i class="community icon-community"></i>
				</router-link>
			</div>
			<i class="search icon-search"></i>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {}
	},
	methods:{
		showMenu(){
			this.$store.dispatch('add_Info',{isShowMenu:true})
		}
	}
}
</script>

<style lang="scss">
$nav-color: #c62f2f;
.header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 50px;
	z-index: 10;
	background: $nav-color;
}
.header-wrapper {
	height: 100%;
	background: $nav-color;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.icon-menu,.icon-music,.icon-wangyi,.icon-community ,.icon-search{
		border:1px solid #fff;
		padding:5px 5px;
		margin:10px;
	}
	.centermenu {
    	font-size: 24px;
	}
}

		
</style>