import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/Home'
import About from 'pages/About'
import Contact from 'pages/Contact'
import Directory from 'pages/Directory'
import Login from 'pages/Login'
import Logout from 'pages/Logout'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/directory',
    component: Directory
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/logout',
    component: Logout
  }
]

export default new Router({
  routes
})
