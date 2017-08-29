import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _8f0c9eb0 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _39338e72 = () => import('../pages/expert/index.vue' /* webpackChunkName: "pages/expert" */).then(m => m.default || m)
const _722c7e22 = () => import('../pages/expert/_id.vue' /* webpackChunkName: "pages/expert-id" */).then(m => m.default || m)



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
			component: _8f0c9eb0,
			name: "index"
		},
		{
			path: "/expert",
			component: _39338e72,
			name: "expert"
		},
		{
			path: "/expert/:id",
			component: _722c7e22,
			name: "expert-id"
		}
    ],
    fallback: false
  })
}
