<script setup>
import { ref, onMounted } from 'vue'
import api from '@/services/api'

// 1. Reactive state variables
const movies = ref([]) // 1. Data state : empty array waiting for server payload
const loading = ref(false) // 2. Loading state : true while the network request is pending
const error = ref(null) // 3. Error state : stores error message if request fails

// 2. Lifecycle hook triggered when component enters the DOM
onMounted(async () => {
   loading.value = true

   try {
      // Demande les 12 premiers films de la page 1
      const response = await api.get('/movies?page=1&itemsPerPage=35')
      if (response.data == undefined || response.data.length <= 0) {
         error.value = "Movies loading failed: Code 0"
      } else {
         movies.value = response.data
      }
   } catch (err) {
      error.value = 'Movies loading failed : ' + err.message
   } finally {
      loading.value = false
   }
})


</script>
<template>
   <div>
      <h1>🎬 Catalogue des Films</h1>

      <!-- State 1 : Loading -->
      <p v-if="loading">Movies list is loading...</p>
      <!-- State 2 : Display possible error -->
      <p v-else-if="error" style="color: red;">{{ error }}</p>
      <!-- State 3 : Success -->
      <ul v-else>
         <li v-for="movie in movies" :key="movie.id">
            <strong>{{ movie.title }}</strong> ({{ movie.year }})
         </li>
      </ul>

   </div>
</template>

<style scoped>

</style>