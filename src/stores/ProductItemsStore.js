import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductItemsStore = defineStore('productItemsStore', () => {
  const carouselItems = ref([
    {
      image: 'src/assets/img/certification1-img.png',
      text: 'Жилые комплексы',
      alt: 'certification__img1',
    },
    {
      image: 'src/assets/img/certification2-img.png',
      text: 'Промышленные объекты',
      alt: 'certification__img2',
    },
    {
      image: 'src/assets/img/certification1-img.png',
      text: 'Общественные здания',
      alt: 'certification__img1',
    },
    {
      image: 'src/assets/img/certification2-img.png',
      text: 'Жилые комплексы',
      alt: 'certification__img2',
    },
  ])
})
