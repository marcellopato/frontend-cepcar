// require('./bootstrap');
import Vue from 'vue';
import App from './App.vue'
import Router from './routes.js'
import vitrine from './components/vitrine'
import loader from './components/loader'

window.Vue = Vue
window._ = require('lodash')
window.axios = require('axios')

Vue.component('vitrine', vitrine)
Vue.component('loader', loader)


export const bus = new Vue()

new Vue({
	el: '#app',
	router: Router,
	saveScrollPosition: true,
	linkActiveClass : 'active',
	render: h => h(App)
})
