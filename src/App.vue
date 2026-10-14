<script setup>
import Navbar from './components/Navbar.vue'
import TheFooter from './components/TheFooter.vue'
import Breadcrumb from './components/Breadcrumb.vue'
</script>

<template>
   <header>
      <Navbar /> <!-- En-tête permanent -->
      <Breadcrumb />
   </header>
   <main>
      <router-view /> <!-- Seul ce bloc central change selon la route -->
   </main>
   <footer>
      <TheFooter /> <!-- Pied de page permanent sur toutes les pages -->
   </footer>
</template>

<style scoped></style>
