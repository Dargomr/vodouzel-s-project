<template>
  <main class="main-catalog__main">
    <Breadcrumbs :breadcrumbs-items="[{ path: '/', name: 'Главная' }, { name: 'Каталог' }]" />
    <section class="feature-section">
      <p class="feature-text">
        Сертифицированная
        <br />
        продукция
      </p>
      <p class="feature-text">
        Доставка по всей России
        <br />
        и странам СНГ
      </p>
    </section>

    <section class="main-catalog-content">
      <div class="main-catalog-item" @click="goToPage('/catalog/nodes')">
        <div class="main-catalog-item__content">
          <p class="main-catalog-item__name">
            Водомерные
            <br />
            узлы
          </p>
          <p class="main-catalog-item__number">01</p>
        </div>
        <img
          class="main-catalog-item__img"
          src="@/assets/img/main-catalog-item__img1.png"
          alt="main-catalog-item__img"
        />
      </div>

      <div class="main-catalog-item">
        <div class="main-catalog-item__content">
          <p class="main-catalog-item__name">
            Счетчики
            <br />
            воды
          </p>
          <p class="main-catalog-item__number">02</p>
        </div>
        <img
          class="main-catalog-item__img"
          src="@/assets/img/main-catalog-item__img2.png"
          alt="main-catalog-item__img"
        />
      </div>

      <div class="main-catalog-item" @click="goToPage('/catalog/heat-meters')">
        <div class="main-catalog-item__content">
          <p class="main-catalog-item__name">
            Счетчики
            <br />
            тепла
          </p>
          <p class="main-catalog-item__number">03</p>
        </div>
        <img
          class="main-catalog-item__img"
          src="@/assets/img/main-catalog-item__img3.png"
          alt="main-catalog-item__img"
        />
      </div>

      <div class="main-catalog-item">
        <div class="main-catalog-item__content">
          <p class="main-catalog-item__name">
            Контрольно-
            <br />
            измерительные
            <br />
            приборы
          </p>
          <p class="main-catalog-item__number">04</p>
        </div>
        <img
          class="main-catalog-item__img"
          src="@/assets/img/main-catalog-item__img4.png"
          alt="main-catalog-item__img"
        />
      </div>

      <div class="main-catalog-item" @click="goToPage('/catalog/gates/cast-iron-gates')">
        <div class="main-catalog-item__content">
          <p class="main-catalog-item__name">Задвижки</p>
          <p class="main-catalog-item__number">05</p>
        </div>
        <img
          class="main-catalog-item__img"
          src="@/assets/img/main-catalog-item__img5.png"
          alt="main-catalog-item__img"
        />
      </div>

      <div class="main-catalog-item">
        <div class="main-catalog-item__content">
          <p class="main-catalog-item__name">Затворы</p>
          <p class="main-catalog-item__number">06</p>
        </div>
        <img
          class="main-catalog-item__img"
          src="@/assets/img/main-catalog-item__img6.png"
          alt="main-catalog-item__img"
        />
      </div>

      <div class="main-catalog-item">
        <div class="main-catalog-item__content">
          <p class="main-catalog-item__name">
            Шаровые
            <br />
            краны
          </p>
          <p class="main-catalog-item__number">07</p>
        </div>
        <img
          class="main-catalog-item__img"
          src="@/assets/img/main-catalog-item__img7.png"
          alt="main-catalog-item__img"
        />
      </div>

      <div class="main-catalog-item">
        <div class="main-catalog-item__content">
          <p class="main-catalog-item__name">
            Детали
            <br />
            трубопровода
          </p>
          <p class="main-catalog-item__number">08</p>
        </div>
        <img
          class="main-catalog-item__img"
          src="@/assets/img/main-catalog-item__img8.png"
          alt="main-catalog-item__img"
        />
      </div>

      <div class="main-catalog-item">
        <div class="main-catalog-item__content">
          <p class="main-catalog-item__name">Фильтры</p>
          <p class="main-catalog-item__number">09</p>
        </div>
        <img
          class="main-catalog-item__img"
          src="@/assets/img/main-catalog-item__img9.png"
          alt="main-catalog-item__img"
        />
      </div>

      <div class="main-catalog-item">
        <div class="main-catalog-item__content">
          <p class="main-catalog-item__name">
            Электроприводы
            <br />
            и шкафы
            <br />
            управления
          </p>
          <p class="main-catalog-item__number">10</p>
        </div>
        <img
          class="main-catalog-item__img"
          src="@/assets/img/main-catalog-item__img10.png"
          alt="main-catalog-item__img"
        />
      </div>

      <div class="main-catalog-item">
        <div class="main-catalog-item__content">
          <p class="main-catalog-item__name">Фланцы</p>
          <p class="main-catalog-item__number">11</p>
        </div>
        <img
          class="main-catalog-item__img"
          src="@/assets/img/main-catalog-item__img11.png"
          alt="main-catalog-item__img"
        />
      </div>

      <div class="main-catalog-item">
        <div class="main-catalog-item__content">
          <p class="main-catalog-item__name">Клапаны</p>
          <p class="main-catalog-item__number">12</p>
        </div>
        <img
          class="main-catalog-item__img"
          src="@/assets/img/main-catalog-item__img12.png"
          alt="main-catalog-item__img"
        />
      </div>

      <div class="main-catalog-item">
        <div class="main-catalog-item__content">
          <p class="main-catalog-item__name">Вентили</p>
          <p class="main-catalog-item__number">13</p>
        </div>
        <img
          class="main-catalog-item__img"
          src="@/assets/img/main-catalog-item__img13.png"
          alt="main-catalog-item__img"
        />
      </div>

      <div class="main-catalog-item main-catalog-item_green">
        <div class="main-catalog-item__content">
          <p class="main-catalog-item__name">НЬЮТОН</p>
          <p class="main-catalog-item__number">14</p>
        </div>
        <img
          class="main-catalog-item__img"
          src="@/assets/img/main-catalog-item__img14.png"
          alt="main-catalog-item__img"
        />
      </div>

      <div class="main-catalog-item main-catalog-item_red">
        <div class="main-catalog-item__content">
          <p class="main-catalog-item__name">
            Пожарное
            <br />
            оборудование
          </p>
          <p class="main-catalog-item__number">15</p>
        </div>
        <img
          class="main-catalog-item__img"
          src="@/assets/img/main-catalog-item__img15.png"
          alt="main-catalog-item__img"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Breadcrumbs from '@/components/common/Breadcrumbs.vue'

