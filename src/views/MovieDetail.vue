<script setup>
import {onMounted} from 'vue'
import {useRoute} from 'vue-router'
import { useMoviesStore } from '@/stores/movies'

// 1. Retrieve current route and movie ID parameter
const route = useRoute() // route.params.id will contain the movie's id (ie: 22567)

// 2. Instantiate the Pinia store
const moviesStore = useMoviesStore() //4 will handle movies, loading and error vars !!!

// 3. Fetch specific movie data when view is mounted
onMounted(() => {
   moviesStore.fetchMovieById(route.params.id)// get id from route
})

</script>
<template>
   <div>
      <!-- State 1 : Loading -->
      <p v-if="moviesStore.loading">Loading movie details...</p>
      <!-- State 2 : Error -->
      <p v-else-if="moviesStore.error" style="color: red;">{{ moviesStore.error }}</p>
      <!-- State 3 : Success -->
      <article v-else-if="moviesStore.currentMovie">
         <h1>{{ moviesStore.currentMovie.title }} ({{ moviesStore.currentMovie.year }})</h1>
         <p v-if="moviesStore.currentMovie.averageRating">
            ⭐ <strong>Average rating :</strong> {{ moviesStore.currentMovie.averageRating }} / 10
         </p>
         <!-- Conteneur flex à 2 colonnes -->
         <div class="movie-content">
            <!-- Colonne 1 (Gauche) : Affiche -->
            <img
               v-if="moviesStore.currentMovie.poster"
               :src="moviesStore.currentMovie.poster"
               :alt="moviesStore.currentMovie.title"
               width="500"
            />
            <!-- Colonne 2 (Droite) : Détails textuels -->
            <div class="movie-info">
               <p>
                  <strong>Genres :</strong> {{ moviesStore.currentMovie.genres?.map(g => g.label).join(', ') }}
               </p>
               <p>
                  <strong>Director(s) :</strong> {{ moviesStore.currentMovie.directors?.map(d => d.fullName).join(', ') }}
               </p>
               <p>
                  <strong>Casting :</strong> {{ moviesStore.currentMovie.castMembers?.map(a => a.fullName).join(', ') }}
               </p>
               <h3>Plot :</h3>
               <p>{{ moviesStore.currentMovie.fullPlot || moviesStore.currentMovie.plot || 'Aucun synopsis disponible.' }}</p>
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