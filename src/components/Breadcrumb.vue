<script setup>
import { useMoviesStore } from '@/stores/movies'
import {useRoute} from 'vue-router'

// 1. Retrieve current route and movie ID parameter
const route = useRoute() //

// 2. Instantiate the Pinia Movie store
const moviesStore = useMoviesStore()

</script>

<template>
   <span v-if="route.name === 'home-view'" class="breadcrumb">
      Home
   </span>
   <span v-else-if="route.name==='movies-list'">
      <router-link to="/">Home</router-link> / Catalog
   </span>
   <span v-else-if="route.name==='movie-detail'">
      <router-link to="/">Home</router-link> / <router-link to="/movies">Catalog</router-link> / {{ moviesStore.currentMovie?.title || 'Loading...' }}
   </span>
</template>

<style scoped>

</style>