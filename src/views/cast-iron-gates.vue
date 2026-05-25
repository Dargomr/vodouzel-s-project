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
.item-page-main {
  background-color: #f3f5f7;
  padding-bottom: 120px;
}

.item-page-section {
  background-color: #f3f5f7;
}

.item-page__h2 {
  margin-top: 60px;
  font-size: 36px;
  font-weight: 700;
  color: #002d82;
}

/* Кнопки фильтров */
.item-page__buttons {
  margin-top: 20px;
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

/* Сетка товаров */
.item-page__content {
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

/* Карточка товара */
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
  width: 100%;
  height: auto;
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

/* Пагинация */
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
}

.item-page__page_active {
  background-color: #e1e4ef;
}

/* Адаптив планшеты */
@media screen and (max-width: 768px) {
  .item-page-main {
    padding-bottom: 120px;
  }

  .item-page__h2 {
    margin-top: 60px;
    font-size: 36px;
  }

  .item-page__buttons {
    margin-top: 20px;
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

  .item-page__keys-block {
    width: 338px;
  }

  .item-page__page {
    height: 30px;
    width: 30px;
  }
}

/* Адаптив телефоны */
@media screen and (max-width: 375px) {
  .item-page-main {
    padding-bottom: 90px;
  }

  .item-page__h2 {
    margin-top: 60px;
    font-size: 26px;
  }

  .item-page__buttons {
    margin-top: 32px;
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
}
</style>
