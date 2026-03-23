<template>
  <div>
    <div v-for="item in displayedItems" class="item-page__item">
      <img class="item-page__item-img" :src="item.img" alt="item-page__item-img" />
      <p class="item-page__item-name">{{ item.name }}</p>
      <p class="item-page__item-article">
        Артикул:
        <span>{{ item.article }}</span>
      </p>
      <p class="item-page__item-prev-price">
        от
        <span>{{ item.prevPrice }}</span>
        ₽
      </p>
      <p class="item-page__item-curr-price">
        от
        <span>{{ item.currPrice }}</span>
        ₽
      </p>
      <button class="item-page__item-more-detailed">Подробнее</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  displayedItems: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped></style>
