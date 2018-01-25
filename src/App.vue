<template>
<div>
	<app-navegador></app-navegador>
	<!-- <app-busca></app-busca> -->
	 <router-view></router-view>
	<vitrine></vitrine>
	<app-footer></app-footer>
</div>
</template>

<script>
import navegador from './components/nav'
import busca from './components/busca'
import footer from './components/footer'
export default {
	components: {
		'app-navegador': navegador,
		'app-busca': busca,
		'app-footer': footer
	},
	data () {
		return {
			//
		}
	}
}
</script>

<style>
</style>