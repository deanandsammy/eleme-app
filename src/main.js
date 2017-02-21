// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Good from './components/goods/goods'
import Ratings from './components/ratings/ratings'
import Sellers from './components/sellers/sellers'

Vue.use(VueRouter)

const routes = [
  {path: '/goods', component: Good},
  {path: '/ratings', component: Ratings},
  {path: '/sellers', component: Sellers}
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

/* eslint-disable no-new */
new Vue({
  router,
  extends: App
}).$mount('#app')

router.push('/goods')
