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
@import '@/assets/css/1440px.css';
@import '@/assets/css/768px.css';
@import '@/assets/css/375px.css';
</style>
