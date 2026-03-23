<template>
  <section :class="['rename-section', bgGray ? 'bg-gray' : '']">
    <div v-if="isFirstSection" class="contacts-section__switch">
      <p class="main-switch">Главная</p>
      &nbsp;
      <p class="proch">/</p>
      &nbsp;
      <p class="contacts-switch">Контакты</p>
    </div>

    <div :class="mainClass">
      <div :class="`${mainClass}__type-and-name`">
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
          <button
            class="areas-of-application-section-carousel__button-left"
            @click="prevSlide"
            :disabled="nodesCurrentSlide === 0"
          ></button>
          <button
            class="areas-of-application-section-carousel__button-right"
            @click="nextSlide"
            :disabled="nodesCurrentSlide === maxSlide"
          ></button>
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
import { storeToRefs } from 'pinia'

const carouselStore = useCarouselStore()

const { nodesCurrentSlide, nodesMaxSlide } = storeToRefs(carouselStore)

const props = defineProps({
  // isSlim: {
  //   type: Boolean,
  //   default: false
  // },
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
  // currentSlide: {
  //   type: Number,
  //   default: 0,
  // },
  maxSlide: {
    type: Number,
    default: 0,
  },
})

const prevSlide = () => {
  // if (props.currentSlide > 0) {
  carouselStore.nodesCurrentSlide--
  // }
}

const nextSlide = () => {
  // if (props.currentSlide < maxSlideIndex.value) {
  carouselStore.nodesCurrentSlide++
  // }
}

// const emit = defineEmits(['prev-slide', 'next-slide'])
</script>

<style scoped>
.rename-section {
  grid-column: 1/5;
}

.bg-gray {
  background-color: #f2f2f8;
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

@media screen and (max-width: 769px) {
  .upToDownBlock {
    display: block;
  }
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
</style>
