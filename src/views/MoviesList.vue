<script setup>
import {onMounted} from 'vue'
import { useMoviesStore } from '@/stores/movies'
import MovieCard from '@/components/MovieCard.vue'

// 1. Instantiate the Pinia store
const moviesStore = useMoviesStore() //4 will handle movies, loading and error vars !!!

// 2. Lifecycle hook triggered when component enters the DOM
onMounted(() => {
   moviesStore.fetchMovies()// Uses default page 1 and itemsPerPage 12
})


</script>
<template>
   <div>
      <h1>🎬 Catalog</h1>
      <!-- State 1 : Loading -->
      <p v-if="moviesStore.loading">Movies list is loading...</p>
      <!-- State 2 : Display possible error -->
      <p v-else-if="moviesStore.error" style="color: red;">{{ moviesStore.error }}</p>
      <!-- State 3 : Success -->
      <ul v-else>
         <MovieCard
            v-for="movie in moviesStore.movies"
            :key="movie.id"
            :movieFromList="movie"
         />
      </ul>
   </div>
</template>

<style scoped>

</style>