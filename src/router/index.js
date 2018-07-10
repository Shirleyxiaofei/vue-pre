import Vue from 'vue'
import Router from 'vue-router'
import To404 from '@/components/404'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import TestDetails from '@/components/TestDetails'

Vue.use(Router)
let routes = [
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/',
    alias: '/index.html',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/404',
    alias: '/404.html',
    name: 'to404',
    component: To404
  },
  {
    path: '/test/',
    alias: '/test/index.html',
    name: 'Test',
    component: Test,
    children: [{
      path: 'details/',
      alias: 'details/index.html',
      name: 'Test details',
      component: TestDetails
    }]
  }
]
const router = new Router({
  mode: 'history',
  routes: routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    from.name ? next({name: from.name}) : next('/404')
  } else {
    next()
  }
})

export default router
