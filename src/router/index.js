import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Error from '@/components/Error'
Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/*',
      name: '404',
      component: Error
    }
  ]
})
