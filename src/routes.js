import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'
import Posts from'./components/posts.vue'
import PageNotFound from './components/PageNotFound.vue'


const router = new VueRouter({
	routes: [ 
		{
			path: '/',
			component: App
		},
		{
			path: '/posts',
			component: Posts
		},
		{
			path: '*',
			component: PageNotFound
		},
	]
})

export default router
