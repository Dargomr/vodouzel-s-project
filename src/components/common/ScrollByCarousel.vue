<template>
  <div class="nodes-carousel" ref="nodesCarousel">
    <div v-for="(item, index) in allItems" :key="index" class="nodes-carousel-item">
      <div class="nodes-carousel-item__content">
        <p class="nodes-carousel-item__name">{{ item.name }}</p>
        <p class="nodes-carousel-item__number">{{ item.number }}</p>
      </div>
      <img class="nodes-carousel-item__img" :src="item.img" alt="nodes__roster-item__img" />
    </div>
  </div>

  <div class="nodes-carousel-section__buttons">
    <button class="nodes-carousel_left-button" @click="prevItem"></button>
    <button class="nodes-carousel_right-button" @click="nextItem"></button>
  </div>
</template>

<script>
export default {
  name: 'ScrollByCarousel',
  props: {
    nodesCarouselItems: {
      required: true,
      type: Array,
    },
  },

  data() {
    return {
      allItems: this.nodesCarouselItems,
    }
  },
  computed: {
    maxItemIndex() {
      return this.allItems.length - 1
    },
  },

  methods: {
    prevItem() {
      const container = this.$refs.nodesCarousel
      if (!container) {
        return
      }
      container.scrollBy({
        left: -10,
        behavior: 'smooth',
      })
    },

    nextItem() {
      const container = this.$refs.nodesCarousel
      if (!container) {
        return
      }
      container.scrollBy({
        left: 10,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style scoped>
@import '@/assets/css/1440px.css';
@import '@/assets/css/768px.css';
@import '@/assets/css/375px.css';
</style>
