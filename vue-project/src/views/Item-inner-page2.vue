<template>
  <main class="item-inner-page2-main">
    <section class="item-div-section">
        <div class="item-div-section__switch">
            <p class="switch">Главная</p> &nbsp;
            <p class="proch">/</p> &nbsp;
            <p class="switch">Каталог</p> &nbsp;
            <p class="proch">/</p> &nbsp;
            <p class="switch">Задвижки</p> &nbsp;
            <p class="proch">/</p> &nbsp;
            <p class="switch">Задвижки чугунные</p> &nbsp;
            <p class="proch">/</p> &nbsp;
            <p class="switch">Задвижка чугунная КНР 30ч39р Ду50 Ру16</p> &nbsp;
        </div>
        <div class="product-page2">
            <img class="product-page2__img" src="@/assets/img/item-page__item-img.png" alt="item-img">
            <button class="product-page2__back-button">Назад</button>
            <div class="product-page2__header">
                <h3 class="product-page2__h3">Одноветочные водомерные узлы с чугунными фасонными частями</h3>
                <p class="product-page2__article">Артикул: <span class="product-page2__article-span">123456</span></p>
                <button class="product-page2__button-price orange-button">Узнать цену</button>
            </div>
            <div class="product-page2__details-content">
                        <p class="product-page2__details-p">Цена:&nbsp;<span class="details-prob">по факту расчета</span></p>
                        <p class="product-page2__details-p">ДУ ввода:&nbsp;<span class="details-prob">от 50 до 300 мм</span></p>
                        <details class="product-page2__details-item">
                            <summary class="product-page2__details-summary">Сфера применения</summary>
                            <p class="product-page2__details-text">Холодное или горячее водоснабжение, пожаротушение</p>
                        </details>

                        <details class="product-page2__details-item">
                            <summary class="product-page2__details-summary">Гарантийный срок</summary>
                            <p class="product-page2__details-text">Сроки</p>
                        </details>

                        <details class="product-page2__details-item">
                            <summary class="product-page2__details-summary">Хранение и транспортирование</summary>
                            <p class="product-page2__details-text">Заглушка</p>
                        </details>
                        <p class="product-page2__details-p">Собирается и эксплуатируется без пожарно-резервной линии</p>
                    </div>
        </div>
    </section>

    <section class="specifications-section">
        <h2 class="specifications-section__h2">Характеристики</h2>
        <div class="specifications-section__specifications">
            <p class="specifications-section__specifications__item">Модель: <span class="specifications-section__specifications__item-span">30ч6бр</span></p>
            <p class="specifications-section__specifications__item specifications-section__specifications__item2">Диаметр: <span class="specifications-section__specifications__item-span">50 мм</span></p>
            <p class="specifications-section__specifications__item">Давление: <span class="specifications-section__specifications__item-span">10/16 универсал</span></p>
        </div>
    </section>

    <section class="help-section">
        <div class="help-section__texts">
            <h2 class="help-section__h2">Нужна помощь? Не знаете<br>подойдут ли комплектующие<br>для вашего проекта?</h2>
            <p class="help-section__text">Оставьте заявку на бесплатную<br>консультацию</p>
        </div>
        <form class="help-form">
            <div class="help-form__text-input">
                <div class="help-form__text-username-item">
                    <label class="help-form__username-label" for="help-form__username">Имя:</label>
                    <input class="help-form__username-input" id="help-form__username" type="text" placeholder="Иванов Иван" />
                </div>

                <div class="help-form__text-phone-item">
                    <label class="help-form__phone-label" for="help-form__phone">Телефон:</label>
                    <input class="help-form__phone-input" id="help-form__phone" type="number" placeholder="+7 ( ___ ) - ___ - __ - __" />
                </div>
            </div>
            <div class="help-form__submit-element">
                <input class="help-form__submit orange-button" type="submit" value="Оставить заявку"/>
                <label class="help-form__submit-text">Нажимая кнопку, вы соглашаетесь<br>с условиями политики конфиденциальности</label>
            </div>
        </form>
    </section>

</main>
</template>


<script>

</script>


<style scoped>
@import '@/assets/css/1440px.css';
@import '@/assets/css/768px.css';
@import '@/assets/css/375px.css';
</style>