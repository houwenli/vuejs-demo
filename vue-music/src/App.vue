<template>
  <div id="app">
    <audio id="myaudio" ref="audio" @timeupdate="musicTimeUpdate" @canplay="musicCanPlay" @playing="musicOnPlaying" @ended="musicEnded" @waiting="musicOnWaiting" @pause="musicOnPause" @loadstart="loadStart"></audio>
    <!-- 头部header -->
    <v-header></v-header>
    <!-- 侧边栏 -->
    <side-bar v-bind:info="info"></side-bar>
    <!-- 底部固定页 -->
    <bottom-bar></bottom-bar>
    <!-- 音乐播放器详情页 显示cd页 -->
    <music-detail></music-detail>

  </div>
</template>

<script>
import header from './components/header/header.vue'
import sidebar from './components/sidebar/sidebar.vue'
import bottombar from './components/bottombar/bottombar.vue'
import musicdetail from './components/musicdetail/musicdetail.vue'
import Vue from 'vue'
import axios from 'axios'
import Vueaxios from 'vue-axios'
Vue.use(Vueaxios, axios)

export default {
  name: 'app',
  data () {
    return {
      info: {}
    }
  },
  methods: {
    musicTimeUpdate: function () {

    },
    musicCanPlay: function () {

    },
    musicOnPlaying: function () {

    },
    musicEnded: function () {

    },
    musicOnWaiting: function () {

    },
    musicOnPause: function () {

    },
    loadStart: function () {

    }
  },
  components: {
    'v-header': header,
    'side-bar': sidebar,
    'bottom-bar': bottombar,
    'music-detail': musicdetail
  },
  created(){
    let LocalAPI = 'static/data.json'
    axios.get(LocalAPI).then((res)=>{
      // data.user的信息赋值给info  再通过组件的数据传递传给sideBar
      this.info = res.data.user
    },(err)=>{
      console.log(err)
    })
  }
}
</script>
<style lang="scss">
  @import "common/scss/global";
</style>
