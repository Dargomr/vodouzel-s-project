<template>
  <main>
    <section class="dealer-section">
      <Breadcrumbs
        :breadcrumbs-items="[
          { path: '/', name: 'Главная' },
          { path: '/catalog', name: 'Каталог' },
          { name: 'Теплосчетчики' },
        ]"
      />

      <div class="dealer-section__content">
        <div class="dealer-section__text-block">
          <h2 class="dealer-section__h2">
            Мы - дилер завода
            <br />
            «Тепловодомер»
          </h2>
          <p class="dealer-section__p">
            Вы получаете не только низкие цены, но и свежий срок поверки счетчиков.
          </p>
        </div>
        <div class="dealer-section__img-block">
          <img
            class="dealer-section__img"
            src="@/assets/img/dealer-section__img.svg"
            alt="dealer-section-img"
          />
        </div>
      </div>
    </section>

    <section class="nodes-carousel-section">
      <h2 class="nodes-carousel-section__h2">Водомерные узлы</h2>
      <ScrollByCarousel :nodesCarouselItems="nodesCarouselItems" />
    </section>

    <PaginationProducts
      class="item-page-section"
      section="heatMeters"
      :productItems="paginationStore.HeatMetersItems"
    />

    <Rename h2="О продукте" name="Теплосчетчики">
      <p class="heatMeters-section__big-text">
        Согласно Федеральному закону № 261 «Об Энергосбережении», с 1 января 2012 года все новые
        многоквартирные дома, которые вводятся в эксплуатацию после строительства или реконструкции,
        должны быть оборудованы индивидуальными приборами учета тепловой энергии (квартирными
        теплосчетчиками).
      </p>
      <p class="heatMeters-section__text">
        Для домов, прошедших капитальный ремонт, установка теплосчетчиков также обязательна при
        наличии технической возможности.
        <br />
        <br />
        Установка квартирных теплосчетчиков предоставляет возможность для реальной экономии и
        стимулирует собственников к внедрению энергоэффективного оборудования и регулированию
        потребления энергии. В домах с установленными квартирными теплосчетчиками расходы на
        отопление оказались на 50% ниже, чем при расчетах по нормативам, что говорит о значительной
        экономии.
        <br />
        <br />
        Важно отметить, что квартирный теплосчетчик можно установить только в системах отопления с
        горизонтальной разводкой и отдельным вводом в квартиру. Для вертикальной (стояковой) системы
        отопления потребуется установка распределителей тепла на каждый радиатор.
        <br />
        <br />
        Теплосчетчик представляет собой систему, состоящую из тепловычислителя, первичного
        преобразователя расхода (расходомера) и двух датчиков температуры.
      </p>
    </Rename>

    <Rename h2="О продукте" name="Тепловычислители">
      <p class="thermal-calculators-section__text">
        Вычислитель предназначен для измерения и коммерческого учета количества тепловой энергии,
        объема и других параметров теплоносителя в закрытых, открытых, открытых тупиковых системах
        теплоснабжения у потребителей тепловой энергии различного назначения: на промышленных
        предприятиях, в жилых кварталах, отдельных социально-бытовых, жилых и сельскохозяйственных
        зданиях.
      </p>
    </Rename>
  </main>
</template>

<script setup>
import { ref } from 'vue'

import PaginationProducts from '@/components/common/PaginationProducts.vue'
import ScrollByCarousel from '@/components/common/ScrollByCarousel.vue'
import { usePaginationStore } from '@/stores/PaginationStore.js'
import Rename from '@/components/common/Rename.vue'
import Breadcrumbs from '@/components/common/Breadcrumbs.vue'

const paginationStore = usePaginationStore()

const nodesCarouselItems = ref([
  { name: 'Одноветочный', number: '01', img: 'src/assets/img/nodes-roster-item__img1.png' },
  { name: 'Одноветочный', number: '01', img: 'src/assets/img/nodes-roster-item__img1.png' },
  { name: 'Одноветочный', number: '01', img: 'src/assets/img/nodes-roster-item__img1.png' },
  { name: 'Одноветочный', number: '01', img: 'src/assets/img/nodes-roster-item__img1.png' },
  { name: 'Одноветочный', number: '01', img: 'src/assets/img/nodes-roster-item__img1.png' },
  { name: 'Одноветочный', number: '01', img: 'src/assets/img/nodes-roster-item__img1.png' },
  { name: 'Одноветочный', number: '01', img: 'src/assets/img/nodes-roster-item__img1.png' },
  { name: 'Одноветочный', number: '01', img: 'src/assets/img/nodes-roster-item__img1.png' },
  { name: 'Одноветочный', number: '01', img: 'src/assets/img/nodes-roster-item__img1.png' },
  { name: 'Одноветочный', number: '01', img: 'src/assets/img/nodes-roster-item__img1.png' },
  { name: 'Одноветочный', number: '01', img: 'src/assets/img/nodes-roster-item__img1.png' },
  { name: 'Одноветочный', number: '01', img: 'src/assets/img/nodes-roster-item__img1.png' },
  { name: 'Одноветочный', number: '01', img: 'src/assets/img/nodes-roster-item__img1.png' },
  { name: 'Одноветочный', number: '01', img: 'src/assets/img/nodes-roster-item__img1.png' },
  { name: 'Одноветочный', number: '01', img: 'src/assets/img/nodes-roster-item__img1.png' },
  { name: 'Одноветочный', number: '01', img: 'src/assets/img/nodes-roster-item__img1.png' },
])
</script>

