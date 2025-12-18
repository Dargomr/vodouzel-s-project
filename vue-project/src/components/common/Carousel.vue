<template>
  <section class="areas-of-application-section">
    <div class="areas-of-application-section__h3-and-buttons">
      <div class="production-section__type-and-name" v-if="main">
        <p class="production-section__type">Проекты и клиенты</p>
        <p class="production-section__name">Наша продукция<br>на объектах</p>
      </div>
      <p v-else class="areas-of-application-section__h3">Основные сферы применения</p>
      <div class="areas-of-application-section-carousel__buttons">
        <button class="areas-of-application-section-carousel__button-left" @click="prevSlide" :disabled="slideIndex === 0"></button>
        <button class="areas-of-application-section-carousel__button-right" @click="nextSlide" :disabled="slideIndex === maxSlideIndex"></button>
      </div>
    </div>
    <div class="areas-of-application-section__content">
      <div class="carousel">
        <div class="carousel__container">
          <div class="carousel__container-inner" :style="carouselTransform" ref="carouselInner">
            <div v-for="(item, index) in items" :key="index" class="carousel__item" ref="carouselItems">
              <div  class="carousel__img">
                <img class="carousel__img-inner" :src="item.image" :alt="item.alt">
              </div>
              <p class="carousel__text">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="areas-of-application-section-carousel__buttons-768px">
      <button class="areas-of-application-section-carousel__button-left" @click="prevSlide" :disabled="slideIndex === 0"></button>
      <button class="areas-of-application-section-carousel__button-right" @click="nextSlide" :disabled="slideIndex === maxSlideIndex"></button>
    </div>

    <p v-if="nodes" class="areas-of-application-section__post-p">Эти узлы помогают не только в учете потребления,
      но и в управлении ресурсами, оптимизации расходов и контроле за качеством воды.</p>
  </section>
</template>

<script>
export default {
  name: "Slider",

  props: {
    items: {
      required: true,
      type: Array,
    },
    main: {
      required: false,
      type: Boolean,
    },
    nodes: {
      required: false,
      type: Boolean
    }
  },

  data() {
    return {

      slideIndex: 0,
      itemWidth: 0,
      itemMargin: 0,
    }
  },

  computed: {
    maxSlideIndex() {
      return this.items.length - 1
    },

    carouselTransform() {
      const translateX = -(this.itemWidth + this.itemMargin) * this.slideIndex
      return {
        transform: `translateX(${translateX}px)`,
        transition: 'transform 0.3s ease-in-out'
      }
    }
  },

  methods: {
    prevSlide() {
      this.slideIndex--
    },

    nextSlide() {
      this.slideIndex++
    },

    updateItemDimensions() {
      if(this.$refs.carouselItems && this.$refs.carouselItems.length > 0) {
        const item = this.$refs.carouselItems[0]
        if(item) {
          this.itemWidth = parseInt(window.getComputedStyle(item).getPropertyValue('width'))
          this.itemMargin = parseInt(window.getComputedStyle(item).getPropertyValue('margin-left'))
        }
      }
    }
  },

  mounted() {
    this.updateItemDimensions()

    addEventListener('resize', this.updateItemDimensions)

    this.$nextTick(() => {
      this.updateItemDimensions()
    })
  },

  beforeUnmount() {
    removeEventListener('resize', this.updateItemDimensions)
  }
}
</script>

<style scoped>
@import '@/assets/css/1440px.css';
@import '@/assets/css/768px.css';
@import '@/assets/css/375px.css';
</style>