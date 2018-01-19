<template>
<div>
	<app-navegador></app-navegador>
	<app-busca></app-busca>
	<vitrine></vitrine>
	<app-footer></app-footer>
	<!-- <router-view></router-view> -->
</div>
</template>
<script>
import navegador from './components/nav';
import busca from './components/busca';
import footer from './components/footer';
export default {
	components: {
		'app-navegador': navegador,
		'app-busca': busca,
		'app-footer': footer
	},
	data () {
		return {
		
		}
	}
		// },
  //   	methods: {
  //   		logout() {
		// 		localStorage.removeItem('token')
		// 		this.user.authenticated = false
		// 		this.$router.push('/');
		// 	}
  //   	}
	}
</script>
<style>
</style>