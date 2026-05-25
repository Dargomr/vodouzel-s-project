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
    <ArrowButton
      @click="handlePrevSlide"
      direction="prev"
      :disabled="currentSlide === 0"
    ></ArrowButton>
    <ArrowButton
      @click="handleNextSlide"
      direction="next"
      :disabled="currentSlide === maxSlide"
      style="margin-left: 10px"
    ></ArrowButton>
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
import ArrowButton from '@/components/common/ArrowButton.vue'

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

let currentSlide = carouselStore.getCurrentSlide(props.section)

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
  carouselStore.goToSlide(props.section, index)
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
  setTimeout(() => {
    updateItemDimensions()
  }, 100)
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
/* ========== ОСНОВНЫЕ СТИЛИ КАРУСЕЛИ ========== */
.areas-of-application-section__content {
  overflow: hidden;
  position: relative;
}

.carousel {
  /* стили для обертки карусели */
}

.carousel__container {
  overflow: hidden;
}

.carousel__container-inner {
  display: flex;
  position: relative;
  transition: 1s ease-in-out;
}

.carousel__item {
  cursor: pointer;
  margin-left: 32px;
}

/* ========== СТИЛИ ДЛЯ certification-item__img-block (передаётся через carousel-class) ========== */
.certification-item__img-block {
  width: 496px;
  height: 496px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f8;
}

/* ========== СТИЛИ ДЛЯ certification-item__img (передаётся через carousel-class-inner) ========== */
.certification-item__img {
  width: 200px;
  height: 282px;
}

.certification-item__p {
  margin-top: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #002d82;
}

.carousel__text {
  margin-top: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #002d82;
}

.areas-of-application-section-carousel__buttons-768px {
  display: none;
}

/* ========== АДАПТИВ ПЛАНШЕТЫ (768px) ========== */
@media screen and (width <= 769px) {
  .areas-of-application-section__content {
    margin-top: 61px;
    overflow: hidden;
    position: relative;
  }

  .carousel__item {
    margin-left: 32px;
  }

  .carousel__item:first-child {
    margin-left: 0;
  }

  .certification-item__img-block {
    width: 430px;
    height: 430px;
  }

  .certification-item__img {
    width: 200px;
    height: 282px;
  }

  .carousel__text {
    font-size: 20px;
  }

  .areas-of-application-section-carousel__buttons-768px {
    margin-top: 42px;
    display: block;
  }
}

/* ========== АДАПТИВ ТЕЛЕФОНЫ (375px) ========== */
@media screen and (width <= 375px) {
  .areas-of-application-section__content {
    margin-top: 55px;
  }

  .carousel__item {
    margin-left: 20px;
  }

  .certification-item__img-block {
    width: 268px;
    height: 268px;
  }

  .certification-item__img {
    width: 141px;
    height: 200px;
  }

  .carousel__text {
    font-size: 18px;
  }

  .areas-of-application-section-carousel__buttons-768px {
    margin-top: 32px;
  }
}
</style>
