require('./bootstrap');

import VueRouter from 'vue-router';
import App from './App.vue';

import vitrine from './components/vitrine';
import posts from'./components/posts.vue';
import loadre from './components/loader';
import PageNotFound from './components/PageNotFound.vue';

Vue.component('vitrine', vitrine);

Vue.use(VueRouter);

export const bus = new Vue();

const routes = [
	{
		path: '/',
		component: App
	},
	{
		path: '/posts',
		component: posts
	},
	{
		path: '*',
		component: PageNotFound
	},
];

const router = new VueRouter({
	mode: 'history',
	routes: routes
})

new Vue({
	el: '#app',
	router: router,
	saveScrollPosition: true,
	linkActiveClass : 'active',
	render: h => h(App)
})
