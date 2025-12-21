<template>
  <main>
    <section class="dealer-section">
        <div class="dealer-section__switch">
            <p class="switch">Главная</p> &nbsp;
            <p class="proch">/</p> &nbsp;
            <p class="switch">Каталог</p> &nbsp;
            <p class="proch">/</p> &nbsp;
            <p class="switch">Задвижки</p> &nbsp;
            <p class="proch">/</p> &nbsp;
            <p class="switch">Задвижки чугунные</p> &nbsp;
        </div>

        <div class="dealer-section__content">
            <div class="dealer-section__text-block">
                <h2 class="dealer-section__h2">Мы - дилер завода<br>«Тепловодомер»</h2>
                <p class="dealer-section__p">Вы получаете не только низкие цены, но и свежий срок поверки счетчиков.</p>
            </div>
            <div class="dealer-section__img-block">
                <img class="dealer-section__img" src="@/assets/img/dealer-section__img.svg" alt="dealer-section-img">
            </div>
        </div>
    </section>

    <section class="nodes-carousel-section">
        <h2 class="nodes-carousel-section__h2"></h2>
        <div class="nodes-carousel">
            <div class="nodes-carousel__inner" ref="nodesCarouselInner">
                <div v-for="(item, index) in nodesCarouselItems" :key="index" class="nodes-carousel-item">
                    <div class="nodes-carousel-item__content">
                        <p class="nodes-carousel-item__name">{{ item.name }}</p>
                        <p class="nodes-carousel-item__number">{{ item.number }}</p>
                    </div>
                    <img class="nodes-carousel-item__img" :src="item.img" alt="nodes__roster-item__img">
                </div>
            </div>
        </div>

        <div class="nodes-carousel-section__buttons">
            <button class="nodes-carousel_left-button" @click="prevItem" :disabled="itemIndex === 0"></button>
            <button class="nodes-carousel_right-button" @click="nextItem" :disabled="itemIndex === maxItemIndex"></button>
        </div>
    </section>

    <section class="item-page-section">
      <Pagination :productItems="productItems"/>
    </section>

    <section class="heatMeters-section">
        <div class="heatMeters-section__type-and-name">
            <h2 class="heatMeters-section__type">О продукте</h2>
            <p class="heatMeters-section__name">Теплосчетчики</p>
        </div>

        <div class="heatMeters-section__content">
            <p class="heatMeters-section__big-text">Согласно Федеральному закону № 261 «Об Энергосбережении»,
                с 1 января 2012 года все новые многоквартирные дома, которые вводятся в эксплуатацию после строительства или реконструкции, должны быть оборудованы индивидуальными приборами учета тепловой энергии (квартирными теплосчетчиками). </p>
            <p class="heatMeters-section__text">Для домов, прошедших капитальный ремонт, установка теплосчетчиков также обязательна при наличии технической возможности.
                <br>
                <br>
                Установка квартирных теплосчетчиков предоставляет возможность для реальной экономии и стимулирует собственников к внедрению энергоэффективного оборудования и регулированию потребления энергии. В домах с установленными квартирными теплосчетчиками расходы на отопление оказались на 50% ниже, чем при расчетах по нормативам, что говорит о значительной экономии.
                <br>
                <br>
                Важно отметить, что квартирный теплосчетчик можно установить только
                в системах отопления с горизонтальной разводкой и отдельным вводом в квартиру. Для вертикальной (стояковой) системы отопления потребуется установка распределителей тепла на каждый радиатор.
                <br>
                <br>
                Теплосчетчик представляет собой систему, состоящую из тепловычислителя, первичного преобразователя расхода (расходомера) и двух датчиков температуры.
            </p>
        </div>
    </section>

    <section class="thermal-calculators-section">
        <div class="thermal-calculators-section__type-and-name">
            <p class="thermal-calculators-section__type">О продукте</p>
            <p class="thermal-calculators-section__name">Тепловычислители</p>
        </div>

        <div class="thermal-calculators-section__content">
            <p class="thermal-calculators-section__text">
                Вычислитель предназначен для измерения и коммерческого учета количества тепловой энергии, объема и других параметров теплоносителя в закрытых, открытых, открытых тупиковых системах теплоснабжения у потребителей тепловой энергии различного назначения: на промышленных предприятиях, в жилых кварталах, отдельных социально-бытовых, жилых и сельскохозяйственных зданиях.
            </p>
        </div>
    </section>
</main>
</template>



<script>

import Pagination from '@/components/common/Pagination-products.vue'
import {productItems} from '@/assets/scripts/heatMeters-items.js'

export default {
  components: {Pagination},

  data() {
    return {
      productItems,
      itemIndex: 0,
      nodesCarouselItems: [
        {name: 'Одноветочный', number: '01', img: 'src/assets/img/nodes-roster-item__img1.png'},
        {name: 'Одноветочный', number: '01', img: 'src/assets/img/nodes-roster-item__img1.png'},
        {name: 'Одноветочный', number: '01', img: 'src/assets/img/nodes-roster-item__img1.png'},
        {name: 'Одноветочный', number: '01', img: 'src/assets/img/nodes-roster-item__img1.png'},
        {name: 'Одноветочный', number: '01', img: 'src/assets/img/nodes-roster-item__img1.png'},
      ],
    }
  },
  computed: {
    maxItemIndex() {
      return this.nodesCarouselItems.length - 1
    }
  },

  methods: {
    prevItem() {
      this.$refs.nodesCarouselInner.scrollBy({
        left: 10,
        behavior: 'smooth'

      })
    },

    nextItem() {
      this.$refs.nodesCarouselInner.scrollBy({
        right: 10,
        behavior: 'smooth'
      })
    },


  }
}
</script>


<style scoped>
@import '@/assets/css/1440px.css';
@import '@/assets/css/768px.css';
@import '@/assets/css/375px.css';
</style>