<template>
  <main class="articles-main">
    <section class="articles-section">
      <Breadcrumbs :breadcrumbs-items="[{ path: '/', name: 'Главная' }, { name: 'Статьи' }]" />
      <div class="articles-section__articles">
        <h2 class="articles-section__h2">Статьи</h2>
        <div class="articles-section__content">
          <div class="articles-section__articles-block">
            <div class="article" v-for="article in displayedArticles" :key="article.id">
              <img class="article__img" :src="article.img" alt="article" />
              <p class="article__date">{{ article.date }}</p>
              <p class="article__text">{{ article.text }}</p>
              <p class="article__read">{{ article.read }}</p>
            </div>
          </div>
          <PaginationBlock
            class="item-page__keys-block"
            :total-pages="totalPages"
            :current-page="currentPage"
            @prev-page="prevPage"
            @page-change="pageChange"
            @next-page="nextPage"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { usePaginationStore } from '@/stores/PaginationStore.js'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import PaginationBlock from '@/components/common/PaginationBlock.vue'
import Breadcrumbs from '@/components/common/Breadcrumbs.vue'

const paginationStore = usePaginationStore()

const itemsPerPage = ref(12)
const currentPage = ref(1)

const totalPages = computed(() => {
  return Math.ceil(paginationStore.articlesItems.length / itemsPerPage.value)
})

const displayedArticles = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return paginationStore.articlesItems.slice(start, end)
})

const getItemsPerPage = () => {
  const width = document.documentElement.clientWidth
  return width <= 768 ? 12 : 16
}

const pageChange = (pageNum) => {
  currentPage.value = pageNum
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const updateItemsPerPage = () => {
  itemsPerPage.value = getItemsPerPage()
}

onMounted(() => {
  updateItemsPerPage()

  window.addEventListener('resize', updateItemsPerPage)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateItemsPerPage)
})
</script>

<style scoped>
@import '@/assets/css/1440px.css';
@import '@/assets/css/768px.css';
@import '@/assets/css/375px.css';
</style>
