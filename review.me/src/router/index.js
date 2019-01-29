import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Book from '@/components/Book'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    }
  ]
})
