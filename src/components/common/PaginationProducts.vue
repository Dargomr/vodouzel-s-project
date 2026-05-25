<template>
  <div>
    <SwitchButtons class="item-page__buttons" :store="store" @sort="handleSort" />

    <Slider class="item-page__content" :displayedItems="displayedItems" />

    <PaginationBlock
      class="item-page__keys-block"
      :total-pages="totalPages"
      :current-page="currentPage"
      @prev-page="prevPage"
      @page-change="pageChange"
      @next-page="nextPage"
    />
  </div>
</template>

<script setup>
import { onMounted, computed, onBeforeUnmount } from 'vue'
import { compoPagination } from '@/composables/compoPagination.js'
import PaginationBlock from '@/components/common/PaginationBlock.vue'
import Slider from '@/components/common/Slider.vue'
import SwitchButtons from '@/components/common/SwitchButtons.vue'
import { usePaginationStore } from '@/stores/PaginationStore.js'

const paginationStore = usePaginationStore()

const props = defineProps({
  productItems: {
    // required: true,
    type: Array,
    default: () => [],
  },
  store: {
    type: String,
  },
  section: {
    type: String,
  },
})

const items = computed(() => {
  return paginationStore.getItems(props.section)
})

const handleSort = () => {
  paginationStore.sortItemsByPrice(props.section, 'asc')
  currentPage.value = 1
}

const {
  currentPage,
  totalPages,
  displayedItems,
  pageChange,
  prevPage,
  nextPage,
  setupResizeListener,
  cleanupResizeListener,
} = compoPagination(items, 16)

// const itemsPerPage = ref(16)
// const currentPage = ref(1)
//
// const allItems = computed(() => props.productItems || [])
// const totalPages = computed(() =>  Math.ceil(allItems.value.length / itemsPerPage.value))
// const displayedItems = computed(() => {
//   const start = (currentPage.value - 1)  * itemsPerPage.value;
//   const end = start + itemsPerPage.value;
//   return allItems.value.slice(start, end);
// })
//
// const pageChange = (pageNum) => {
//   currentPage.value = pageNum
// }
//
// const prevPage = () => {
//   currentPage.value--
// }
//
// const nextPage = () => {
//   currentPage.value++
// }
//
// const getItemsPerPage = () => document.documentElement.clientWidth <= 375 ? 10 : 16
//
// // const per = ref(getItemsPerPage())
//
// const updateItemsPerPage = () => {
//   const newPerPage = getItemsPerPage()
//
//   if (newPerPage !== itemsPerPage.value) {
//     const currentIndex = (currentPage.value - 1) * itemsPerPage.value
//
//     itemsPerPage.value = newPerPage
//
//     if (allItems.value.length > 0) {
//       currentPage.value = Math.min(
//           Math.floor(currentIndex / newPerPage) + 1,
//           totalPages.value
//       )
//     }
//   }
//   if(currentPage.value > totalPages.value) {
//     currentPage.value = totalPages.value
//   }
// }

onMounted(() => {
  // updateItemsPerPage();
  //
  // window.addEventListener('resize', updateItemsPerPage)
  setupResizeListener()
})

onBeforeUnmount(() => {
  // window.removeEventListener('resize', updateItemsPerPage)
  cleanupResizeListener()
})
</script>

<style scoped>
/* ========== СЕКЦИЯ ТОВАРОВ ========== */
.item-page-section {
  padding: 0 32px 120px;
  background-color: #f3f5f7;
}

/* ========== ЗАГОЛОВОК ========== */
.item-page__h2 {
  margin-top: 60px;
  font-size: 36px;
  font-weight: 700;
  color: #002d82;
}

/* ========== КНОПКИ ФИЛЬТРОВ ========== */
.item-page__buttons {
  padding-top: 20px;
  display: flex;
}

