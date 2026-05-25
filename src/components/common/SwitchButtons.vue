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

<style scoped>
.item-page__buttons {
  display: flex;
  gap: 0;
}

.item-page__back-button {
  width: 104px;
  height: 40px;
  background-color: #fff;
  color: #002d82;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

.item-page__back-button:hover {
  background-color: #e1e4ef;
}

.item-page__all-filters-button {
  margin-left: 9px;
  width: 167px;
  height: 40px;
  background-color: #002d82;
  color: #fff;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

.item-page__all-filters-button:hover {
  background-color: #001c50;
}

.item-page__filter-button {
  margin-left: 6px;
  width: 256px;
  height: 40px;
  background-color: #e1e4ef;
  color: #002d82;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

.item-page__filter-button:hover {
  background-color: #cdd0df;
}

/* Адаптив планшеты */
@media screen and (max-width: 768px) {
  .item-page__back-button {
    width: 104px;
    height: 40px;
    font-size: 16px;
  }

  .item-page__all-filters-button {
    width: 167px;
    height: 40px;
    font-size: 16px;
  }

  .item-page__filter-button {
    width: 256px;
    height: 40px;
    font-size: 16px;
  }
}

/* Адаптив телефоны */
@media screen and (max-width: 375px) {
  .item-page__back-button {
    width: 82px;
    height: 30px;
    font-size: 14px;
  }

  .item-page__all-filters-button {
    width: 138px;
    height: 30px;
    font-size: 14px;
    margin-left: 9px;
  }

  .item-page__filter-button {
    width: 218px;
    height: 30px;
    font-size: 14px;
    margin-left: 8px;
  }
}
</style>
