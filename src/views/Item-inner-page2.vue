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
.item-inner-page2-main {
  background-color: #f3f5f7;
}

.item-div-section {
  background-color: #f3f5f7;
  padding-bottom: 120px;
  border-bottom: 1px solid #7990bd;
}

/* Product page 2 */
.product-page2 {
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 0 32px;
}

.product-page2__img {
  grid-column: 1/2;
  grid-row: 1/4;
  width: 100%;
  height: auto;
}

.product-page2__back-button {
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

.product-page2__header {
  grid-column: 2/3;
  grid-row: 2/3;
  margin-top: 20px;
}

.product-page2__h3 {
  color: #002d82;
  font-size: 36px;
  font-weight: 700;
}

.product-page2__article {
  margin-top: 20px;
  color: #5074b5;
  font-size: 20px;
  font-weight: 400;
}

.product-page2__button-price {
  margin-top: 60px;
  background-color: #ea5a00;
  color: white;
  width: 320px;
  height: 44px;
  font-size: 20px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.product-page2__details-content {
  grid-column: 2/3;
  grid-row: 3/4;
  margin-top: 40px;
}

.product-page2__details-p {
  display: flex;
  height: 60px;
  font-size: 16px;
  font-weight: 500;
  align-items: center;
  border-bottom: 1px solid rgba(121, 144, 189, 0.5);
}

.details-prob {
  font-size: 16px;
  font-weight: 400;
}

.product-page2__details-item {
  border-bottom: 1px solid rgba(121, 144, 189, 0.5);
  position: relative;
  transition: 0.3s;
}

.product-page2__details-item::after {
  top: 25px;
  right: 14px;
  display: block;
  position: absolute;
  content: '';
  width: 10px;
  height: 10px;
  border-right: 2px solid #002d82;
  border-top: 2px solid #002d82;
  transform: rotate(-45deg);
  transition: 0.3s;
}

.product-page2__details-item[open]::after {
  transform: rotate(135deg);
}

.product-page2__details-summary {
  display: flex;
  height: 60px;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

.product-page2__details-text {
  font-size: 16px;
  font-weight: 400;
  line-height: 47px;
  padding-bottom: 10px;
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

/* ========== АДАПТИВ (768px) ========== */
@media screen and (max-width: 768px) {
  .item-div-section {
    padding-bottom: 120px;
  }

  .product-page2 {
    margin-top: 60px;
    gap: 0 24px;
  }

  .product-page2__img {
    grid-column: 1/2;
    grid-row: 2/4;
    width: 348px;
  }

  .product-page2__back-button {
    grid-column: 1/2;
    grid-row: 1/2;
    display: block;
    width: 104px;
    height: 40px;
    margin-bottom: 20px;
  }

  .product-page2__header {
    grid-column: 2/3;
    grid-row: 2/3;
    margin-top: 20px;
  }

  .product-page2__h3 {
    font-size: 36px;
  }

  .product-page2__article {
    margin-top: 20px;
    font-size: 20px;
  }

  .product-page2__button-price {
    margin-top: 60px;
    width: 320px;
    height: 44px;
    font-size: 20px;
  }

  .product-page2__details-content {
    grid-column: 1/3;
    grid-row: 3/4;
    margin-top: 40px;
  }

  .product-page2__details-p {
    font-size: 16px;
  }

  .details-prob {
    font-size: 16px;
  }

  .product-page2__details-summary {
    font-size: 16px;
  }

  .product-page2__details-text {
    font-size: 16px;
    line-height: 47px;
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

/* ========== АДАПТИВ (375px) ========== */
@media screen and (max-width: 375px) {
  .item-div-section {
    padding-bottom: 90px;
  }

  .product-page2 {
    margin-top: 60px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  .product-page2__img {
    margin-top: 16px;
    grid-column: 1/2;
    grid-row: 2/3;
    width: 100%;
  }

  .product-page2__back-button {
    grid-column: 1/2;
    grid-row: 1/2;
    width: 82px;
    height: 30px;
    font-size: 14px;
    margin-bottom: 0;
  }

  .product-page2__header {
    grid-column: 1/2;
    grid-row: 3/4;
    margin-top: 20px;
  }

  .product-page2__h3 {
    font-size: 26px;
  }

  .product-page2__article {
    margin-top: 16px;
    font-size: 18px;
  }

  .product-page2__button-price {
    margin-top: 40px;
    width: 100%;
    height: 42px;
    font-size: 18px;
  }

  .product-page2__details-content {
    grid-column: 1/2;
    grid-row: 4/5;
    margin-top: 40px;
  }

  .product-page2__details-p {
    font-size: 14px;
    height: 60px;
  }

  .details-prob {
    font-size: 14px;
  }

  .product-page2__details-summary {
    font-size: 14px;
  }

  .product-page2__details-text {
    font-size: 14px;
    line-height: 40px;
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
