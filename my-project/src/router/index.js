import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dlwh0808 from '@/components/Dlwh0808'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dlwh0808',
      name: 'Dlwh0808',
      component: Dlwh0808
    }
  ]
})
