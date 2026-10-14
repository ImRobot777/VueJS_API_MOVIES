<script setup>
const props = defineProps({
   currentPage: {
      type: Number,
      required: true
   },
   hasNext: {
      type: Boolean,
      default: true
   }
})
const emitCP = defineEmits(['change-page']) //launch an event

</script>

<template>
   <div class="pagination">
      <!-- 1. Previous page button -->
      <button
         :hidden="currentPage <= 1"
         @click="emitCP('change-page', currentPage - 1)"
      >
         ⬅ Previous
      </button>
      <!-- 2. Current page indicator -->
      <span>Page {{ currentPage }}</span>
      <!-- 3. Next page button -->
      <button
         :hidden="!hasNext"
         @click="emitCP('change-page', currentPage + 1)"
      >
         Next ➡
      </button>
   </div>
</template>

<style scoped>
.pagination {
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 16px;
   margin: 24px 0;
}
</style>