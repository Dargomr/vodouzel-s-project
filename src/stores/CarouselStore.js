import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCarouselStore = defineStore('carouselStore', () => {
  const aboutCompanyCertificationItems = ref([
    {
      src: 'src/assets/img/certification1-img.png',
      text: 'Жилые комплексы',
      alt: 'certification__img1',
    },
    {
      src: 'src/assets/img/certification2-img.png',
      text: 'Промышленные объекты',
      alt: 'certification__img2',
    },
    {
      src: 'src/assets/img/certification1-img.png',
      text: 'Общественные здания',
      alt: 'certification__img1',
    },
    {
      src: 'src/assets/img/certification2-img.png',
      text: 'Жилые комплексы',
      alt: 'certification__img2',
    },
  ])

  const mainOurProductionItems = ref([
    { src: 'src/assets/img/carousel_img2.png', text: 'Жилые комплексы', alt: 'carousel__img1' },
    {
      src: 'src/assets/img/carousel_img3.png',
      text: 'Промышленные объекты',
      alt: 'carousel__img2',
    },
    {
      src: 'src/assets/img/carousel_img1.png',
      text: 'Общественные здания',
      alt: 'carousel__img3',
    },
    { src: 'src/assets/img/carousel_img2.png', text: 'Жилые комплексы', alt: 'carousel__img4' },
  ])

  const nodesAreasOfApplicationItems = ref([
    {
      src: 'src/assets/img/carousel_img1.png',
      text: 'Коммерческие здания',
      alt: 'carousel__img1',
    },
    { src: 'src/assets/img/carousel_img2.png', text: 'Жилые комплексы', alt: 'carousel__img2' },
    {
      src: 'src/assets/img/carousel_img3.png',
      text: 'Промышленные предприятия',
      alt: 'carousel__img3',
    },
    { src: 'src/assets/img/carousel_img2.png', text: 'Жилые комплексы', alt: 'carousel__img4' },
  ])

  const aboutCompanyCertificationSlide = ref(0)
  const mainOurProductionSlide = ref(0)
  const nodesAreasOfApplicationSlide = ref(0)

  const itemsMap = {
    aboutCompanyCertification: aboutCompanyCertificationItems,
    mainOurProduction: mainOurProductionItems,
    nodesAreasOfApplication: nodesAreasOfApplicationItems,
  }

  const slidesMap = {
    aboutCompanyCertification: aboutCompanyCertificationSlide,
    mainOurProduction: mainOurProductionSlide,
    nodesAreasOfApplication: nodesAreasOfApplicationSlide,
  }
  //
  // const nodesCurrentSlide = ref(0)
  // const nodesMaxSlide = ref(0)

  const getItems = (section) => {
    const items = itemsMap[section]
    return items.value
  }

  const getCurrentSlide = (section) => {
    return slidesMap[section] || ref(0)
  }

  const getMaxSlide = (section) => {
    const items = itemsMap[section]
    if (!items || items.value.length === 0) {
      return 0
    }
    return items.value.length - 1
  }

  const prevSlide = (section) => {
    let slide = slidesMap[section]
    if (slide.value > 0) {
      slide.value--
    }
  }

  const nextSlide = (section) => {
    const slide = slidesMap[section]
    const maxSlide = getMaxSlide(section)
    if (slide.value < maxSlide) {
      slide.value++
    }
  }

  const goToSlide = (section, index) => {
    let slide = slidesMap[section]
    slide.value = index
  }

  return {
    aboutCompanyCertificationItems,
    mainOurProductionItems,
    nodesAreasOfApplicationItems,
    aboutCompanyCertificationSlide,
    mainOurProductionSlide,
    nodesAreasOfApplicationSlide,
    getItems,
    getCurrentSlide,
    getMaxSlide,
    prevSlide,
    nextSlide,
    goToSlide,
  }
})
