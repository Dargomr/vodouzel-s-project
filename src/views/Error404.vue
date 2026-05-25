<template>
  <div class="404-main">
    <section class="error-404-section">
      <Breadcrumbs :breadcrumbs-items="[{ path: '/', name: 'Главная' }, { name: '404' }]" />
      <div class="error-404-content">
        <img class="error-404__logo" src="@/assets/img/404.svg" alt="logo" />
        <p class="error-404__text">
          Страница не найдена,
          <br />
          но можете посмотреть товары в каталоге
        </p>
        <div class="error-404__buttons">
          <router-link to="/catalog" class="in-catalog">В каталог</router-link>
          <router-link to="/" class="in-main">На главную</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Breadcrumbs from '@/components/common/Breadcrumbs.vue'

export default defineComponent({
  components: { Breadcrumbs },
})
</script>

<style scoped>
.error-404-section {
  padding-bottom: 162px;
  background-color: #f2f2f8;
}

.error-404-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error-404__logo {
  margin-top: 130px;
  width: 470px;
  height: 185px;
}

.error-404__text {
  margin-top: 40px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
}

.error-404__buttons {
  margin-top: 60px;
  display: flex;
}

.in-catalog {
  padding-left: 20px;
  background-color: #002d82;
  color: white;
  width: 159px;
  height: 46px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.in-main {
  margin-left: 6px;
  padding-left: 20px;
  background-color: #e1e4ef;
  color: #002d82;
  width: 173px;
  height: 46px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.in-catalog,
.in-main {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
}

.in-catalog:hover {
  background-color: #001c50;
}

.in-main:hover {
  background-color: #cdd0df;
}

/* Адаптив телефоны */
@media screen and (max-width: 375px) {
  .error-404-section {
    padding-bottom: 150px;
  }

  .error-404__logo {
    margin-top: 121px;
    width: 328px;
    height: 129px;
  }

  .error-404__text {
    margin-top: 40px;
    font-size: 14px;
  }

  .error-404__buttons {
    margin-top: 40px;
  }

  .in-catalog {
    width: 132px;
    height: 39px;
  }

  .in-main {
    margin-left: 8px;
    width: 140px;
    height: 39px;
  }
}
</style>
