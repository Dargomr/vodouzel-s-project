<template class="pagination-template">
  <div class="item-page__buttons">
    <button class="item-page__back-button">Назад</button>
    <button class="item-page__all-filters-button">Все фильтры</button>
    <button class="item-page__filter-button">По возрастанию цены</button>
  </div>

  <div class="item-page__content">
    <div v-for="item in displayedItems" class="item-page__item">
      <img class="item-page__item-img" :src="item.img" alt="item-page__item-img">
      <p class="item-page__item-name">{{ item.name }}</p>
      <p class="item-page__item-article">Артикул: <span>{{ item.article }}</span></p>
      <p class="item-page__item-prev-price">от <span>{{ item.prevPrice }}</span> ₽</p>
      <p class="item-page__item-curr-price">от <span>{{ item.currPrice }}</span> ₽</p>
      <button class="item-page__item-more-detailed">Подробнее</button>
    </div>
  </div>

  <div class="item-page__keys-block">
    <button class="item-page__left-key" @click="prevPage" :disabled="currentPage === 1"></button>
    <div class="item-page__pages">
      <button v-for="pageNum in totalPages" :class="{'item-page__page': true, 'item-page__page_active': pageNum === currentPage}" :key="pageNum" @click="goToPage(pageNum)">{{ pageNum }}</button>
    </div>
    <button class="item-page__right-key" @click="nextPage" :disabled="currentPage === totalPages"></button>
  </div>
</template>

<script>

export default {

  name: "Pagination",

  props: {
    productItems: {
      required: true,
      type: Array
    }
  },

  data() {
    return {
      allItems: this.productItems,
      // allItems: [...items].map(e => e.innerText),
      itemsPerPage: 16,
      currentPage: 1,

    }
  },

  computed: {
    totalPages() {
      return Math.ceil(this.allItems.length / this.itemsPerPage)
    },

    displayedItems() {
      const start = (this.currentPage - 1)  * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.allItems.slice(start, end);
    }
  },

  methods: {
    goToPage(pageNum) {
      this.currentPage = pageNum
    },

    prevPage() {
      this.currentPage--
    },

    nextPage() {
      this.currentPage++
    },

    getItemsPerPage() {
      const width = window.clientWidth;
      if (width <= 375) {
        return 10
      } else if (width > 375 ) {
        return 16
      }
    },

    updateItemsPerPage() {
      this.itemsPerPage = this.getItemsPerPage()
    }

  },

  mounted() {
    this.updateItemsPerPage();

    window.addEventListener('resize', this.updateItemsPerPage)
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.updateItemsPerPage)
  }
}
</script>

<style scoped>

</style>