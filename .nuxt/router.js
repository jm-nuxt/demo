import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _b54584a2 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages\\index" */).then(m => m.default || m)
const _32e0615f = () => import('..\\pages\\releaseResearch.vue' /* webpackChunkName: "pages\\releaseResearch" */).then(m => m.default || m)
const _85e7dbc8 = () => import('..\\pages\\experts\\index.vue' /* webpackChunkName: "pages\\experts" */).then(m => m.default || m)
const _296feb84 = () => import('..\\pages\\experts\\_id.vue' /* webpackChunkName: "pages\\experts-id" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _b54584a2,
			name: "index"
		},
		{
			path: "/releaseResearch",
			component: _32e0615f,
			name: "releaseResearch"
		},
		{
			path: "/experts",
			component: _85e7dbc8,
			name: "experts"
		},
		{
			path: "/experts/:id",
			component: _296feb84,
			name: "experts-id"
		}
    ],
    fallback: false
  })
}
