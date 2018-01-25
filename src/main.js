import Vue from 'vue';
import App from './App.vue'
import Router from './routes.js'
import navegador from './components/nav'
import busca from './components/busca'
import vitrine from './components/vitrine'
import loader from './components/loader'
import footer from './components/footer'

window.Vue = Vue
window._ = require('lodash')
window.axios = require('axios')

Vue.component('app-navegador', navegador)
Vue.component('app-busca', busca)
Vue.component('app-vitrine', vitrine)
Vue.component('app-loader', loader)
Vue.component('app-footer', footer)


export const bus = new Vue()

new Vue({
	el: '#app',
	router: Router,
	saveScrollPosition: true,
	linkActiveClass : 'active',
	render: h => h(App)
})
