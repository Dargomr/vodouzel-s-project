<template>
  <header>
    <div class="header-upper">
      <div class="header-location">
        <div class="location-text">г. Санкт-Петербург, ул. Верхняя, 12А</div>
      </div>
      <img class="logo__768px" src="@/assets/img/logo__768px.png" alt="logo">
      <div class="header__menu">
        <ul class="header__nav">
          <li class="header__nav-item header__nav-item1">О компании</li>
          <li class="header__nav-item">Статьи</li>
          <li class="header__nav-item">Контакты</li>
        </ul>
        <div class="header__phone">
          <p class="phone-number">8 987 654-32-10</p>
          <button class="phone-button">Обратный звонок</button>
        </div>
        <div class="catalog-375px">
          <img class="catalog__burger-icon" src="@/assets/img/burger-icon.png" alt="burger-icon">
          <p class="catalog__text">Каталог</p>
        </div>

        <div class="menu-375px">
          <p class="menu__p">Меню</p>
        </div>
      </div>
    </div>
    <div class="header-under">
      <img class="logo" src="@/assets/img/logo.png" alt="logo">
      <!--        <button class="catalog">Каталог</button>-->
      <div class="catalog">
        <img class="catalog__burger-icon" src="@/assets/img/burger-icon.png" alt="burger-icon">
        <p class="catalog__text">Каталог</p>
      </div>
      <input class="search-input" type="text" placeholder="Введите запрос ...">
      <button class="button-search orange-button">Поиск</button>
      <div class="menu-768px">
        <p class="menu__p">Меню</p>
      </div>
      <div class="managers">
        <img class="telegram" src="@/assets/img/tg-icon.png" alt="telegram">
        <img class="whatsApp" src="@/assets/img/wa-icon.png" alt="whatsApp">
      </div>
    </div>
  </header>
</template>

<script>
export default {
name: "AppHeader"
}
</script>

<style scoped>
/*import logo__768px from '@/assets/css/375px.css';*/

@import '@/assets/css/1440px.css';
@import '@/assets/css/768px.css';
@import '@/assets/css/375px.css';
</style>