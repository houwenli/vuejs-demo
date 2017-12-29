<template>
  <div id="app">
    <audio id="myaudio" ref="audio" @timeupdate="musicTimeUpdate" @canplay="musicCanPlay" @playing="musicOnPlaying" @ended="musicEnded" @waiting="musicOnWaiting" @pause="musicOnPause" @loadstart="loadStart"></audio>
    <!-- 头部header -->
    <v-header></v-header>

    <router-view/>
  </div>
</template>

<script>
import header from './components/header/header.vue'

export default {
  name: 'app',
  data () {
    return {
      info: {}
    }
  },
  methods: {

  },
  components: {
    'v-header': header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
