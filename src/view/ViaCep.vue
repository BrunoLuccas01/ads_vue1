<template>
  <!-- Botão consulta -->
  <div class="container mt-5">
    <h1 class="mb-4">Consultar CEP</h1>
    <hr>
    
    <!-- Menu CEP -->
    <form @submit.prevent="getCep" class="mb-4">
      <div class="mb-3">
        <label for="cep" class="form-label">Digite o CEP:</label>
        <input type="text" id="cep" v-model="cep" class="form-control">
      </div>

      <button type="submit" class="btn btn-primary">Consultar</button>
    </form>

    <div v-if="place.street" class="mb-4">
      <h3 class="mb-3">Informações do CEP:</h3>
      <p><strong>Rua:</strong> {{ place.street }}</p>
      <p><strong>Bairro:</strong> {{ place.neighborhood }}</p>
      <p><strong>Cidade/Estado:</strong> {{ place.city }} / {{ place.state }}</p>

      <!-- Menu e botão dos documentos para baixar -->
      <div class="mb-3">
        <label for="format" class="form-label">Formato do Documento:</label>
        <select id="format" v-model="format" class="form-select">
          <option value="json">JSON</option>
          <option value="xml">XML</option>
          <option value="csv">CSV</option>
        </select>
      </div>

      <button @click="downloadDocument" class="btn btn-success">Baixar Documento</button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { reactive, ref } from 'vue'
import { saveAs } from 'file-saver'

const baseUrl = 'https://viacep.com.br/ws/'
const format = ref('json')

const cep = ref("") 

const place = reactive({
  street: '',
  neighborhood: '',
  city: '',
  state: ''
})

const getCep = () => {
  axios.get(`${baseUrl}${cep.value}/${format.value}`)
    .then((response) => {
      console.log(response)
      place.street = response.data.logradouro,
      place.neighborhood = response.data.bairro,
      place.city = response.data.localidade,
      place.state = response.data.uf
    })
    .catch((error) => {
      console.error('Eita.. deu erro!', error)
    })
}

// Função para baixar o documento
const downloadDocument = () => {
  const data = getFormattedData();
  const blob = new Blob([data], { type: getMimeType() });
  const fileName = `consulta_cep.${format.value}`;

  saveAs(blob, fileName);
}

// Obter extensão do arquivo
const getMimeType = () => {
  switch (format.value) {
    case 'json':
      return 'application/json';
    case 'xml':
      return 'application/xml';
    case 'csv':
      return 'text/csv';
    default:
      return 'application/octet-stream';
  }
}

// Formatação Documento
const getFormattedData = () => {
  return JSON.stringify({ street: place.street, neighborhood: place.neighborhood, city: place.city, state: place.state });
}
</script>

<style scoped>
/*Estilos*/
</style>
