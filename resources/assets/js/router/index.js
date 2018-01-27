import Vue from 'vue'
import Router from 'vue-router'

function load(component) {
  return () => System.import(`../components/${component}.vue`)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: load('Home')
    }
    /*{
      path: '/profile',
      name: 'Profile',
      component: ProfileView
    }*/
  ]
})
