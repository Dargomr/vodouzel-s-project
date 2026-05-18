<template>
  <main class="item-inner-page2-main">
    <section class="item-div-section">
      <Breadcrumbs
        :breadcrumbs-items="[
          { path: '/', name: 'Главная' },
          { path: '/catalog', name: 'Каталог' },
          { path: '/catalog/gates', name: 'Задвижки' },
          { path: '/catalog/gates/cast-iron', name: 'Задвижки чугунные' },
          { name: 'Задвижка чугунная КНР 30ч39р Ду50 Ру16' },
        ]"
      />
      <div class="product-page2">
        <img class="product-page2__img" src="@/assets/img/item-page__item-img.png" alt="item-img" />
        <button class="product-page2__back-button">Назад</button>
        <div class="product-page2__header">
          <h3 class="product-page2__h3">
            Одноветочные водомерные узлы с чугунными фасонными частями
          </h3>
          <p class="product-page2__article">
            Артикул:
            <span class="product-page2__article-span">123456</span>
          </p>
          <button class="product-page2__button-price orange-button">Узнать цену</button>
        </div>
        <div class="product-page2__details-content">
          <p class="product-page2__details-p">
            Цена:&nbsp;
            <span class="details-prob">по факту расчета</span>
          </p>
          <p class="product-page2__details-p">
            ДУ ввода:&nbsp;
            <span class="details-prob">от 50 до 300 мм</span>
          </p>
          <details class="product-page2__details-item">
            <summary class="product-page2__details-summary">Сфера применения</summary>
            <p class="product-page2__details-text">
              Холодное или горячее водоснабжение, пожаротушение
            </p>
          </details>

          <details class="product-page2__details-item">
            <summary class="product-page2__details-summary">Гарантийный срок</summary>
            <p class="product-page2__details-text">Сроки</p>
          </details>

          <details class="product-page2__details-item">
            <summary class="product-page2__details-summary">Хранение и транспортирование</summary>
            <p class="product-page2__details-text">Заглушка</p>
          </details>
          <p class="product-page2__details-p">
            Собирается и эксплуатируется без пожарно-резервной линии
          </p>
        </div>
      </div>
    </section>

    <section class="specifications-section">
      <h2 class="specifications-section__h2">Характеристики</h2>
      <div class="specifications-section__specifications">
        <p class="specifications-section__specifications__item">
          Модель:
          <span class="specifications-section__specifications__item-span">30ч6бр</span>
        </p>
        <p
          class="specifications-section__specifications__item specifications-section__specifications__item2"
        >
          Диаметр:
          <span class="specifications-section__specifications__item-span">50 мм</span>
        </p>
        <p class="specifications-section__specifications__item">
          Давление:
          <span class="specifications-section__specifications__item-span">10/16 универсал</span>
        </p>
      </div>
    </section>
    <HelpForm />
  </main>
</template>

<script>
import HelpForm from '@/components/common/HelpForm.vue'
import Breadcrumbs from '@/components/common/Breadcrumbs.vue'

export default {
  components: { Breadcrumbs, HelpForm },
}
</script>

<style scoped>
@import '@/assets/css/1440px.css';
@import '@/assets/css/768px.css';
@import '@/assets/css/375px.css';
</style>
