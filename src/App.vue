<template>
  <div class="container">
    <h1>Catálogo de Filmes</h1>

    <input placeholder="Adicione um filme" type="text" v-model="nomeFilme">

    <button @click="adicionarFilme">Adicionar</button>
  </div>
</template>

<!-- Script -->

<script>
import {db} from './database/firebase'

export default{
  data(){
    return{
      nomeFilme: 'Vingadores',
      nomesFilmes: []
    }
  },

  methods:{
    adicionarFilme(){
      db.ref('filmes/').push({nomeFilme: this.nomeFilme})
      .then((data) => {console.log(data)})
      .catch((error) => {console.log(error)})
    }
  }
}

</script>
