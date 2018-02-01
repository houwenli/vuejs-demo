import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: r => require.ensure([], () => r(require('../page/home/')), 'home'),
      children: [{
      	path:'item',
      	component: r => require.ensure([], () => r(require('../page/item')), 'item')
      },{
      	path:'score',
      	component: r => require.ensure([], () => r(require('../page/score')), 'score')
      }]
    }
  ]
})