const router = useRouter()

const goToPage = (path) => {
  router.push(path)
}
</script>

<style scoped>
.main-catalog__main {
  background-color: #f3f5f7;
  padding-bottom: 120px;
}

/* Feature section */
.feature-section {
  margin: 60px 32px 0;
  height: 160px;
  background-image: url('@/assets/img/feature-section-back.png');
  background-position: center 100%;
  display: flex;
  padding: 30px;
}

.feature-text {
  font-size: 20px;
  font-weight: 600;
  color: white;
}

.feature-text::before {
  content: url('@/assets/img/feature-text-before.png');
  position: relative;
  left: -10px;
}

.feature-text:not(:first-of-type) {
  margin-left: 28px;
}

/* Catalog grid */
.main-catalog-content {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.main-catalog-item {
  display: flex;
  height: 200px;
  justify-content: space-between;
  background-color: white;
  border-radius: 4px;
  transition: transform 0.5s ease;
  cursor: pointer;
}

.main-catalog-item:hover {
  transform: scale(1.2);
  border: 2px solid #e1e4ef;
}

.main-catalog-item_green {
  background-color: #090;
}

.main-catalog-item_green .main-catalog-item__name {
  color: #fff;
}

.main-catalog-item_green .main-catalog-item__number {
  color: #fff;
  opacity: 0.5;
}

.main-catalog-item_red {
  background-color: #b80c0c;
}

.main-catalog-item_red .main-catalog-item__name {
  color: #fff;
}

.main-catalog-item_red .main-catalog-item__number {
  color: #fff;
  opacity: 0.5;
}

.main-catalog-item__content {
  margin: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.main-catalog-item__name {
  font-size: 16px;
  font-weight: 500;
  color: #002d82;
}

.main-catalog-item__number {
  font-size: 20px;
  font-weight: 400;
  color: #7990bd;
}

.main-catalog-item__img {
  height: 100%;
}

/* Адаптив планшеты */
@media screen and (max-width: 768px) {
  .main-catalog__main {
    padding-bottom: 120px;
  }

  .feature-section {
    margin: 60px 24px 0;
    height: 160px;
    padding: 30px;
  }

  .feature-text {
    font-size: 20px;
  }

  .feature-text:not(:first-of-type) {
    margin-left: 28px;
  }

  .main-catalog-content {
    margin-top: 40px;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  .main-catalog-item {
    height: 200px;
  }

  .main-catalog-item__name {
    font-size: 16px;
  }

  .main-catalog-item__number {
    font-size: 20px;
  }
}

/* Адаптив телефоны */
@media screen and (max-width: 375px) {
  .main-catalog__main {
    padding-bottom: 90px;
  }

  .feature-section {
    margin: 40px 16px 0;
    height: 148px;
    flex-direction: column;
    padding: 20px;
  }

  .feature-text {
    font-size: 18px;
  }

  .feature-text::before {
    left: -14px;
  }

  .feature-text:not(:first-of-type) {
    margin-left: 0;
    margin-top: 20px;
  }

  .main-catalog-content {
    margin-top: 32px;
    grid-template-columns: repeat(1, 1fr);
    gap: 16px 0;
  }

  .main-catalog-item {
    height: 160px;
  }

  .main-catalog-item__name {
    font-size: 14px;
  }

  .main-catalog-item__number {
    font-size: 18px;
  }
}
</style>
