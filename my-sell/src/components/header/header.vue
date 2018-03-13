<template>
	<div v-bind:sellerObj="sellerObj">
		hahahha
	</div>
</template>

<script>
export default {
	name:'',
	props:{
		seller:{
			type:Object
		}
	},
	data(){
		return {

		}
	},
	computed:{
		sellerObj(){
			console.log(this.seller)
			return this.seller;
		}
	},
	components:{

	},
	created(){

	}
}
</script>

<style lang="scss">

</style>