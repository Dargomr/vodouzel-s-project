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
.item-inner-page-main {
  background-color: #f3f5f7;
}

.item-div-section {
  padding-bottom: 120px;
  border-bottom: 1px solid #7990bd;
}

.item-div-section__product-page {
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 32px;
}

.product-page__img {
  grid-column: 1/2;
  grid-row: 1/5;
  width: 100%;
  height: auto;
}

.product-page__back-button {
  grid-column: 2/3;
  grid-row: 1/2;
  width: 104px;
  height: 40px;
  font-size: 16px;
  font-weight: 500;
  color: #002d82;
  background-color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.product-page__header {
  grid-column: 2/3;
  grid-row: 2/3;
  margin-top: 20px;
}

.product-page__h3 {
  color: #002d82;
  font-size: 36px;
  font-weight: 700;
}

.product-page__article {
  margin-top: 20px;
  color: #5074b5;
  font-size: 20px;
  font-weight: 400;
}

.product-page__price {
  grid-column: 2/3;
  grid-row: 4/5;
  margin-top: 60px;
  margin-bottom: 177px;
}

.product-page__prev-price {
  color: #5074b5;
  font-size: 20px;
  font-weight: 400;
  text-decoration: line-through;
}

.product-page__curr-price {
  color: #18182f;
  font-size: 36px;
  font-weight: 700;
}

.product-page__text {
  grid-column: 2/3;
  grid-row: 3/4;
  margin-top: 60px;
  color: #464659;
  font-size: 16px;
  font-weight: 400;
}

/* Specifications section */
.specifications-section {
  background-color: #f3f5f7;
  padding: 120px 32px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 32px;
}

.specifications-section__h2 {
  position: relative;
  top: -10px;
  font-size: 36px;
  font-weight: 700;
  color: #002d82;
}

.specifications-section__specifications {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px 32px;
}

.specifications-section__specifications__item {
  font-size: 20px;
  font-weight: 400;
  color: #464659;
}

.specifications-section__specifications__item-span {
  font-size: 20px;
  font-weight: 600;
  color: #18182f;
}

/* Адаптив планшеты */
@media screen and (max-width: 768px) {
  .item-div-section {
    padding-bottom: 101px;
  }

  .item-div-section__product-page {
    margin-top: 20px;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 24px;
  }

  .product-page__img {
    grid-column: 1/2;
    grid-row: 2/4;
    width: 348px;
  }

  .product-page__back-button {
    grid-column: 1/3;
    grid-row: 1/2;
    margin-bottom: 20px;
    display: none;
  }

  .product-page__header {
    grid-column: 2/3;
    grid-row: 2/3;
    margin-top: 0;
  }

  .product-page__h3 {
    font-size: 36px;
  }

  .product-page__article {
    margin-top: 20px;
    font-size: 20px;
  }

  .product-page__price {
    grid-column: 2/3;
    grid-row: 3/4;
    margin-bottom: 64px;
    margin-top: 40px;
  }

  .product-page__prev-price {
    font-size: 20px;
  }

  .product-page__curr-price {
    font-size: 36px;
  }

  .product-page__text {
    grid-column: 1/3;
    grid-row: 4/5;
    display: block;
    margin-top: 60px;
    font-size: 16px;
  }

  .specifications-section {
    padding: 120px 24px;
    display: block;
  }

  .specifications-section__h2 {
    font-size: 36px;
    top: 0;
  }

  .specifications-section__specifications {
    margin-top: 32px;
    grid-template-columns: 1fr 1fr;
    gap: 20px 24px;
  }

  .specifications-section__specifications__item {
    font-size: 20px;
  }

  .specifications-section__specifications__item-span {
    font-size: 20px;
  }
}

/* Адаптив телефоны */
@media screen and (max-width: 375px) {
  .item-div-section {
    padding-bottom: 90px;
  }

  .item-div-section__product-page {
    margin-top: 10px;
    grid-template-columns: repeat(1, 1fr);
  }

  .product-page__img {
    grid-row: 2/3;
    width: 100%;
    height: auto;
  }

  .product-page__back-button {
    grid-column: 1/2;
    grid-row: 1/2;
    margin-bottom: 16px;
    display: block;
    width: 82px;
    height: 30px;
    font-size: 14px;
  }

  .product-page__header {
    grid-column: 1/2;
    grid-row: 3/4;
    margin-top: 25px;
  }

  .product-page__h3 {
    font-size: 26px;
  }

  .product-page__article {
    margin-top: 16px;
    font-size: 18px;
  }

  .product-page__price {
    grid-column: 1/2;
    grid-row: 5/6;
    margin-top: 40px;
    margin-bottom: 0;
  }

  .product-page__prev-price {
    font-size: 14px;
  }

  .product-page__curr-price {
    font-size: 26px;
  }

  .product-page__text {
    grid-column: 1/2;
    grid-row: 4/5;
    margin-top: 60px;
    font-size: 14px;
  }

  .specifications-section {
    padding: 90px 16px;
    display: block;
  }

  .specifications-section__h2 {
    font-size: 26px;
  }

  .specifications-section__specifications {
    margin-top: 32px;
    display: block;
  }

  .specifications-section__specifications__item {
    font-size: 18px;
  }

  .specifications-section__specifications__item:not(:first-of-type) {
    margin-top: 8px;
  }

  .specifications-section__specifications__item-span {
    font-size: 18px;
  }
}
</style>
