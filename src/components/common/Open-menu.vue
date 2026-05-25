<template>
  <nav class="nav">
    <div class="nav__blocks">
      <div class="nav__block">
        <div class="nav__about-company">
          <div class="nav__about-company-title">
            <p class="nav-item">О компании</p>
          </div>
        </div>
        <ul class="nav__ul">
          <li class="nav-li">Услуги</li>
          <li class="nav-li">Документы</li>
        </ul>
      </div>
      <div class="nav__block">
        <p class="nav-item">Статьи</p>
        <p class="nav-item">Контакты</p>
      </div>
    </div>
    <div class="close-button-block">
      <button class="close-button" @click="$emit('close')"></button>
    </div>
  </nav>
  <div class="address">
    <p>г. Санкт-Петербург, ул. Верхняя, 12А</p>
  </div>
</template>

<script setup>
defineEmits(['close'])
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .nav {
    position: relative;
    padding-top: 24px;
  }

  .nav-item {
    font-size: 20px;
    font-weight: bold;
    color: #002d82;
  }

  .nav-li {
    font-size: 14px;
    color: #18182f;
    list-style-type: none;
  }

  .nav__blocks {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .nav__block {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .close-button {
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 4px;
    background: #e1e4ef;
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
