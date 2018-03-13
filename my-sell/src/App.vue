<template>
  <div>
    <v-header v-bind:seller="seller" ></v-header>
  </div>
</template>

<script>

import urlParse from './common/js/util'
import header from './components/header/header.vue';

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(axios,VueAxios)

const ERR_OK = 0;
// 判断环境
const debug = process.env.NODE_ENV !== 'production';

export default {
  name: 'App',
  data(){
    return{
      seller:{
        id:this.foodsId
      }
    }
  },
  computed:{
    foodsId(){
      let queryParam = urlParse();
      return queryParam.id;
    }
  },
  methods:{

  },
  created(){
    // const url = debug ? '/api/seller' : '';
    // console.log(Vue.axios)
    // Vue.axios.get(url+'?id='+this.seller.id).then((response)=>{
    //   console.log(response)
    // })
  },
  components:{
    'v-header':header
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
