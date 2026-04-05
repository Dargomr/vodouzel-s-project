import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTilesStore = defineStore('tilesStore', () => {
  const aboutCompanyOurClientsTiles = ref([
    { id: 1, src: 'src/assets/img/client-img.png', alt: 'card__img1' },
    { id: 2, src: 'src/assets/img/client-img.png', alt: 'card__img2' },
    { id: 3, src: 'src/assets/img/client-img.png', alt: 'card__img3' },
    { id: 4, src: 'src/assets/img/client-img.png', alt: 'card__img4' },
    { id: 5, src: 'src/assets/img/client-img.png', alt: 'card__img5' },
    { id: 6, src: 'src/assets/img/client-img.png', alt: 'card__img6' },
    { id: 7, src: 'src/assets/img/client-img.png', alt: 'card__img7' },
    { id: 8, src: 'src/assets/img/client-img.png', alt: 'card__img8' },
    { id: 9, src: 'src/assets/img/client-img.png', alt: 'card__img9' },
    { id: 10, src: 'src/assets/img/client-img.png', alt: 'card__img10' },
    { id: 11, src: 'src/assets/img/client-img.png', alt: 'card__img11' },
    { id: 12, src: 'src/assets/img/client-img.png', alt: 'card__img12' },
    { id: 13, src: 'src/assets/img/client-img.png', alt: 'card__img13' },
    { id: 14, src: 'src/assets/img/client-img.png', alt: 'card__img14' },
    { id: 15, src: 'src/assets/img/client-img.png', alt: 'card__img15' },
    { id: 16, src: 'src/assets/img/client-img.png', alt: 'card__img16' },
  ])
  const mainReasonsTiles = ref([
    {
      id: 1,
      name: 'Персональный менеджер',
      number: '1',
      src: 'src/assets/img/card-img1.png',
      alt: 'card__img1',
    },
    {
      id: 2,
      name: 'Мгновенная обработка заказов',
      number: '2',
      src: 'src/assets/img/card-img2.png',
      alt: 'card__img2',
    },
    {
      id: 3,
      name: 'Гарантия и сертификаты качества',
      number: '3',
      src: 'src/assets/img/card-img3.png',
      alt: 'card__img3',
    },
    {
      id: 4,
      name: 'Качественная продукция от ведущих производителей',
      number: '4',
      src: 'src/assets/img/card-img4.png',
      alt: 'card__img4',
    },
    {
      id: 5,
      name: 'Опыт. На рынке с 2002 года',
      number: '5',
      src: 'src/assets/img/card-img5.png',
      alt: 'card__img5',
    },
    {
      id: 6,
      name: 'Консультация и помощь в подборе',
      number: '6',
      src: 'src/assets/img/card-img6.png',
      alt: 'card__img6',
    },
  ])

  const aboutCompanyOurServicesTiles = ref([
    {
      id: 1,
      src: 'src/assets/img/services-item-1.png',
      alt: 'services-item1',
      name: 'Составление проекта водомерного узла, соответствующего вашим интересам',
    },

    {
      id: 2,
      src: 'src/assets/img/services-item-2.png',
      alt: 'services-item2',
      name: 'Подбор необходимой комплектации под каждый проект и задачи',
    },
    {
      id: 3,
      src: 'src/assets/img/services-item-3.png',
      alt: 'services-item3',
      name: 'Монтаж водомерного узла',
    },

    {
      id: 4,
      src: 'src/assets/img/services-item-4.png',
      alt: 'services-item4',
      name: 'Проведение инструктажа по правильной эксплуатации',
    },
    {
      id: 5,
      src: 'src/assets/img/services-item-5.png',
      alt: 'services-item5',
      name: 'Поставка трубопроводной арматуры',
    },

    {
      id: 6,
      src: 'src/assets/img/services-item-6.png',
      alt: 'services-item6',
      name: 'Продажа теплосчетчиков и счетчиков для воды',
    },
  ])

  const mainFittingMetersTiles = ref([
    { id: 1, src: 'src/assets/img/fittings-item1__img.png', alt: 'card__img1' },
    { id: 2, src: 'src/assets/img/fittings-item2__img.png', alt: 'card__img2' },
    { id: 3, src: 'src/assets/img/fittings-item3__img.png', alt: 'card__img3' },
    { id: 4, src: 'src/assets/img/fittings-item4__img.png', alt: 'card__img4' },
    { id: 5, src: 'src/assets/img/fittings-item5__img.png', alt: 'card__img5' },
    { id: 6, src: 'src/assets/img/fittings-item6__img.png', alt: 'card__img6' },
  ])

  const mainWaterMetersTiles = ref([
    { id: 1, src: 'src/assets/img/water-meters-item1__img.png', alt: 'card__img1' },
    { id: 2, src: 'src/assets/img/water-meters-item2__img.png', alt: 'card__img2' },
    { id: 3, src: 'src/assets/img/water-meters-item3__img.png', alt: 'card__img3' },
    { id: 4, src: 'src/assets/img/water-meters-item4__img.png', alt: 'card__img4' },
  ])

  const mainOurClientsTiles = ref([
    { id: 1, src: 'src/assets/img/client-img.png', alt: 'card__img1' },
    { id: 2, src: 'src/assets/img/client-img.png', alt: 'card__img2' },
    { id: 3, src: 'src/assets/img/client-img.png', alt: 'card__img3' },
    { id: 4, src: 'src/assets/img/client-img.png', alt: 'card__img4' },
    { id: 5, src: 'src/assets/img/client-img.png', alt: 'card__img5' },
    { id: 6, src: 'src/assets/img/client-img.png', alt: 'card__img6' },
    { id: 7, src: 'src/assets/img/client-img.png', alt: 'card__img7' },
    { id: 8, src: 'src/assets/img/client-img.png', alt: 'card__img8' },
    { id: 9, src: 'src/assets/img/client-img.png', alt: 'card__img9' },
    { id: 10, src: 'src/assets/img/client-img.png', alt: 'card__img10' },
    { id: 11, src: 'src/assets/img/client-img.png', alt: 'card__img11' },
    { id: 12, src: 'src/assets/img/client-img.png', alt: 'card__img12' },
    { id: 13, src: 'src/assets/img/client-img.png', alt: 'card__img13' },
    { id: 14, src: 'src/assets/img/client-img.png', alt: 'card__img14' },
    { id: 15, src: 'src/assets/img/client-img.png', alt: 'card__img15' },
  ])

  const mapSection = {
    aboutCompanyOurClients: aboutCompanyOurClientsTiles.value,
    mainReasons: mainReasonsTiles.value,
    mainFittingMeters: mainFittingMetersTiles.value,
    mainWaterMeters: mainWaterMetersTiles.value,
    mainOurClients: mainOurClientsTiles.value,
    aboutCompanyOurServices: aboutCompanyOurServicesTiles.value,
  }

  const getTiles = computed(() => (section) => {
    return mapSection[section] || []
  })

  return {
    aboutCompanyOurClientsTiles,
    mainReasonsTiles,
    mainFittingMetersTiles,
    mainWaterMetersTiles,
    getTiles,
    mainOurClientsTiles,
    mapSection,
    aboutCompanyOurServicesTiles,
  }
})
