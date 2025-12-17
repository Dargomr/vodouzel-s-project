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

// import { articles } from '@/assets/scripts/articlesVue.js'

export default {
  name: 'ArticlesSection',


  data() {
    return {
      itemsPerPage: 12,
      currentPage: 1,
      allArticles: [
        {
          id: 1,
          img: "/src/assets/img/article1.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 2,
          img: "/src/assets/img/article1.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 3,
          img: "/src/assets/img/article1.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 4,
          img: "/src/assets/img/article1.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 5,
          img: "/src/assets/img/article1.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 6,
          img: "/src/assets/img/article1.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 7,
          img: "/src/assets/img/article1.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 8,
          img: "/src/assets/img/article1.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 9,
          img: "/src/assets/img/article1.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 10,
          img: "/src/assets/img/article1.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 11,
          img: "/src/assets/img/article1.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 12,
          img: "/src/assets/img/article1.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 13,
          img: "/src/assets/img/article1.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 14,
          img: "/src/assets/img/article1.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 15,
          img: "/src/assets/img/article1.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 16,
          img: "/src/assets/img/article1.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 17,
          img: "/src/assets/img/article2.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 18,
          img: "/src/assets/img/article2.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 19,
          img: "/src/assets/img/article2.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 20,
          img: "/src/assets/img/article2.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 21,
          img: "/src/assets/img/article2.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 22,
          img: "/src/assets/img/article2.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 23,
          img: "/src/assets/img/article2.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 24,
          img: "/src/assets/img/article2.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 25,
          img: "/src/assets/img/article2.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 26,
          img: "/src/assets/img/article2.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 27,
          img: "/src/assets/img/article2.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 28,
          img: "/src/assets/img/article2.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 29,
          img: "/src/assets/img/article2.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 30,
          img: "/src/assets/img/article2.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 31,
          img: "/src/assets/img/article2.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 32,
          img: "/src/assets/img/article2.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 33,
          img: "/src/assets/img/article3.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 34,
          img: "/src/assets/img/article3.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 35,
          img: "/src/assets/img/article3.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 36,
          img: "/src/assets/img/article3.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 37,
          img: "/src/assets/img/article3.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 38,
          img: "/src/assets/img/article3.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 39,
          img: "/src/assets/img/article3.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 40,
          img: "/src/assets/img/article3.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 41,
          img: "/src/assets/img/article3.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 42,
          img: "/src/assets/img/article3.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 43,
          img: "/src/assets/img/article3.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 44,
          img: "/src/assets/img/article3.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 45,
          img: "/src/assets/img/article3.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 46,
          img: "/src/assets/img/article3.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 47,
          img: "/src/assets/img/article3.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },
        {
          id: 48,
          img: "/src/assets/img/article3.png",
          date: "01.01.2025",
          text: "Установка водоизмерительного счётчика: кто должен это делать в муниципальной квартире?",
          read: "Читать"
        },

      ],
      // allArticles: this.articles,
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
      const width = window.innerWidth;
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