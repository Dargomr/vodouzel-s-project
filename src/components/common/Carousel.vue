<template>
  <div class="areas-of-application-section__content">
    <div class="carousel">
      <div class="carousel__container">
        <div class="carousel__container-inner" :style="carouselTransform" ref="carouselInner">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="carousel__item"
            ref="carouselItems"
            @click="handleItemClick(index)"
          >
            <div :class="carouselClass">
              <img :class="carouselClassInner" :src="item.src" :alt="item.alt" />
            </div>
            <p class="carousel__text">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="areas-of-application-section-carousel__buttons-768px">
    <button
      class="areas-of-application-section-carousel__button-left"
      @click="handlePrevSlide"
      :disabled="currentSlide === 0"
    ></button>
    <button
      class="areas-of-application-section-carousel__button-right"
      @click="handleNextSlide"
      :disabled="currentSlide === maxSlide"
    ></button>
  </div>

  <p v-if="showDescription" class="areas-of-application-section__post-p">
    Эти узлы помогают не только в учете потребления, но и в управлении ресурсами, оптимизации
    расходов и контроле за качеством воды.
  </p>
  <div class="carousel-indicators" v-if="showIndicators">
    <button
      v-for="i in items.length"
      :key="i"
      class="carousel-indicator"
      :class="{ active: currentSlide === i - 1 }"
      @click="handleGoToSlide(i - 1)"
    ></button>
  </div>
</template>

<script setup>
import { computed, onMounted, onBeforeUnmount, ref, nextTick } from 'vue'
import { useCarouselStore } from '@/stores/CarouselStore.js'

const carouselStore = useCarouselStore()

const props = defineProps({
  carouselClass: {
    type: String,
    default: 'carousel__img',
  },
  carouselClassInner: {
    type: String,
    default: 'carousel__img-inner',
  },
  section: {
    required: true,
    type: String,
  },
  // currentSlide: {
  //   type: Number,
  //   default: 0,
  // },
  showIndicators: {
    type: Boolean,
    default: false,
  },
  showDescription: {
    type: Boolean,
    default: false,
  },
})

// const emit = defineEmits(['slide-change'])

const carouselItems = ref([])
const carouselInner = ref(null)
const itemWidth = ref(0)
const itemMargin = ref(0)

const items = computed(() => {
  return carouselStore.getItems(props.section)
})

let currentSlide = computed(() => {
  return carouselStore.getCurrentSlide(props.section).value
})

const maxSlide = computed(() => {
  return carouselStore.getMaxSlide(props.section)
})

const handlePrevSlide = () => {
  carouselStore.prevSlide(props.section)
}

const handleNextSlide = () => {
  carouselStore.nextSlide(props.section)
}

const handleGoToSlide = (index) => {
  carouselStore.goToSlide(index)
}

const carouselTransform = computed(() => {
  const translateX = -(itemWidth.value + itemMargin.value) * currentSlide.value
  return {
    transform: `translateX(${translateX}px)`,
    transition: 'transform 0.3s ease-in-out',
  }
})

// const prevSlide = () => {
//   if (props.currentSlide > 0) {
//     emit('slide-change', props.currentSlide - 1)
//   }
// }

// const nextSlide = () => {
//   if (props.currentSlide < maxSlideIndex.value) {
//     emit('slide-change', props.currentSlide + 1)
//   }
// }

// const goToSlide = (index) => {
//   if (index >= 0 && index < maxSlideIndex.value) {
//     emit('slide-change', index)
//   }
// }

const handleItemClick = (index) => {
  carouselStore.goToSlide(index)
}

const updateItemDimensions = () => {
  if (carouselItems.value && maxSlide.value > 0) {
    const item = carouselItems.value[0]
    if (item) {
      itemWidth.value = parseInt(window.getComputedStyle(item).getPropertyValue('width'))
      itemMargin.value = parseInt(window.getComputedStyle(item).getPropertyValue('margin-left'))
    }
  }
}

const handleResize = () => {
  updateItemDimensions()
}

onMounted(() => {
  nextTick(() => {
    updateItemDimensions()
  })

  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  removeEventListener('resize', handleResize)
})
</script>

<style scoped>
@import '@/assets/css/1440px.css';
@import '@/assets/css/768px.css';
@import '@/assets/css/375px.css';
</style>
