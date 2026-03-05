<template>
  <main class="item-page-main">
    <section class="item-page-section">
        <div class="item-page-main__switch">
            <p class="switch">Главная</p> &nbsp;
            <p class="proch">/</p> &nbsp;
            <p class="switch">Каталог</p> &nbsp;
            <p class="proch">/</p> &nbsp;
            <p class="switch">Задвижки</p> &nbsp;
            <p class="proch">/</p> &nbsp;
            <p class="switch">Задвижки чугунные</p> &nbsp;
        </div>

        <h2 class="item-page__h2">Задвижки чугунные</h2>
      <PaginationProducts store="itemPageProductsStore" :productItems="ItemPageProductsStore.products"/>
    </section>

</main>
</template>


<script setup>

import {useItemPageProductsStore} from '@/stores/itemPageProductsStore.js'
import PaginationProducts from "@/components/common/PaginationProducts.vue";

const itemPageProductsStore = useItemPageProductsStore();





</script>


<style scoped>
@import '@/assets/css/1440px.css';
@import '@/assets/css/768px.css';
@import '@/assets/css/375px.css';
</style>