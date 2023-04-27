<template>
  <div class="container">
    <h1>Catálogo de Filmes</h1>

    <input placeholder="Adicione um filme" type="text" v-model="nomeFilme">

    <button @click="adicionarFilme">Adicionar</button>
  </div>
</template>

<!-- Script -->

<script>

import { db } from './database/firebase'
import { collection, addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      nomeFilme: 'Vingadores',
      nomesFilmes: []
    }
  },

  methods: {
    async adicionarFilme() {
      const docRef = await addDoc(collection(db, "filmes"), {
        nomeFilme: this.nomeFilme
      })
      console.log(docRef.id)
    }
  }
}

</script>
