<template>
  <div class="container">
    <h1>Catálogo de Filmes</h1>

    <input placeholder="Adicione um filme" type="text" v-model="nomeFilme">

    <button @click="adicionarFilme">Adicionar</button>

    <div>
      <h2>{{ nomesFilmes }}</h2>
      <ul>
        <li v-for="filme in filmes" :key="filme.id">
          <div style="display: flex; gap: .5rem; justify-content: center;">
            <span>
              {{ filme.nomeFilme }}
            </span>
            <button @click="editFilme(filme.id)">editar</button>
            <button @click="removerFilme(filme.id)">remover</button>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>

<!-- Script -->

<script>

import { saveData, updateData, deleteData, db } from './database/firebase'
import { onSnapshot, collection } from "firebase/firestore";

export default {
  data() {
    return {
      nomeFilme: 'Vingadores',
      filmes: [],
      editForm: []
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
    },

    editFilme(key) {
      updateData('filmes',key, {
        nomeFilme: this.nomeFilme
      })
    },

    removerFilme(key) {
      deleteData('filmes',key)
    }
  }
}

</script>