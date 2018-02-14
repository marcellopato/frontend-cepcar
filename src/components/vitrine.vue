<template>
<div class="container">
	<div class="card-columns">
		<app-loader v-show="loader"></app-loader>
		<div class="card" v-for="vitrine in vitrines">
			<div class="card-header">
				<router-link :to="'/carro-escolhido/' + vitrine.vid">
					<img :src="'http://cep5.dev/images/' + vitrine.foto" class="img-fluid">
				</router-link>
			</div>
			<div class="card-body">
				<div class="row">
					<div class="col-md-8">
						<span>Modelo: {{ vitrine.mdescricao }}</span><br>
						<span>Versão: {{ vitrine.vdescricao }}</span><br>
					</div>
					<div class="col-md-4">
						<img :src="'http://cep5.dev/images/' + vitrine.logotipo" alt="" class="img-fluid">
					</div>
				</div>
			</div>
			<div class="card-footer"><span>Preço Sugerido: </span><span class="badge badge-pill badge-warning">R$ {{ formatPrice(vitrine.preco_basico) }}</span></div>
		</div>
	</div>
</div>
</template>
<script>
import { bus } from '../main';
	export default {
		data() {
			return {
				vitrines : [],
				loader: false
			}
		},
		created() {
			this.montaVitrine();
			bus.$on('trocaCarros', (data) => {
	      		this.vitrines = data
	      	});
	      	bus.$on('trocaCarrosMesmaMarca', (data) =>{
	      		this.loader = true
	      		axios.post('/vitrine-marca', {
		            id: data
		        })
	      		.then(response => {
	      			console.log(response.data)
	      			this.vitrines = response.data
	      			this.loader = false
	      		})
	      	})
		},
		methods: {
				montaVitrine() {
					this.loader = true
					axios.get('/vitrine').
					then(response =>  {
						this.vitrines = response.data
						this.loader = false
					})
				},
				formatPrice(value) {
					let val = (value/1).toFixed(2).replace('.', ',')
					return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
				}
		},
}
</script>