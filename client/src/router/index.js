import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import admin from '@/components/admin'
import edit from '@/components/edit'
import register from '@/components/register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/edit',
      name: 'edit',
      component: edit
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
