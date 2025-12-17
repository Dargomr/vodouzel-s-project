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
        <div class="item-page__buttons">
            <button class="item-page__back-button">Назад</button>
            <button class="item-page__all-filters-button">Все фильтры</button>
            <button class="item-page__filter-button">По возрастанию цены</button>
        </div>

        <div class="item-page__content">
          <div v-for="item in displayedItems" class="item-page__item">
            <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">
            <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>
            <p class="item-page__item-article">Артикул: <span>123456</span></p>
            <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>
            <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>
            <button class="item-page__item-more-detailed">Подробнее</button>
          </div>
<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->

<!--            <div class="item-page__item">-->
<!--                <img class="item-page__item-img" src="@/assets/img/item-page__item-img.png" alt="item-page__item-img">-->
<!--                <p class="item-page__item-name">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p>-->
<!--                <p class="item-page__item-article">Артикул: <span>123456</span></p>-->
<!--                <p class="item-page__item-prev-price">от <span>1 000</span> ₽</p>-->
<!--                <p class="item-page__item-curr-price">от <span>1 000</span> ₽</p>-->
<!--                <button class="item-page__item-more-detailed">Подробнее</button>-->
<!--            </div>-->
        </div>

        <div class="item-page__keys-block">
            <button class="item-page__left-key" @click="prevPage" :disabled="currentPage === 1"></button>
            <div class="item-page__pages">
              <button v-for="pageNum in totalPages" :class="{'item-page__page': true, 'item-page__page_active': pageNum === currentPage}" :key="pageNum" @click="goToPage(pageNum)">{{ pageNum }}</button>
            </div>
            <button class="item-page__right-key" @click="nextPage" :disabled="currentPage === totalPages"></button>
        </div>

    </section>

</main>
</template>


<script>

import { getItemsPerPage, items } from '@/assets/scripts/item-pageVue.js'

// const items = document.getElementsByClassName('item-page__item')

export default {
  data() {
    return {
      allItems: items,
      // allItems: [...items].map(e => e.innerText),
      itemsPerPage: 16,
      currentPage: 1,
    }
  },

  computed: {
    totalPages() {
      return Math.ceil(this.allItems.length / this.itemsPerPage)
    },

    displayedItems() {
      const start = (this.currentPage - 1)  * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.allItems.slice(start, end);
    }
  },

  methods: {
    goToPage(pageNum) {
      this.currentPage = pageNum
    },

    prevPage() {
      this.currentPage--
    },

    nextPage() {
      this.currentPage++
    },

    updateItemsPerPage() {
      this.itemsPerPage = getItemsPerPage()
    }

  },

  mounted() {
    this.updateItemsPerPage();

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