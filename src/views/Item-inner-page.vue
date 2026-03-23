<template>
  <main class="item-inner-page-main">
    <section class="item-div-section">
      <div class="item-div-section__switch">
        <p class="switch">Главная</p>
        &nbsp;
        <p class="proch">/</p>
        &nbsp;
        <p class="switch">Каталог</p>
        &nbsp;
        <p class="proch">/</p>
        &nbsp;
        <p class="switch">Задвижки</p>
        &nbsp;
        <p class="proch">/</p>
        &nbsp;
        <p class="switch">Задвижки чугунные</p>
        &nbsp;
      </div>
      <!--        <button class="product-page__back-button-1440px">Назад</button>-->
      <!--        <div class="item-div-section__content">-->
      <!--            <img class="item-div-section__img" src="@/assets/img/item-page__item-img.png" alt="item-img">-->
      <!--            <div class="product-page">-->
      <!--                <button class="product-page__back-button">Назад</button>-->
      <!--                <div class="product-page__header">-->
      <!--                    <h3 class="product-page__h3">Задвижка чугунная КНР 30ч39р Ду50 Ру16</h3>-->
      <!--                    <p class="product-page__article">Артикул: <span class="product-page__article-span">123456</span></p>-->
      <!--                </div>-->
      <!--                <p class="product-page__text-1440px-375px">Используется для полного перекрытия или регулирования потока жидкости, газа или других сред в трубопроводах. Отличается высокой прочностью, долговечностью и устойчивостью к коррозии. Подходит для водоснабжения, отопления, канализации и промышленных систем.-->
      <!--                    <br>-->
      <!--                    <br>-->
      <!--                    *цена при заказе от 100 тыс. рублей.</p>-->
      <!--                <div class="product-page__price">-->
      <!--                    <p class="product-page__prev-price">от <span class="product-page__prev-price-span">1 000 ₽</span></p>-->
      <!--                    <p class="product-page__curr-price">от <span class="product-page__cur-price-span">1 000 ₽</span></p>-->
      <!--                </div>-->
      <!--            </div>-->

      <!--        </div>-->
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
          Используется для полного перекрытия или регулирования потока жидкости, газа или других сред в трубопроводах.
          Отличается высокой прочностью, долговечностью и устойчивостью к коррозии. Подходит для водоснабжения,
          отопления, канализации и промышленных систем.
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
        <p class="specifications-section__specifications__item specifications-section__specifications__item2">
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

export default {
  components: { HelpForm },
}
</script>

<style scoped>
@import '@/assets/css/1440px.css';
@import '@/assets/css/768px.css';
@import '@/assets/css/375px.css';
</style>
