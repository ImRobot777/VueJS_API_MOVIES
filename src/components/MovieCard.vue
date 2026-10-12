<script setup>
defineProps({
   movieFromList: Object
})

</script>
<template>
   <div>
      <h2><strong>{{ movieFromList.title }}</strong> ({{ movieFromList.year }})</h2>
      <!-- Miniature -->
      <img
         v-if="movieFromList.poster"
         :src="movieFromList.poster"
         :alt="movieFromList.title"
         width="120"
      />
      <p>
         Type: <span>Type : {{ movieFromList.genres?.map(g => g.label).join(', ') }}</span>
      </p>
      <p>
         <router-link :to="'/movies/' + movieFromList.id">See details</router-link>
      </p>
      <hr>
   </div>
</template>

<style scoped>

</style>