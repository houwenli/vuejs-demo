import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Article from '@/views/article'
import Theme from '@/views/theme'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
    	path:'/article',
    	name: 'article',
      	component: Article
    },
    {
    	path:'/theme',
    	name: 'theme',
      	component: Theme
    }
  ]
})
