<script setup>
defineProps({
   movieFromList: Object
})

</script>
<template>
   <div>
      <h2><strong>{{ movieFromList.title }}</strong> ({{ movieFromList.year }})</h2>
      <!-- Miniature + link -->
      <p>
         <router-link :to="'/movies/' + movieFromList.id">
            <img
               v-if="movieFromList.poster"
               :src="movieFromList.poster"
               :alt="movieFromList.title"
               width="110"
            />
         </router-link>
      </p>
      <p>
         Genres: <span>{{ movieFromList.genres?.map(g => g.label).join(', ') }}</span>
      </p>

      <hr>
   </div>
</template>

<style scoped>

</style>