import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _8f0c9eb0 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _9cca36ce = () => import('../pages/demandOrder.vue' /* webpackChunkName: "pages/demandOrder" */).then(m => m.default || m)
const _d4dbd0bc = () => import('../pages/experts/index.vue' /* webpackChunkName: "pages/experts" */).then(m => m.default || m)
const _85ef9dd0 = () => import('../pages/releaseResearch.vue' /* webpackChunkName: "pages/releaseResearch" */).then(m => m.default || m)
const _81db52ba = () => import('../pages/services/_id.vue' /* webpackChunkName: "pages/services-id" */).then(m => m.default || m)
const _0eb4caec = () => import('../pages/experts/_id.vue' /* webpackChunkName: "pages/undefined" */).then(m => m.default || m)
const _4072918d = () => import('../pages/experts/_id/index.vue' /* webpackChunkName: "pages/experts-id" */).then(m => m.default || m)
const _6163818c = () => import('../pages/experts/_id/reports.vue' /* webpackChunkName: "pages/experts-id-reports" */).then(m => m.default || m)
const _c236c98e = () => import('../pages/companyResearch/_id.vue' /* webpackChunkName: "pages/companyResearch-id" */).then(m => m.default || m)



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
			path: "/demandOrder",
			component: _9cca36ce,
			name: "demandOrder"
		},
		{
			path: "/experts",
			component: _d4dbd0bc,
			name: "experts"
		},
		{
			path: "/releaseResearch",
			component: _85ef9dd0,
			name: "releaseResearch"
		},
		{
			path: "/services/:id?",
			component: _81db52ba,
			name: "services-id"
		},
		{
			path: "/experts/:id",
			component: _0eb4caec,
			children: [
				{
					path: "",
					component: _4072918d,
					name: "experts-id"
				},
				{
					path: "reports",
					component: _6163818c,
					name: "experts-id-reports"
				}
			]
		},
		{
			path: "/companyResearch/:id?",
			component: _c236c98e,
			name: "companyResearch-id"
		}
    ],
    fallback: false
  })
}
