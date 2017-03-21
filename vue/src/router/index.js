import Vue from 'vue'
import Router from 'vue-router'
import Login from './Login'
import Home from './Home'
import Test from './Test'
import List from './List'
import SideLayout from './SideLayout'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'SideLayout',
      path: '/',
      component: SideLayout,
      children: [
        {
          name: 'Home',
          path: '/home',
          component: Home
        },
        {
          name: 'List',
          path: '/list/:type',
          component: List
        },
        {
          name: 'Test',
          path: '/test',
          component: Test
        }
      ]
    }
  ]
})
