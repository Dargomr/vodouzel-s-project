import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCarouselStore = defineStore('carouselStore', () => {
  const aboutCompanyCertificationItems = ref([
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

  const mainOurProductionItems = ref([
    { image: 'src/assets/img/carousel_img2.png', text: 'Жилые комплексы', alt: 'carousel__img1' },
    {
      image: 'src/assets/img/carousel_img3.png',
      text: 'Промышленные объекты',
      alt: 'carousel__img2',
    },
    {
      image: 'src/assets/img/carousel_img1.png',
      text: 'Общественные здания',
      alt: 'carousel__img3',
    },
    { image: 'src/assets/img/carousel_img2.png', text: 'Жилые комплексы', alt: 'carousel__img4' },
  ])

  const nodesAreasOfApplicationItems = ref([
    {
      image: 'src/assets/img/carousel_img1.png',
      text: 'Коммерческие здания',
      alt: 'carousel__img1',
    },
    { image: 'src/assets/img/carousel_img2.png', text: 'Жилые комплексы', alt: 'carousel__img2' },
    {
      image: 'src/assets/img/carousel_img3.png',
      text: 'Промышленные предприятия',
      alt: 'carousel__img3',
    },
    { image: 'src/assets/img/carousel_img2.png', text: 'Жилые комплексы', alt: 'carousel__img4' },
  ])

  const mapSection = {
    aboutCompanyCertification: aboutCompanyCertificationItems.value,
    mainOurProduction: mainOurProductionItems.value,
    nodesAreasOfApplication: nodesAreasOfApplicationItems.value,
  }

  const nodesCurrentSlide = ref(0)
  const nodesMaxSlide = ref(0)

  const getItems = computed(() => (section) => {
    return mapSection[section] || []
  })

  return {
    aboutCompanyCertificationItems,
    mainOurProductionItems,
    nodesAreasOfApplicationItems,
    nodesCurrentSlide,
    nodesMaxSlide,
    getItems,
  }
})
