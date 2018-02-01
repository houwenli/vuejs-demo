<template>
	<div class="mymusic">
		<type-list name="我的音乐" iconinfo="icon-music" count="28" v-bind:playing="true"></type-list>
		<type-list name="最近播放" iconinfo="icon-zuijinplay" count="18"></type-list>
		<type-list name="我的电台" iconinfo="icon-diantai" count="1"></type-list>
		<type-list name="我的收藏" iconinfo="icon-collect" count="3" v-bind:has-border="false"></type-list>
	</div>
</template>

<script>
import typelist from './typelist/typelist.vue'
export default {
  name: 'MyMusic',
  data () {
    return {
      
    }
  },
  computed: {
    
  },
  methods: {

  },
  components:{
  	'type-list':typelist
  }
}
</script>

<style scoped lang="scss">
.mymusic {
    position: fixed;
    background: #fff;
    overflow: auto;
    top: 50px;
    bottom: 46px;
    left: 0;
    right: 0;
    z-index: 9;
    -webkit-overflow-scrolling: touch;
}
</style>