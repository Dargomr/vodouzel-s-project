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
.nodes-carousel-section__h2 {
  font-size: 36px;
  font-weight: 700;
  color: #002d82;
  line-height: 120%;
}

.nodes-carousel {
  display: flex;
  position: relative;
  transition: 1s ease-in-out;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  overflow: auto visible;
  scrollbar-width: none;
  -ms-overflow-style: none;
  margin-top: 40px;
}

.nodes-carousel::-webkit-scrollbar {
  display: none;
}

.nodes-carousel-item {
  display: flex;
  height: 120px;
  width: 260px;
  justify-content: space-between;
  background-color: white;
  border-radius: 4px;
  scroll-snap-align: center;
  flex-shrink: 0;
}

.nodes-carousel-item:not(:first-child) {
  margin-left: 16px;
}

.nodes-carousel-item__content {
  margin: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.nodes-carousel-item__name {
  font-size: 16px;
  font-weight: 500;
  color: #002d82;
}

.nodes-carousel-item__number {
  font-size: 16px;
  font-weight: 400;
  color: #7990bd;
}

.nodes-carousel-item__img {
  height: 100%;
}

.nodes-carousel-section__buttons {
  margin-top: 20px;
  display: flex;
}

.nodes-carousel_left-button {
  width: 40px;
  height: 40px;
  background-color: #002d82;
  border-radius: 100%;
  border: none;
  cursor: pointer;
}

.nodes-carousel_left-button:hover {
  background-color: #001c50;
}

.nodes-carousel_left-button::before {
  position: relative;
  left: 16px;
  display: block;
  content: '';
  width: 9px;
  height: 9px;
  border-bottom: 3px solid white;
  border-left: 3px solid white;
  transform: rotate(45deg);
}

.nodes-carousel_right-button {
  width: 40px;
  height: 40px;
  background-color: #002d82;
  border-radius: 100%;
  margin-left: 10px;
  border: none;
  cursor: pointer;
}

.nodes-carousel_right-button:hover {
  background-color: #001c50;
}

.nodes-carousel_right-button::before {
  position: relative;
  left: 11px;
  display: block;
  content: '';
  width: 9px;
  height: 9px;
  border-bottom: 3px solid white;
  border-left: 3px solid white;
  transform: rotate(225deg);
}

/* Адаптив планшеты */
@media screen and (max-width: 768px) {
  .nodes-carousel-section__h2 {
    font-size: 36px;
  }

  .nodes-carousel {
    margin-top: 40px;
  }

  .nodes-carousel-item {
    height: 120px;
    width: 260px;
  }
}

/* Адаптив телефоны */
@media screen and (max-width: 375px) {
  .nodes-carousel-section__h2 {
    font-size: 32px;
  }

  .nodes-carousel {
    margin-top: 32px;
  }

  .nodes-carousel-item {
    height: 120px;
    width: 260px;
  }

  .nodes-carousel_left-button,
  .nodes-carousel_right-button {
    width: 40px;
    height: 40px;
  }
}
</style>
