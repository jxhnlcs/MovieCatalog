<template>
  <div class="container">
    <div class="col-md-12">
      <div class="text-center page-header">
        <h1 style="color: white; font-weight: bold;">Catálogo de Filmes</h1>
      </div>
    </div>

    <div class="input-group">
      <input placeholder="Adicione um filme" class="form-control" type="text" v-model="nomeFilme">
      <div class="input-group-btn">
        <button class="btnAdd" @click="adicionarFilme">Adicionar</button>
      </div>
    </div>

    <br />

    <div class="movies">
      <h2>{{ nomesFilmes }}</h2>
      <ul class="list-group">
        <li class="list-group-item" v-for="filme in filmes" :key="filme.id">
            <span class="nameFilm">
              {{ filme.nomeFilme }}
            </span>
            <span class="input-group"> 
              <input :id="`input_update_${filme.id}`" class="form-control" placeholder="Editar o filme" v-model="editFilm[key]" type="text">
              <button class="btn btn-xs btn-info" @click="editFilme(filme.id)">Editar</button>
              <button class="btn btn-xs btn-danger" @click="removerFilme(filme.id)">Remover</button>
            </span>
        </li>
      </ul>
    </div>
  </div>
  <p></p>
</template>

<!-- Script -->

<script>

import { saveData, updateData, deleteData, db } from './database/firebase'
import { onSnapshot, collection } from "firebase/firestore";

export default {
  data() {
    return {
      nomeFilme: '',
      editFilm: '',
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
      if (this.nomeFilme.trim() === ''){
        return;
      }
      saveData('filmes', {
        nomeFilme: this.nomeFilme
      })
      this.nomeFilme = ''
    },

    editFilme(key) {
      const input_update = document.getElementById(`input_update_${key}`)
      updateData('filmes',key, {
        nomeFilme: input_update.value
      })
      this.editFilm.value = ''
    },

    removerFilme(key) {
      deleteData('filmes',key)
    }
  }
}

</script>