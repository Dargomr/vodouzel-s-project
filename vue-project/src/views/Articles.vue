<template>
  <main class="articles-main">
      <section class="articles-section">
          <div class="articles-section__switch">
              <p class="main-switch">Главная</p> &nbsp;
              <p class="proch">/</p> &nbsp;
              <p class="articles-switch">Контакты</p>
          </div>
          <div class="articles-section__articles">
              <h2 class="articles-section__h2">Статьи</h2>
              <div class="articles-section__content">
                      <div class="articles-section__articles-block">
                        <div class="article" v-for="article in displayedArticles" :key="article.id">
                          <img class="article__img" :src="article.img" alt="article">
                          <p class="article__date">{{ article.date }}</p>
                          <p class="article__text">{{ article.text }}</p>
                          <p class="article__read">{{ article.read }}</p>
                        </div>

                      </div>
                  <div class="articles-section__keys-block">
                      <button class="articles-section__left-key" @click="prevPage" :disabled="currentPage === 1"></button>

                      <div class="articles-section__pages">
                        <button :class="{'articles-section__page' : true, 'articles-section__page_active': pageNum === currentPage}" v-for="pageNum in totalPages" :key="pageNum" @click="goToPage(pageNum)">{{ pageNum }}</button>
                      </div>

                      <button class="articles-section__right-key" @click="nextPage" :disabled="currentPage === totalPages"></button>
                  </div>
              </div>
          </div>
      </section>
  </main>
</template>



<script>

import { articles } from '@/assets/scripts/articles-items.js'

export default {
  name: 'ArticlesSection',


  data() {
    return {
      itemsPerPage: 12,
      currentPage: 1,
      allArticles: articles,
    }
  },

  computed: {
    totalPages() {
      return Math.ceil(this.allArticles.length / this.itemsPerPage);
    },

    displayedArticles() {
      const start = (this.currentPage - 1) * (this.itemsPerPage)
      const end = start + this.itemsPerPage;
      return this.allArticles.slice(start, end)
    }
  },

  methods: {

    getItemsPerPage() {
      const width = window.clientWidth;
      if (width <= 375) {
        return 12
      } else if (width > 375 && width <= 768) {
        return 12
      } else if (width > 768) {
        return 16
      }
    },

    goToPage(pageNum) {
      this.currentPage = pageNum
    },

    nextPage() {
      if ( this.currentPage <  this.totalPages) {
        this.currentPage++
      }
    },

    prevPage() {
      if ( this.currentPage >  1) {
        this.currentPage--
      }
    },

    updateItemsPerPage() {
      this.itemsPerPage = this.getItemsPerPage()
    }
  },

  mounted() {
    this.updateItemsPerPage()

    window.addEventListener('resize', this.updateItemsPerPage)
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.updateItemsPerPage)
  }
}

</script>


<style scoped>
@import '@/assets/css/1440px.css';
@import '@/assets/css/768px.css';
@import '@/assets/css/375px.css';
</style>