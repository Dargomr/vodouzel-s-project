<template>
  <main class="about-company-main">
    <section class="catalog-about-company-section">
      <div class="catalog-about-company__switch">
        <p class="main-switch">Главная</p>
        &nbsp;
        <p class="proch">/</p>
        &nbsp;
        <p class="about-company-switch">Контакты</p>
      </div>
      <img
        class="catalog-about-company-section__logo"
        src="@/assets/img/vodouzel.png"
        alt="vodouzel"
      />
      <div class="catalog-about-company-section__text">
        <h3 class="catalog-about-company-section__h3">
          Наша компания занимается оптовой и розничной продажей трубопроводной арматуры
        </h3>
        <p class="catalog-about-company-section__also">
          А так же продажей материалов для инженерных коммуникаций, контрольно-измерительных
          приборов, автоматики и реализацией пожарного оборудования.
        </p>
      </div>
      <img
        class="catalog-about-company-section__img"
        src="@/assets/img/about-company-section.png"
        alt="about-company-section"
      />
      <p class="catalog-about-company-section__p">
        <span class="catalog-about-company-section__black-p">
          Любое оборудование, приобретенное у нас имеет все необходимые сертификаты качества и
          гарантию, определенную для него заводом-изготовителем.
        </span>
        <br />
        <br />
        Сотрудничая с нами, Вы получаете качественное и недорогое оборудование. Также мы комплектуем
        водомерные узлы по альбому ЦИРВ02А.00.00.00 для сдачи представителям Водоканала.
        <br />
        <br />
        Прочно отработанные связи с предприятиями-изготовителями позволяют нам оперативно
        реагировать на потребности и нужды наших клиентов, что благотворно сказывается на взаимном
        плодотворном сотрудничестве. Так же при приобретении оборудования в нашей компании
        предусмотрены различные скидки и бонусы.
      </p>
    </section>

    <Rename name="Среди наших услуг Вы найдете" h2="Услуги и клиенты">
      <div class="services-section__content">
        <CardTiles section="aboutCompanyOurServices"></CardTiles>
        <p class="services-section__p">
          Мы организуем поставку любого оборудования широкого спектра производителей - отечественных
          и иностранных. Гарантией качества здесь является не только гарантийный талон, но и бренд
          производителя.
        </p>
      </div>
    </Rename>

    <Rename black-title="Наши клиенты">
      <div class="clients-section__content">
        <p class="clients-section__p">
          <span class="clients-section__fat-p">Компания «Водоузел СПБ» на рынке с 2002 года.</span>
          <br />
          <br />
          Более 23 лет опыта позволяет нам реализовывать самые разные проекты начиная от работы с
          лучшими застройщиками Санкт-Петербурга и ЛО до работы с государственными структурами, а
          также с компаниями из стран СНГ (Беларусь, Казахстан).
        </p>
        <CardTiles section="aboutCompanyOurClients"></CardTiles>
      </div>
    </Rename>

    <Rename
      :isCarousel="true"
      :withH2="true"
      h2="Документы"
      name="Наши сертификаты"
      section="aboutCompanyCertification"
    >
      <Carousel
        section="aboutCompanyCertification"
        carousel-class="certification-item__img-block"
        carousel-class-inner="certification-item__img'"
      />
    </Rename>
  </main>
</template>

<script setup>
import Rename from '@/components/common/Rename.vue'
import Carousel from '@/components/common/Carousel.vue'
import CardTiles from '@/components/common/CardTiles.vue'
</script>

<style scoped>
@import '@/assets/css/1440px.css';
@import '@/assets/css/768px.css';
@import '@/assets/css/375px.css';
</style>
