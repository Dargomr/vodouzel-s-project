<template>
  <header>
    <div class="header-upper">
      <div class="header-location">
        <div class="location-text">г. Санкт-Петербург, ул. Верхняя, 12А</div>
      </div>
      <img class="logo__768px" src="@/assets/img/logo__768px.png" alt="logo" />
      <div class="header__menu">
        <ul class="header__nav">
          <li class="header__nav-item header__nav-item1">
            <a href="/about-company">О компании</a>
          </li>
          <li class="header__nav-item"><a href="/articles">Статьи</a></li>
          <li class="header__nav-item"><a href="/contacts">Контакты</a></li>
        </ul>
        <div class="header__phone">
          <p class="phone-number">8 987 654-32-10</p>
          <button class="phone-button">Обратный звонок</button>
        </div>
        <div class="catalog-375px" @click="openCatalog">
          <img class="catalog__burger-icon" src="@/assets/img/burger-icon.png" alt="burger-icon" />
          <p class="catalog__text">Каталог</p>
        </div>

        <div class="menu-375px">
          <p class="menu__p">Меню</p>
        </div>
      </div>
    </div>
    <div class="header-under">
      <img class="logo" src="@/assets/img/logo.png" alt="logo" />
      <button @click="openCatalog" class="catalog">
        <img class="catalog__burger-icon" src="@/assets/img/burger-icon.png" alt="burger-icon" />
        <p class="catalog__text">Каталог</p>
      </button>
      <input class="search-input" type="text" placeholder="Введите запрос ..." />
      <button class="button-search orange-button">Поиск</button>
      <div class="menu-768px">
        <p class="menu__p">Меню</p>
      </div>
      <div class="managers">
        <img class="telegram" src="@/assets/img/tg-icon.png" alt="telegram" />
        <img class="whatsApp" src="@/assets/img/wa-icon.png" alt="whatsApp" />
      </div>
    </div>
    <div v-if="isCatalogOpen" class="open-catalog-wrapper">
      <Open-catalog @close="closeCatalog" />
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import OpenCatalog from '@/components/common/Open-catalog.vue'

const isCatalogOpen = ref(false)

const openCatalog = () => {
  isCatalogOpen.value = true
  document.body.style.overflow = 'hidden'
  document.body.style.position = 'fixed'
  document.body.style.width = '100%'
}

const closeCatalog = () => {
  isCatalogOpen.value = false
  document.body.style.overflow = ''
  document.body.style.position = ''
  document.body.style.width = ''
}
</script>

<style scoped>
.open-catalog-wrapper {
  position: absolute;
  top: calc(100% + 30px);
  left: 0;
  right: 0;
  z-index: 10;
  background-color: white;
  height: 100vh;
}

/* ========== БАЗОВЫЕ СТИЛИ ШАПКИ ========== */
header {
  position: relative;
  margin-bottom: 30px;
}

