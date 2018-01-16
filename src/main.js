import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import home from './components/home.vue';
import posts from'./components/posts.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: home
	},
	{
		path: '/posts',
		component: posts
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
