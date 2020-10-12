import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c879df62 = () => interopDefault(import('..\\pages\\admin.vue' /* webpackChunkName: "pages/admin" */))
const _63e88347 = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _c15d682a = () => interopDefault(import('..\\pages\\blog-one.vue' /* webpackChunkName: "pages/blog-one" */))
const _3f1d26d0 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _a663ac14 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _15a686a0 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _5cab9b2a = () => interopDefault(import('..\\pages\\gallery-one.vue' /* webpackChunkName: "pages/gallery-one" */))
const _33fb5f69 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _d9b921d8 = () => interopDefault(import('..\\pages\\products.vue' /* webpackChunkName: "pages/products" */))
const _d06b0a70 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _2b8da701 = () => interopDefault(import('..\\pages\\products-details\\_id.vue' /* webpackChunkName: "pages/products-details/_id" */))
const _6a53bc52 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _c879df62,
    name: "admin"
  }, {
    path: "/blog-details",
    component: _63e88347,
    name: "blog-details"
  }, {
    path: "/blog-one",
    component: _c15d682a,
    name: "blog-one"
  }, {
    path: "/cart",
    component: _3f1d26d0,
    name: "cart"
  }, {
    path: "/checkout",
    component: _a663ac14,
    name: "checkout"
  }, {
    path: "/contact",
    component: _15a686a0,
    name: "contact"
  }, {
    path: "/gallery-one",
    component: _5cab9b2a,
    name: "gallery-one"
  }, {
    path: "/login",
    component: _33fb5f69,
    name: "login"
  }, {
    path: "/products",
    component: _d9b921d8,
    name: "products"
  }, {
    path: "/signup",
    component: _d06b0a70,
    name: "signup"
  }, {
    path: "/products-details/:id?",
    component: _2b8da701,
    name: "products-details-id"
  }, {
    path: "/",
    component: _6a53bc52,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
