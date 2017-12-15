<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <HeaderDiv></HeaderDiv>
  </div>
</template>

<script>
import HeaderDiv from './components/HeaderDiv'
export default {
  name: 'app',
  components:{HeaderDiv}
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
