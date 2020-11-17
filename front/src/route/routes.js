import Vue from 'vue'
import VueRouter from 'vue-router'
import SingUp from '../components/SingUp.vue'
import SignIn from '../components/SignIn'
import Product from '../components/Product'
import Home from '../views/Home'





Vue.use(VueRouter)



const routes = [
    {
        path: '/SingUp',
        name: 'SingUp',
        component: SingUp
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/Product',
      name: '/Product',
      component: Product
    },
    {
      path:'/SignIn',
      name: '/SignIn',
      component: SignIn
    },

    {
        path: '*',
        redirect: '/'
      }
]






const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })





export default router