<template>
  <div>
    <ArrowButton direction="prev" @click="$emit('prev-page')" :disabled="currentPage === 1"/>
    <Pagination :totalPages="totalPages" :currentPage="currentPage" @change="handlePageChange"/>
    <ArrowButton direction="next" @click="$emit('next-page')" :disabled="currentPage === totalPages"/>
  </div>
</template>

<script setup>

import ArrowButton from "@/components/common/ArrowButton.vue";
import Pagination from "@/components/common/Pagination.vue";

const props = defineProps({
  currentPage: {
    type: Number
  },
  totalPages: {
    type: Number,
  }
})

const emit = defineEmits(['prev-page', 'next-page', 'page-change']);

const handlePageChange = (pageNum) => {
  emit('page-change', pageNum);
}

</script>

<style scoped>

</style>