<template>
  <div>
    <v-header v-bind:seller="seller" ></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

import urlParse from './common/js/util'
import header from './components/header/header.vue';

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Vue.use(axios,VueAxios)

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
    const url = debug ? '/api/seller' : '';
    console.log(Vue.axios)
    axios.get(url+'?id='+this.seller.id).then((response)=>{
      response = response.data;
      if(response.errno === ERR_OK){
        this.seller = Object.assign({},this.seller,response.data);
      }
    })
  },
  components:{
    'v-header':header
  }
}
</script>

<style lang="scss">
@import './common/css/mixin';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  @include border-1px(rgba(7, 17, 27, 0.1));
  .tab-item {
    flex: 1;
    text-align: center;
    & > a {
      display: block;
      font-size: 14px;
      color: rgb(77, 85, 93);
      &.router-link-active{
        color: rgb(240, 20, 20);
      }       
    }
  }
}
</style>
