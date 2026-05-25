<template>
  <main class="articles-main">
    <Breadcrumbs :breadcrumbs-items="[{ path: '/', name: 'Главная' }, { name: 'Статьи' }]" />
    <section class="articles-section">
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
.articles-main {
  background-color: #f2f2f8;
}

.articles-section {
  padding-top: 20px;
  padding-bottom: 120px;
}

.articles-section__articles {
  margin-top: 60px;
}

.articles-section__h2 {
  font-size: 40px;
  font-weight: 500;
  color: #002d82;
}

.articles-section__content {
  margin-top: 40px;
}

.articles-section__articles-block {
  width: 100%;
  display: grid;
  gap: 60px 32px;
  grid-template-columns: repeat(4, 1fr);
}

.article {
  width: 100%;
  transition: transform 0.5s;
}

.article:hover {
  transform: scale(1.2);
  border: 2px solid #e1e4ef;
}

.article__img {
  width: 100%;
  height: 200px;
}

.article__date {
  margin-top: 20px;
  font-size: 12px;
  color: #6d6d6d;
  font-weight: 400;
}

.article__text {
  margin-top: 8px;
  font-size: 16px;
  font-weight: 500;
  color: #002d82;
}

.article__read {
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;
  color: #18182f;
}

.article__read::after {
  content: url('@/assets/img/diag-arrow-blue.png');
  position: relative;
  right: -6px;
}

/* Стили для пагинации */
.item-page__keys-block {
  margin: 40px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 338px;
}

/* Адаптив планшеты */
@media screen and (max-width: 768px) {
  .articles-section {
    padding-bottom: 120px;
  }

  .articles-section__articles {
    margin-top: 60px;
  }

  .articles-section__h2 {
    font-size: 40px;
    font-weight: 500;
  }

  .articles-section__content {
    margin-top: 40px;
  }

  .articles-section__articles-block {
    gap: 40px 24px;
    grid-template-columns: repeat(2, 1fr);
  }

  .article__img {
    height: 200px;
  }

  .article__date {
    font-size: 12px;
  }

  .article__text {
    font-size: 16px;
  }

  .article__read {
    font-size: 16px;
  }

  .item-page__keys-block {
    width: 338px;
  }
}

/* Адаптив телефоны */
@media screen and (max-width: 375px) {
  .articles-section {
    padding-bottom: 90px;
  }

  .articles-section__articles {
    margin-top: 60px;
  }

  .articles-section__h2 {
    font-size: 26px;
    font-weight: 700;
  }

  .articles-section__content {
    margin-top: 40px;
  }

  .articles-section__articles-block {
    gap: 40px 24px;
    grid-template-columns: repeat(1, 1fr);
  }

  .article__img {
    height: 200px;
  }

  .article__date {
    font-size: 14px;
  }

  .article__text {
    font-size: 14px;
  }

  .article__read {
    font-size: 14px;
  }

  .item-page__keys-block {
    width: 234px;
  }
}
</style>
