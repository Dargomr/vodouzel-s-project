<template>
  <div>
    <button class="item-page__back-button">Назад</button>
    <button class="item-page__all-filters-button">Все фильтры</button>
    <button class="item-page__filter-button" @click="func">По возрастанию цены</button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  store: String,
})
</script>

<style scoped></style>
