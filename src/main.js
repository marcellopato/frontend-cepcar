import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import { routes } from './routes'
import navegador from './components/nav'
import busca from './components/busca'
import vitrine from './components/vitrine'
import loader from './components/loader'
import footer from './components/footer'
// import { moment } from 'moment'

Vue.use(VueRouter)

var moment = require('moment');
moment().format();

const router = new VueRouter({
	routes,
	mode: 'history'
});

window.Vue = Vue
window._ = require('lodash')
window.axios = require('axios')

axios.defaults.baseURL = 'https://cep5.dev/api'

Vue.component('app-navegador', navegador)
Vue.component('app-busca', busca)
Vue.component('app-vitrine', vitrine)
Vue.component('app-loader', loader)
Vue.component('app-footer', footer)

export const bus = new Vue()

new Vue({
	el: '#app',
	router,
	// saveScrollPosition: true,
	linkActiveClass : 'active',
	render: h => h(App)
})
