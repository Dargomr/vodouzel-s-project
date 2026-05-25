<template>
  <div class="item-page__pages">
    <button
      v-for="pageNum in totalPages"
      :class="{ 'item-page__page': true, 'item-page__page_active': pageNum === currentPage }"
      :key="pageNum"
      @click="handleClick(pageNum)"
    >
      {{ pageNum }}
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  totalPages: {
    type: Number,
  },
  currentPage: {
    type: Number,
  },
})

const emit = defineEmits(['change'])

const handleClick = (pageNum) => {
  if (pageNum !== props.currentPage) {
    emit('change', pageNum)
  }
}
</script>

<style scoped>
.item-page__pages {
  display: flex;
}

.item-page__page {
  height: 34px;
  width: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: #002d82;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.item-page__page_active {
  background-color: #e1e4ef;
}

/* Адаптив планшеты */
@media screen and (max-width: 768px) {
  .item-page__page {
    height: 30px;
    width: 30px;
  }
}

/* Адаптив телефоны */
@media screen and (max-width: 375px) {
  .item-page__page {
    height: 23px;
    width: 23px;
    font-size: 14px;
  }
}
</style>
