<template>
  <footer>
    <div class="footer-upper">
      <div class="footer-main">
        <div class="footer-main__logo">
          <h2 class="footer-main__logo__h2">ВОДОУЗЕЛ</h2>
          <p class="footer-main__logo__p">
            2002 – 2025 ООО «Водоузел СПБ»
            <br />
            Все права защищены.
          </p>
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
        <p class="footer-address__schedule">
          ПН-ЧТ с 9:00 до 18:00
          <br />
          ПТ с 9:00 до 17:00
        </p>
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
      <p class="footer-lower__p">
        Цены, характеристики и таблицы аналогов продукции на сайте носят исключительно
        <br />
        информационный характер и не являются публичной офертой.
      </p>
      <p class="footer-lower__polit">Политика конфиденциальности</p>
      <p class="footer-lower__develop">Разработка сайта: WolkWork</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style scoped>
footer {
  background: #18182f;
  padding-top: 90px;
  padding-bottom: 90px;
}

.footer-upper {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  column-gap: 33px;
}

.footer-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 33px;
}

.footer-main__logo__h2 {
  font-size: 36px;
  font-weight: 700;
  color: white;
}

.footer-main__logo__p {
  margin-top: 20px;
  color: white;
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
}

.footer-main__nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.footer-main__nav__list1,
.footer-main__nav__list2 {
  list-style: none;
}

.footer-main__nav__list1__item,
.footer-main__nav__list2__item {
  color: white;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  line-height: 120%;
}

.footer-main__nav__list1__item:not(:last-child),
.footer-main__nav__list2__item:not(:last-child) {
  margin-bottom: 20px;
}

.footer-address__text {
  color: white;
  font-size: 20px;
  font-weight: 400;
  line-height: 120%;
}

.footer-address__schedule {
  margin-top: 40px;
  color: #6d6d6d;
  font-size: 16px;
  line-height: 120%;
}

.footer-phone__number {
  font-size: 20px;
  color: white;
  font-weight: 400;
}

.footer-phone__button {
  margin-top: 10px;
  color: white;
  background: #4f4f5f;
  width: 165px;
  height: 30px;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.footer-phone__social {
  margin-top: 40px;
}

.footer-phone__tg,
.footer-phone__wa {
  color: #6d6d6d;
  font-size: 16px;
  cursor: pointer;
  line-height: 120%;
}

.footer-phone__wa {
  margin-top: 10px;
}

.footer-lower {
  margin-top: 60px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  column-gap: 33px;
}

.footer-lower__p {
  font-size: 12px;
  color: #6d6d6d;
  font-weight: 400;
  line-height: 120%;
}

.footer-lower__polit,
.footer-lower__develop {
  color: #6d6d6d;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
  line-height: 120%;
}

/* ========== АДАПТИВ (768px) ========== */
@media screen and (max-width: 768px) {
  .footer-upper {
    padding-top: 90px;
    grid-template-columns: 1fr 1fr;
    gap: 60px 33px;
  }

  .footer-main {
    grid-column: 1/3;
    grid-row: 1/2;
  }

  .footer-address {
    grid-column: 1/2;
    grid-row: 2/3;
  }

  .footer-phone {
    grid-column: 2/3;
    grid-row: 2/3;
  }

  .footer-lower {
    row-gap: 42px;
    grid-template-columns: 1fr 1fr;
  }

  .footer-lower__p {
    grid-column: 1/3;
    grid-row: 2/3;
  }

  .footer-lower__polit {
    grid-column: 1/2;
    grid-row: 1/2;
  }

  .footer-lower__develop {
    grid-column: 2/3;
    grid-row: 1/2;
  }
}

/* ========== АДАПТИВ (375px) ========== */
@media screen and (max-width: 375px) {
  footer {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .footer-upper {
    grid-template-columns: 1fr;
    gap: 40px;
    padding-top: 60px;
  }

  .footer-main {
    grid-column: 1/2;
    grid-row: 1/2;
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .footer-phone {
    grid-column: 1/2;
    grid-row: 2/3;
  }

  .footer-address {
    grid-column: 1/2;
    grid-row: 3/4;
  }

  .footer-main__logo__p {
    font-size: 14px;
  }

  .footer-main__nav__list1__item,
  .footer-main__nav__list2__item {
    font-size: 14px;
  }

  .footer-phone__number {
    font-size: 18px;
  }

  .footer-phone__button {
    font-size: 14px;
  }

  .footer-phone__social {
    margin-top: 32px;
    display: flex;
    align-items: center;
  }

  .footer-phone__tg,
  .footer-phone__wa {
    font-size: 18px;
  }

  .footer-phone__wa {
    margin-left: 20px;
    margin-top: 0;
  }

  .footer-address__text {
    font-size: 14px;
  }

  .footer-address__schedule {
    margin-top: 16px;
    font-size: 14px;
  }

  .footer-lower {
    margin-top: 40px;
    padding-bottom: 0;
  }
}
</style>