/* ========== ВЕРХНЯЯ ЧАСТЬ ШАПКИ ========== */
.header-upper {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.location-text {
  line-height: 30px;
  color: #6d6d6d;
  margin-left: 10px;
}

.location-text::before {
  position: relative;
  left: -10px;
  content: url('@/assets/img/loc-icon.png');
}

.logo__768px {
  display: none;
}

.header__menu {
  display: flex;
}

.header__nav {
  list-style: none;
  display: flex;
  align-items: center;
}

.header__nav-item,
.phone-number,
.phone-button {
  font-size: 16px;
  font-weight: 400;
  color: #18182f;
}

.header__nav-item1 {
  margin-right: 36px;
}

.header__nav-item1::after {
  position: relative;
  right: -6px;
  content: url('@/assets/img/key-down-icon.png');
}

.header__nav-item:not(:first-child) {
  margin-right: 30px;
}

.header__phone {
  display: flex;
  margin-left: 40px;
  align-items: center;
}

.phone-number::before {
  position: relative;
  left: -10px;
  content: url('@/assets/img/phone-icon.png');
}

.phone-button {
  margin-left: 20px;
  width: 170px;
  height: 30px;
  background-color: #e1e4ef;
  border-radius: 100px;
  border: none;
  cursor: pointer;
}

/* ========== НИЖНЯЯ ЧАСТЬ ШАПКИ ========== */
.header-under {
  margin-top: 17px;
  display: flex;
  align-items: center;
}

.logo {
  width: 240px;
  height: 32px;
}

.catalog {
  margin-left: 20px;
  padding: 0 20px;
  width: 128px;
  height: 48px;
  background-color: #002d82;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
}

.catalog__burger-icon {
  width: 14px;
  height: 10px;
}

.catalog__text {
  margin-left: 10px;
  color: white;
}

.search-input {
  margin-left: 32px;
  width: 100%;
  padding-left: 16px;
  height: 48px;
  color: #6d6d6d;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
}

.button-search {
  margin-left: 10px;
  padding: 0 20px;
  height: 48px;
  width: 115px;
  background-color: #ea5a00;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button-search::before {
  position: relative;
  left: -10px;
  content: url('@/assets/img/search-icon.png');
}

.managers {
  display: flex;
  margin-left: 32px;
}

.telegram {
  width: 48px;
  height: 48px;
  cursor: pointer;
}

.whatsApp {
  margin-left: 4px;
  width: 48px;
  height: 48px;
  cursor: pointer;
}

.menu-768px,
.menu-375px,
.catalog-375px {
  display: none;
}

/* ========== АДАПТИВ (768px) ========== */
@media screen and (max-width: 768px) {
  .open-catalog-wrapper {
    top: calc(100% + 12px);
  }

  header {
    margin-bottom: 12px;
  }

  .header-location {
    display: none;
  }

  .header__nav {
    display: none;
  }

  .header-upper {
    height: 30px;
  }

  .logo__768px {
    display: block;
    height: 27px;
  }

  .logo {
    display: none;
  }

  .header-under {
    margin-top: 12px;
    height: 38px;
  }

  .catalog {
    margin-left: 10px;
    height: 38px;
    width: auto;
    padding: 0 16px;
  }

  .search-input {
    height: 38px;
    margin-left: 10px;
  }

  .menu-768px {
    margin-left: 10px;
    width: 78px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e1e4ef;
    border-radius: 4px;
    cursor: pointer;
  }

  .menu-768px .menu__p {
    margin: 0 16px;
  }

  .button-search {
    height: 38px;
  }

  .managers {
    margin-left: 10px;
  }

  .telegram,
  .whatsApp {
    width: 38px;
    height: 38px;
  }
}

/* ========== АДАПТИВ (375px) ========== */
@media screen and (max-width: 375px) {
  .open-catalog-wrapper {
    top: calc(100% + 14px);
  }

  header {
    margin-bottom: 14px;
  }

  .logo__768px {
    height: 18px;
  }

  .header__phone {
    display: none;
  }

  .catalog-375px {
    width: 103px;
    height: 30px;
    margin-left: 20px;
    padding: 0 20px;
    background-color: #002d82;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
  }

  .menu-375px {
    margin-left: 4px;
    width: 65px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e1e4ef;
    border-radius: 4px;
    cursor: pointer;
  }

  .header-under {
    display: flex;
    justify-content: space-between;
    margin-top: 9px;
  }

  .catalog {
    display: none;
  }

  .menu-768px {
    display: none;
  }

  .managers {
    display: none;
  }

  .search-input {
    margin-left: 0;
    height: 36px;
  }

  .button-search {
    margin-left: 4px;
    font-size: 0;
    width: 42px;
    height: 36px;
    padding: 0;
  }

  .button-search::before {
    left: 0;
  }
}

/* ========== ОБЩИЕ КНОПКИ ========== */
.orange-button {
  background-color: #ea5a00;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}

.orange-button:active {
  background-color: #cd3700;
}
</style>
