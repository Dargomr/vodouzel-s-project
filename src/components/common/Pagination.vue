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
@import '@/assets/css/1440px.css';
@import '@/assets/css/768px.css';
@import '@/assets/css/375px.css';
</style>
