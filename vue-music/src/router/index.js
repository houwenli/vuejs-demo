import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyMusic from '@/components/MyMusic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mymusic',
      name: 'MyMusic',
      component: MyMusic
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
