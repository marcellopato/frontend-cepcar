<template>
<div class="busca">
<loader v-show="loader"></loader>
<form class="form-inline col-md-offset-3">
	<div class="form-group m-r-20">
        <select class="custom-select select-multi" name="marca" id="marca" style="min-width: 160px;" v-model="marcaid" @change="montaModelos">
          <option selected disabled>Selecione a Marca</option>
            <option v-for="marca in marcas" :value="marca.id">{{ marca.descricao }}</option>
        </select>
	</div>
	&nbsp;
	<div class="form-group m-r-20">
        <select class="custom-select select-multi" name="modelos" style="max-width: 160px;" v-model="modeloid" @change="montaVersaos">
          <option selected disabled>Selecione o Modelo</option>
            <option v-for="modelo in modelos" :value="modelo.id">{{ modelo.descricao }}</option>
        </select>
	</div>
	&nbsp;
	<div class="form-group">
        <select class="custom-select select-multi" name="versaos" style="min-width: 160px;">
          <option selected disabled>Selecione a Alimentação</option>
            <option value="1">Combustão</option>
            <option value="2">Elétrico</option>
            <option value="3">Híbrido</option>
        </select>
	</div>
</form>	
</div>
</template>
<script>
import { bus } from '../main';
  export default {
    data() {
      return {
        marcas: [],
        modelos: [],
        marcaid : 'Selecione a Marca',
        modeloid : 'Selecione o Modelo',
        loader: false
      }
    },
    created() {
      this.montaMarcas();
    },
    methods: {
      montaMarcas() {
        axios.get('https://cep5.dev/api/marcas').
        then(response =>  {
          this.marcas = response.data
        })
      },
      montaModelos() {
        this.loader = true
        axios.get('https://cep5.dev/api/modelos', {
          params: {
            id: this.marcaid
          }
        })
        .then(response => {
          this.modelos = response.data
          this.loader = false
        })
      },
      montaVersaos() {
        this.loader = true
        axios.get('https://cep5.dev/api/versaos', {
          params: {
            id: this.modeloid
          }
        })
        .then(response => {
          this.loader = false
          bus.$emit('trocaCarros', response.data)
        })
      }
    }
  }
</script>