<style scoped>
/* Dealer section */
.dealer-section {
  background-color: #f3f5f7;
}

.dealer-section__content {
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  background-color: #002d82;
  background-position: center;
  background-size: cover;
}

.dealer-section__text-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.dealer-section__h2 {
  font-size: 36px;
  font-weight: 700;
  color: white;
}

.dealer-section__p {
  font-size: 20px;
  font-weight: 400;
  color: white;
}

.dealer-section__img {
  margin: 10px;
  width: 180px;
  height: 160px;
}

/* Nodes carousel section */
.nodes-carousel-section {
  padding-top: 60px;
  background-color: #f2f2f8;
}

.nodes-carousel-section__h2 {
  font-size: 36px;
  font-weight: 700;
  color: #002d82;
}

/* Heat meters section */
.heatMeters-section {
  padding: 120px 0;
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 32px;
  border-bottom: 1px solid #d9d9d9;
}

.heatMeters-section__type {
  font-size: 16px;
  color: #002d82;
  font-weight: 400;
}

.heatMeters-section__type::before {
  content: url('@/assets/img/orange-circle.png');
  margin-right: 6px;
}

.heatMeters-section__name {
  font-family: 'Manrope', sans-serif;
  margin-top: 10px;
  color: #002d82;
  font-size: 36px;
  font-weight: 700;
}

.heatMeters-section__content {
  display: grid;
  grid-template-columns: 3fr;
}

.heatMeters-section__big-text {
  grid-column: 1/2;
  font-size: 20px;
  font-weight: 400;
  color: #18182f;
}

.heatMeters-section__text {
  grid-column: 1/2;
  margin-top: 32px;
  font-size: 16px;
  font-weight: 400;
  color: #18182f;
}

/* Thermal calculators section */
.thermal-calculators-section {
  background-color: white;
  margin: 120px 0 208px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 32px;
}

.thermal-calculators-section__type {
  font-size: 16px;
  color: #002d82;
  font-weight: 400;
}

.thermal-calculators-section__type::before {
  content: url('@/assets/img/orange-circle.png');
  margin-right: 6px;
}

.thermal-calculators-section__name {
  font-family: 'Manrope', sans-serif;
  margin-top: 10px;
  color: #002d82;
  font-size: 36px;
  font-weight: 700;
}

.thermal-calculators-section__content {
  display: grid;
  grid-template-columns: 3fr;
}

.thermal-calculators-section__text {
  margin-top: 132px;
  grid-column: 1/2;
  font-size: 16px;
  font-weight: 400;
  color: #18182f;
}

/* Адаптив планшеты */
@media screen and (max-width: 768px) {
  .dealer-section__content {
    margin-top: 60px;
    height: 253px;
    padding: 30px;
  }

  .dealer-section__h2 {
    font-size: 36px;
  }

  .dealer-section__p {
    font-size: 20px;
  }

  .dealer-section__img {
    width: 180px;
    height: 160px;
  }

  .nodes-carousel-section {
    padding-top: 60px;
  }

  .nodes-carousel-section__h2 {
    font-size: 36px;
  }

  .heatMeters-section {
    padding: 120px 24px;
    display: block;
  }

  .heatMeters-section__type {
    font-size: 16px;
  }

  .heatMeters-section__name {
    font-size: 36px;
  }

  .heatMeters-section__content {
    margin-top: 40px;
    display: block;
  }

  .heatMeters-section__big-text {
    font-size: 20px;
  }

  .heatMeters-section__text {
    margin-top: 32px;
    font-size: 16px;
  }

  .thermal-calculators-section {
    margin: 120px 0;
    display: block;
  }

  .thermal-calculators-section__type {
    font-size: 16px;
  }

  .thermal-calculators-section__name {
    font-size: 36px;
  }

  .thermal-calculators-section__content {
    margin-top: 40px;
    display: block;
  }

  .thermal-calculators-section__text {
    margin-top: 0;
    font-size: 16px;
  }
}

/* Адаптив телефоны */
@media screen and (max-width: 375px) {
  .dealer-section__content {
    margin-top: 50px;
    flex-direction: column;
    align-items: flex-end;
    padding: 24px;
  }

  .dealer-section__text-block {
    display: block;
  }

  .dealer-section__h2 {
    font-size: 26px;
  }

  .dealer-section__p {
    margin-top: 16px;
    font-size: 14px;
  }

  .dealer-section__img {
    margin: 0;
    width: 67px;
    height: 60px;
  }

  .nodes-carousel-section {
    padding-top: 60px;
  }

  .nodes-carousel-section__h2 {
    font-size: 32px;
  }

  .heatMeters-section {
    padding: 90px 16px 73px;
    display: block;
  }

  .heatMeters-section__type {
    font-size: 16px;
  }

  .heatMeters-section__name {
    font-size: 26px;
  }

  .heatMeters-section__content {
    margin-top: 40px;
    display: block;
  }

  .heatMeters-section__big-text {
    font-size: 18px;
  }

  .heatMeters-section__text {
    margin-top: 32px;
    font-size: 14px;
  }

  .thermal-calculators-section {
    margin: 90px 0;
    display: block;
  }

  .thermal-calculators-section__type {
    font-size: 16px;
  }

  .thermal-calculators-section__name {
    font-size: 26px;
  }

  .thermal-calculators-section__content {
    margin-top: 40px;
    display: block;
  }

  .thermal-calculators-section__text {
    font-size: 16px;
  }
}
</style>
