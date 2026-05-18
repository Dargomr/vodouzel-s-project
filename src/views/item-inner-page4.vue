<template>
  <main class="item-page-main">
    <section class="item-page-section">
      <Breadcrumbs
        :breadcrumbs-items="[
          { path: '/', name: 'Главная' },
          { path: '/catalog', name: 'Каталог' },
          { path: '/catalog/gates', name: 'Задвижки' },
          { name: 'Задвижки чугунные' },
        ]"
      />

      <h2 class="item-page__h2">Задвижки чугунные</h2>
      <PaginationProducts
        store="itemPageProductsStore"
        section="itemPage"
        :productItems="paginationStore.itemPageItems"
      />
    </section>
  </main>
</template>

<script setup>
import { usePaginationStore } from '@/stores/PaginationStore.js'
import PaginationProducts from '@/components/common/PaginationProducts.vue'
import Breadcrumbs from '@/components/common/Breadcrumbs.vue'

const paginationStore = usePaginationStore()
</script>

<style scoped>
@import '@/assets/css/1440px.css';
@import '@/assets/css/768px.css';
@import '@/assets/css/375px.css';
</style>
