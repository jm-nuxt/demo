import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _26cc3b47 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages\\index" */).then(m => m.default || m)
const _dd468810 = () => import('..\\pages\\demandOrder.vue' /* webpackChunkName: "pages\\demandOrder" */).then(m => m.default || m)
const _d07640f8 = () => import('..\\pages\\experts\\index.vue' /* webpackChunkName: "pages\\experts" */).then(m => m.default || m)
const _a17d7e12 = () => import('..\\pages\\releaseResearch.vue' /* webpackChunkName: "pages\\releaseResearch" */).then(m => m.default || m)
const _26afbdde = () => import('..\\pages\\services\\_id.vue' /* webpackChunkName: "pages\\services-id" */).then(m => m.default || m)
const _074cf2ec = () => import('..\\pages\\experts\\_id.vue' /* webpackChunkName: "pages\\undefined" */).then(m => m.default || m)
const _0d868016 = () => import('..\\pages\\experts\\_id\\index.vue' /* webpackChunkName: "pages\\experts-id" */).then(m => m.default || m)
const _b1bea0fa = () => import('..\\pages\\experts\\_id\\reports.vue' /* webpackChunkName: "pages\\experts-id-reports" */).then(m => m.default || m)
const _a1d411c6 = () => import('..\\pages\\companyResearch\\_id.vue' /* webpackChunkName: "pages\\companyResearch-id" */).then(m => m.default || m)



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
			component: _26cc3b47,
			name: "index"
		},
		{
			path: "/demandOrder",
			component: _dd468810,
			name: "demandOrder"
		},
		{
			path: "/experts",
			component: _d07640f8,
			name: "experts"
		},
		{
			path: "/releaseResearch",
			component: _a17d7e12,
			name: "releaseResearch"
		},
		{
			path: "/services/:id?",
			component: _26afbdde,
			name: "services-id"
		},
		{
			path: "/experts/:id",
			component: _074cf2ec,
			children: [
				{
					path: "",
					component: _0d868016,
					name: "experts-id"
				},
				{
					path: "reports",
					component: _b1bea0fa,
					name: "experts-id-reports"
				}
			]
		},
		{
			path: "/companyResearch/:id?",
			component: _a1d411c6,
			name: "companyResearch-id"
		}
    ],
    fallback: false
  })
}
