<template>
	<div class="card-columns">
	<loader v-show="loader"></loader> 
	<div class="card" v-for="vitrine in vitrines">
		<div class="card-header">
			<router-link :to="'/get-carro/' + vitrine.vid">
				<img :src="'/images/' + vitrine.foto" class="img-responsive">
			</router-link>
		</div>
		<div class="card-body">
			<div class="row">
				<div class="col-md-8">
					<span>Modelo: {{ vitrine.mdescricao }}</span><br>
					<span>Versão: {{ vitrine.vdescricao }}</span><br>
				</div>
				<div class="col-md-4">
						<img :src="'/images/' + vitrine.logotipo" alt="" class="img-responsive">
				</div>
			</div>
		</div>
		<div class="card-footer"><span>Preço Sugerido: </span><span class="badge badge-pill badge-warning">R$ {{ formatPrice(vitrine.preco_basico) }}</span></div>
	</div>
</div>
</template>
<script>
import { bus } from '../app';
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
	    },
	    methods: {
			montaVitrine() {
				this.loader = true
				axios.post('monta-vitrine').
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
		mounted() {
			//
		}
}
</script>