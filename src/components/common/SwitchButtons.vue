<template>
  <div>
    <button class="item-page__back-button">Назад</button>
    <button class="item-page__all-filters-button">Все фильтры</button>
    <button class="item-page__filter-button" @click="emit('sort')">По возрастанию цены</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  store: String,
})

const emit = defineEmits(['sort'])
</script>

<style scoped></style>
