<template>
  <section :class="['rename-section', bgGray ? 'bg-gray' : '']">
    <div :class="[mainClass, { 'no-padding-top': noTopPadding }]">
      <div :class="[{ 'long-header': isLongHeader }, `${mainClass}__type-and-name`]">
        <div v-if="blackTitle">
          <h2 class="clients-section__h2">{{ blackTitle }}</h2>
          <p v-if="blackP" class="reasons-section__text">{{ blackP }}</p>
        </div>
        <div v-else>
          <h2 v-if="withH2" class="heatMeters-section__type">{{ h2 }}</h2>
          <p class="heatMeters-section__name">{{ name }}</p>
          <p v-if="secondName" class="heatMeters-section__secondName">{{ secondName }}</p>
        </div>

        <div v-if="isCarousel" class="areas-of-application-section-carousel__buttons">
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
      </div>
      <div :class="`${mainClass}__content`">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useCarouselStore } from '@/stores/CarouselStore.js'
import { computed } from 'vue'

const carouselStore = useCarouselStore()
import { defineProps } from 'vue'
import ArrowButton from '@/components/common/ArrowButton.vue'
import Breadcrumbs from '@/components/common/Breadcrumbs.vue'

const props = defineProps({
  bgGray: {
    type: Boolean,
    default: false,
  },
  mainClass: {
    type: String,
    default: 'heatMeters-section',
  },
  isFirstSection: {
    type: Boolean,
    default: false,
  },
  withH2: {
    type: Boolean,
    default: true,
  },
  blackTitle: {
    type: String,
  },
  blackP: {
    type: String,
  },
  name: String,
  h2: {
    type: String,
    default: 'О продукте',
  },
  secondName: {
    type: String,
  },
  isCarousel: {
    type: Boolean,
  },
  currentSlide: {
    type: Number,
    default: 0,
  },
  maxSlide: {
    type: Number,
    default: 0,
  },
  section: {
    type: String,
  },
  noTopPadding: {
    type: Boolean,
  },
  isLongHeader: {
    type: Boolean,
  },
})

let currentSlide = computed(() => {
  if (!props.section || !props.isCarousel) {
    return 0
  }
  const slideRef = carouselStore.getCurrentSlide(props.section)
  return slideRef.value
})

let maxSlide = computed(() => {
  return carouselStore.getMaxSlide(props.section)
})

const handlePrevSlide = () => {
  if (props.section) {
    carouselStore.prevSlide(props.section)
  }
}

const handleNextSlide = () => {
  if (props.section) {
    carouselStore.nextSlide(props.section)
  }
}
</script>

<style scoped>
/* Стили для rename-section */

.upToDownBlock__type-and-name.long-header {
  grid-column: 1/4;
  grid-row: 1/2;
}
.rename-section {
  grid-column: 1/5;
}

.bg-gray {
  background-color: #f2f2f8;
}

/* Стили для upToDownBlock */
.upToDownBlock {
  padding: 120px 0 90px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 32px;
  border-bottom: 1px solid #d9d9d9;
}

.upToDownBlock__type-and-name {
  grid-column: 1/3;
  grid-row: 1/2;
}

.upToDownBlock__content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column: 1/5;
}

/* Стили для секций с продуктами */

.heatMeters-section {
  padding: 120px 0;
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 32px;
  border-bottom: 1px solid #d9d9d9;
}

.heatMeters-section__type {
  font-size: 16px;
  color: #002d82;
  font-weight: 400;
}

.heatMeters-section__type::before {
  content: url('../img/orange-circle.png');
  margin-right: 6px;
}

.heatMeters-section__name {
  font-family: 'Manrope', sans-serif;
  margin-top: 10px;
  color: #002d82;
  font-size: 36px;
  font-weight: 700;
}

.heatMeters-section__secondName {
  font-family: 'Manrope', sans-serif;
  margin-top: 20px;
  color: #002d82;
  font-size: 36px;
  font-weight: 700;
}

/* Стили для клиентов */
.clients-section__h2 {
  font-family: 'Manrope', sans-serif;
  color: #18182f;
  font-weight: 700;
  font-size: 30px;
}

.reasons-section__text {
  margin-top: 40px;
  font-size: 20px;
  font-weight: 400;
  color: #3c3c50;
}

/* Кнопки карусели */
.areas-of-application-section-carousel__buttons {
  margin-top: 354px;
  display: flex;
}

.contacts-section__switch {
  padding-top: 20px;
  display: flex;
}

/* Кнопки карусели в Rename */
.areas-of-application-section-carousel__buttons {
  margin-top: 354px;
  display: flex;
}

.areas-of-application-section-carousel__button-left {
  width: 60px;
  height: 60px;
  background-position: center;
  border: none;
  border-radius: 50%;
  background-image: url('../img/carousel-button-left.png');
}

.areas-of-application-section-carousel__button-right {
  width: 60px;
  height: 60px;
  margin-left: 10px;
  background-position: center;
  border: none;
  border-radius: 50%;
  background-image: url('../img/carousel-button-right.png');
}

/* Кнопки внутри Carousel.vue для планшетов */
.areas-of-application-section-carousel__buttons-768px {
  display: none;
}

.rename-section {
  grid-column: 1/5;
}

.bg-gray {
  background-color: #f2f2f8;
}

.heatMeters-section__content {
  display: grid;
  grid-template-columns: 3fr;
}

.heatMeters-section__secondName {
  font-family: 'Manrope', sans-serif;
  margin-top: 20px;
  color: #002d82;
  font-size: 36px;
  font-weight: 700;
}

.contacts-section__switch {
  padding-top: 20px;
}

.upToDownBlock {
  padding: 120px 0 90px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 32px;
  border-bottom: 1px solid #d9d9d9;
}

.upToDownBlock__type-and-name {
  grid-column: 1/3;
  grid-row: 1/2;
}

.upToDownBlock__content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column: 1/5;
}

.isSlim .upToDownBlock__content {
  display: grid;
  grid-column: 1/5;
  grid-template-columns: repeat(4, 1fr);
  grid-row: 2/3;
}

.contacts-section__switch {
  display: flex;
}

.no-padding-top {
  padding-top: 60px;
}

@media screen and (max-width: 769px) {
  .upToDownBlock {
    display: block;
  }

  .upToDownBlock {
    display: block;
  }

  .heatMeters-section {
    display: block;
  }

  .heatMeters-section__name {
    font-size: 36px;
  }

  .clients-section__h2 {
    font-size: 30px;
  }

  .clients-section__items {
    grid-template-columns: 3fr;
  }

  .areas-of-application-section-carousel__buttons {
    margin-top: 0;
    display: none;
  }

  .upToDownBlock__content {
    display: block;
  }
}

@media screen and (max-width: 375px) {
  .heatMeters-section {
    padding-top: 90px;
    display: block;
  }

  .heatMeters-section__name {
    font-size: 26px;
  }

  .heatMeters-section__secondName {
    font-size: 22px;
  }

  .clients-section__h2 {
    font-size: 26px;
  }

  .reasons-section__text {
    font-size: 18px;
    margin-top: 20px;
  }

  .areas-of-application-section-carousel__buttons {
    margin-top: 0;
    display: none;
  }
}
</style>
