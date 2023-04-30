<template>
  <div class="container">
    <h1>Catálogo de Filmes</h1>

    <input placeholder="Adicione um filme" type="text" v-model="nomeFilme">

    <button @click="adicionarFilme">Adicionar</button>

    <div>
      <h2>{{ nomesFilmes }}</h2>
      <ul>
        <li v-for="filme in filmes" :key="filme.id">{{ filme.nomeFilme }}</li>
      </ul>
    </div>
  </div>
</template>

<!-- Script -->

<script>

import { saveData, db } from './database/firebase'
import { onSnapshot, collection } from "firebase/firestore";

export default {
  data() {
    return {
      nomeFilme: 'Vingadores',
      filmes: []
    }
  },

  mounted() { /// exibir filmes na tela
    onSnapshot(collection(db, '/filmes'), (querySnapshot) => {
      const documentos = []
      querySnapshot.forEach((doc) => {
        documentos.push({
          id: doc.id,
          ...doc.data()
        });
      });
      this.filmes = documentos
    });
  },

  methods: {
    adicionarFilme() {
      saveData('filmes', {
        nomeFilme: this.nomeFilme
      })
    }
  }
}

</script>