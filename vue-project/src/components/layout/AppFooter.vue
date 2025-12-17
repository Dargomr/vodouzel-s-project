<template>
  <footer>
    <div class="footer-upper">
      <div class="footer-main">
        <div class="footer-main__logo">
          <h2 class="footer-main__logo__h2">ВОДОУЗЕЛ</h2>
          <p class="footer-main__logo__p">2002 – 2025 ООО «Водоузел СПБ»<br>Все права защищены.</p>
        </div>
        <div class="footer-main__nav">
          <ul class="footer-main__nav__list1">
            <li class="footer-main__nav__list1__item">Каталог</li>
            <li class="footer-main__nav__list1__item">О нас</li>
            <li class="footer-main__nav__list1__item">Услуги</li>
            <li class="footer-main__nav__list1__item">Документы</li>
          </ul>

          <ul class="footer-main__nav__list2">
            <li class="footer-main__nav__list2__item">Статьи</li>
            <li class="footer-main__nav__list2__item">Контакты</li>
          </ul>
        </div>
      </div>

      <div class="footer-address">
        <p class="footer-address__text">г. Санкт-Петербург,ул. Верхняя, 12А</p>
        <p class="footer-address__schedule">ПН-ЧТ с 9:00 до 18:00<br>ПТ с 9:00 до 17:00</p>
      </div>

      <div class="footer-phone">
        <p class="footer-phone__number">8 987 654-32-10</p>
        <button class="footer-phone__button">Обратный звонок</button>
        <div class="footer-phone__social">
          <p class="footer-phone__tg">Telegram</p>
          <p class="footer-phone__wa">WhatsApp</p>
        </div>
      </div>
    </div>



    <div class="footer-lower">
      <p class="footer-lower__p">Цены, характеристики и таблицы аналогов продукции на сайте носят исключительно<br>информационный характер и не являются публичной офертой.</p>
      <p class="footer-lower__polit">Политика конфиденциальности</p>
      <p class="footer-lower__develop">Разработка сайта: WolkWork</p>
    </div>
  </footer>
</template>

<script>
export default {
name: "AppFooter"
}
</script>

<style scoped>
@import '@/assets/css/1440px.css';
@import '@/assets/css/768px.css';
@import '@/assets/css/375px.css';
</style>