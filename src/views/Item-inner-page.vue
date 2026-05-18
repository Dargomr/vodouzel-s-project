<template>
  <main class="item-inner-page-main">
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
      <div class="item-div-section__product-page">
        <img class="product-page__img" src="@/assets/img/item-page__item-img.png" alt="item-img" />
        <button class="product-page__back-button">Назад</button>
        <div class="product-page__header">
          <h3 class="product-page__h3">Задвижка чугунная КНР 30ч39р Ду50 Ру16</h3>
          <p class="product-page__article">
            Артикул:
            <span class="product-page__article-span">123456</span>
          </p>
        </div>
        <p class="product-page__text">
          Используется для полного перекрытия или регулирования потока жидкости, газа или других
          сред в трубопроводах. Отличается высокой прочностью, долговечностью и устойчивостью к
          коррозии. Подходит для водоснабжения, отопления, канализации и промышленных систем.
          <br />
          <br />
          *цена при заказе от 100 тыс. рублей.
        </p>
        <div class="product-page__price">
          <p class="product-page__prev-price">
            от
            <span class="product-page__prev-price-span">1 000 ₽</span>
          </p>
          <p class="product-page__curr-price">
            от
            <span class="product-page__cur-price-span">1 000 ₽</span>
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
