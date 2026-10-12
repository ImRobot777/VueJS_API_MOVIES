<script setup>
import {ref, onMounted} from 'vue'
import {useRoute} from 'vue-router'
import api from '@/services/api'

// 1. Retrieve current route and movie ID parameter
const route = useRoute() // route.params.id will contain the movie's id (ie: 22567)

// 2. Reactive state variables
const movie = ref(null) // 1. Data state : Holds a single movie object, null initially
const loading = ref(false) // 2. Loading state : true while the network request is pending
const error = ref(null) // 3. Error state : stores error message if request fails

// 3. Fetch specific movie data when view is mounted
onMounted(async () => {
   loading.value = true
   try {
      const response = await api.get(`/movies/${route.params.id}`)
      if (response.data == undefined || response.data.length <= 0) {
         error.value = "Failed to load movie details: Code 0"
      } else {
         movie.value = response.data
      }
   } catch (err) {
      error.value = 'Failed to load movie details: ' + err.message
   } finally {
      loading.value = false
   }
})

</script>
<template>
   <div>
      <!-- Navigation back to catalog -->
      <p>
         <router-link to="/">⬅ Back to catalog</router-link>
      </p>
      <!-- State 1 : Loading -->
      <p v-if="loading">Loading movie details...</p>
      <!-- State 2 : Error -->
      <p v-else-if="error" style="color: red;">{{ error }}</p>
      <!-- State 3 : Success -->
      <article v-else-if="movie">
         <h1>{{ movie.title }} ({{ movie.year }})</h1>
         <p v-if="movie.averageRating">
            ⭐ <strong>Average rating :</strong> {{ movie.averageRating }} / 10
         </p>
         <!-- Conteneur flex à 2 colonnes -->
         <div class="movie-content">
            <!-- Colonne 1 (Gauche) : Affiche -->
            <img
               v-if="movie.poster"
               :src="movie.poster"
               :alt="movie.title"
               width="500"
            />
            <!-- Colonne 2 (Droite) : Détails textuels -->
            <div class="movie-info">
               <p>
                  <strong>Genres :</strong> {{ movie.genres?.map(g => g.label).join(', ') }}
               </p>
               <p>
                  <strong>Director(s) :</strong> {{ movie.directors?.map(d => d.fullName).join(', ') }}
               </p>
               <p>
                  <strong>Casting :</strong> {{ movie.castMembers?.map(a => a.fullName).join(', ') }}
               </p>
               <h3>Plot :</h3>
               <p>{{ movie.fullPlot || movie.plot || 'Aucun synopsis disponible.' }}</p>
            </div>
         </div>
      </article>
   </div>
</template>
<style scoped>
.movie-content {
   display: flex; /* Aligne l'affiche et les infos côte à côte */
   gap: 24px; /* Espace d'aération entre l'image et le texte */
   align-items: flex-start; /* Aligne le haut du texte avec le haut de l'affiche */
}

.movie-content img {
   flex-shrink: 0; /* Empêche l'image de s'écraser si le texte est long */
}
</style>