<template>
  <div class="container">
    <h1>Catálogo de Filmes</h1>

    <input placeholder="Adicione um filme" type="text" v-model="nomeFilme">

    <button @click="adicionarFilme">Adicionar</button>

    <div>
      <ul>
        <li v-for="filme in filmes" :key="filme.id">{{ filme.nomeFilme }}</li>
      </ul>
    </div>
  </div>
</template>

<!-- Script -->

<script>

import { db } from './database/firebase'
import { collection, addDoc } from "firebase/firestore";
import firebase from 'firebase/app'
import 'firebase/database'

export default {
  data() {
    return {
      nomeFilme: 'Vingadores',
      nomesFilmes: []
    }
  },

  mounted() { /// exibir filmes na tela
    firebase.database().ref('filmes').on('value', snapshot => {
      this.nomesFilmes = snapshot.val()
    })
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
