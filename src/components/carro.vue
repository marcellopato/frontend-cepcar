<template>
	<div>
		<app-loader v-show="loader"></app-loader>
    <section class="container">
      <h1>Versão: {{ carro.descricao }}</h1> 
      <div class="row">
          <div class="col-9">
            <span v-html="carro.ficha_tecnica"></span>
          </div>
          <div class="col col-lg-2">
            <div class="card right" style="width: 20rem;">
              <img class="card-img-top" :src="'/images/' + carro.foto" alt="Card image cap">
              <div class="card-body">
                <h4 class="card-title">Dados Técnicos</h4>
                <p class="card-text"><small><strong>Dados fornecidos pelo fabricante</strong></small></p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Velocidade Máxima: {{ carro.aceleracao100 }}</li>
                <li class="list-group-item">Alimentação: {{ carro.alimentacao_id }}</li>
                <li class="list-group-item">Cambio: {{ carro.cambio_id }}</li>
                <li class="list-group-item">Carroceria: {{ carro.carroceria_id }}</li>
                <li class="list-group-item">Categoria: {{ carro.categoria_id }}</li>
                <li class="list-group-item">Cilindrada: {{ carro.cilindrada_id }}</li>
              </ul>
              <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>
            </div>
          </div> 
      </div>
    </section>
	</div>
</template>
<script>
export default {
    data() {
      return {
        versao_id: this.$route.params.vid,
        carro: []
      }
    },
    created() {
        console.log(this.versao_id)
        this.loader = true
        axios.post('/carro-escolhido', {
            versao_id: this.versao_id
        })
        .then(response => {
          this.loader = false
          this.carro = response.data
          console.log(response.data)
        })
      }
    }	
</script>