.item-page__back-button {
  width: 104px;
  height: 40px;
  background-color: #fff;
  color: #002d82;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

.item-page__back-button:hover {
  background-color: #e1e4ef;
}

.item-page__all-filters-button {
  margin-left: 9px;
  width: 167px;
  height: 40px;
  background-color: #002d82;
  color: #fff;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

.item-page__all-filters-button:hover {
  background-color: #001c50;
}

.item-page__filter-button {
  margin-left: 6px;
  width: 256px;
  height: 40px;
  background-color: #e1e4ef;
  color: #002d82;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

.item-page__filter-button:hover {
  background-color: #cdd0df;
}

/* ========== СЕТКА ТОВАРОВ ========== */
.item-page__content {
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

/* ========== КАРТОЧКА ТОВАРА ========== */
.item-page__item {
  background-color: white;
  padding: 20px;
  transition: transform 0.5s ease;
}

.item-page__item:hover {
  transform: scale(1.2);
  border: 2px solid #e1e4ef;
}

.item-page__item-img {
  width: 282px;
  height: 282px;
}

.item-page__item-name {
  margin-top: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #002d82;
}

.item-page__item-article {
  margin-top: 10px;
  font-size: 16px;
  font-weight: 400;
  color: #7990bd;
}

.item-page__item-prev-price {
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
  color: #7990bd;
  text-decoration: line-through;
}

.item-page__item-curr-price {
  font-size: 30px;
  font-weight: 700;
  color: #18182f;
  line-height: 120%;
}

.item-page__item-more-detailed {
  margin-top: 20px;
  color: #002d82;
  background-color: #e1e4ef;
  width: 100%;
  height: 39px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

.item-page__item-more-detailed:hover {
  background-color: #cdd0df;
}

/* ========== ПАГИНАЦИЯ ========== */
.item-page__keys-block {
  margin: 40px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 338px;
}

.item-page__pages {
  display: flex;
}

.item-page__page {
  height: 34px;
  width: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: #002d82;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: transparent;
}

.item-page__page_active {
  background-color: #e1e4ef;
}

.item-page__left-key,
.item-page__right-key {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: none;
  background-color: #002d82;
  color: #fff;
  cursor: pointer;
}

.item-page__left-key:before {
  position: relative;
  left: 25px;
  display: block;
  content: '';
  width: 10px;
  height: 10px;
  border-bottom: 3px solid white;
  border-left: 3px solid white;
  transform: rotate(45deg);
}

.item-page__right-key:before {
  position: relative;
  left: 21px;
  display: block;
  content: '';
  width: 10px;
  height: 10px;
  border-bottom: 3px solid white;
  border-left: 3px solid white;
  transform: rotate(225deg);
}

/* ========== АДАПТИВ ПЛАНШЕТЫ (768px) ========== */
@media screen and (max-width: 768px) {
  .item-page-section {
    padding: 0 24px 120px;
  }

  .item-page__h2 {
    margin-top: 60px;
    font-size: 36px;
  }

  .item-page__buttons {
    padding-top: 20px;
  }

  .item-page__back-button {
    width: 104px;
    height: 40px;
    font-size: 16px;
  }

  .item-page__all-filters-button {
    width: 167px;
    height: 40px;
    font-size: 16px;
  }

  .item-page__filter-button {
    width: 256px;
    height: 40px;
    font-size: 16px;
  }

  .item-page__content {
    margin-top: 32px;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 24px;
  }

  .item-page__item-name {
    font-size: 20px;
  }

  .item-page__item-curr-price {
    font-size: 30px;
  }

  .item-page__item-more-detailed {
    height: 39px;
    font-size: 16px;
  }

  .item-page__keys-block {
    width: 338px;
  }

  .item-page__page {
    height: 30px;
    width: 30px;
  }

  .item-page__left-key,
  .item-page__right-key {
    width: 40px;
    height: 40px;
  }

  .item-page__left-key:before {
    left: 16px;
    width: 9px;
    height: 9px;
    border-width: 2px;
  }

  .item-page__right-key:before {
    left: 11px;
    width: 9px;
    height: 9px;
    border-width: 2px;
  }
}

/* ========== АДАПТИВ ТЕЛЕФОНЫ (375px) ========== */
@media screen and (max-width: 375px) {
  .item-page-section {
    padding: 0 16px 90px;
  }

  .item-page__h2 {
    margin-top: 60px;
    font-size: 26px;
  }

  .item-page__buttons {
    padding-top: 32px;
  }

  .item-page__back-button {
    width: 82px;
    height: 30px;
    font-size: 14px;
  }

  .item-page__all-filters-button {
    width: 138px;
    height: 30px;
    font-size: 14px;
    margin-left: 9px;
  }

  .item-page__filter-button {
    width: 218px;
    height: 30px;
    font-size: 14px;
    margin-left: 8px;
  }

  .item-page__content {
    margin-top: 16px;
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }

  .item-page__item-img {
    width: 100%;
    height: auto;
  }

  .item-page__item-name {
    font-size: 18px;
  }

  .item-page__item-article {
    font-size: 14px;
  }

  .item-page__item-prev-price {
    margin-top: 32px;
    font-size: 14px;
  }

  .item-page__item-curr-price {
    font-size: 22px;
  }

  .item-page__item-more-detailed {
    height: 37px;
    font-size: 14px;
  }

  .item-page__keys-block {
    width: 234px;
  }

  .item-page__page {
    height: 23px;
    width: 23px;
    font-size: 14px;
  }

  .item-page__left-key,
  .item-page__right-key {
    width: 30px;
    height: 30px;
  }

  .item-page__left-key:before {
    left: 13px;
    width: 6px;
    height: 6px;
  }

  .item-page__right-key:before {
    left: 9px;
    width: 6px;
    height: 6px;
  }
}
</style>
