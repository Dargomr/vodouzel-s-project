<template>
  <main class="about-company-main">
    <Breadcrumbs
      bgGray
      :breadcrumbs-items="[{ path: '/', name: 'Главная' }, { name: 'О компании' }]"
    />
    <section class="catalog-about-company-section">
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
import Breadcrumbs from '@/components/common/Breadcrumbs.vue'
</script>

<style scoped>
.catalog-about-company-section {
  background-color: #f2f2f8;
  padding-top: 20px;
  padding-bottom: 120px;
}

.catalog-about-company-section__logo {
  margin-top: 60px;
  width: 550px;
  height: 94px;
}

.catalog-about-company-section__text {
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 33px;
  align-items: end;
}

.catalog-about-company-section__h3 {
  font-size: 36px;
  font-weight: 700;
  color: #002d82;
}

.catalog-about-company-section__also {
  font-size: 20px;
  font-weight: 400;
  color: #18182f;
}

.catalog-about-company-section__img {
  margin-top: 90px;
  width: 100%;
  height: 500px;
}

.catalog-about-company-section__p {
  margin: 90px 27% 0;
  font-size: 16px;
  font-weight: 400;
  color: #4f4f5f;
}

.catalog-about-company-section__black-p {
  color: #18182f;
}

/* Адаптив планшеты */
@media screen and (max-width: 768px) {
  .catalog-about-company-section {
    padding-top: 20px;
    padding-bottom: 120px;
  }

  .catalog-about-company-section__logo {
    margin-top: 60px;
    width: 550px;
    height: 94px;
  }

  .catalog-about-company-section__text {
    margin-top: 60px;
    display: block;
  }

  .catalog-about-company-section__h3 {
    font-size: 36px;
  }

  .catalog-about-company-section__also {
    margin-top: 40px;
    font-size: 20px;
  }

  .catalog-about-company-section__img {
    margin-top: 60px;
    height: 360px;
  }

  .catalog-about-company-section__p {
    margin: 90px 0 0;
    font-size: 16px;
  }
}

/* Адаптив телефоны */
@media screen and (max-width: 375px) {
  .catalog-about-company-section {
    padding-top: 16px;
    padding-bottom: 90px;
  }

  .catalog-about-company-section__logo {
    margin-top: 60px;
    width: 328px;
    height: 56px;
  }

  .catalog-about-company-section__text {
    margin-top: 60px;
    display: block;
  }

  .catalog-about-company-section__h3 {
    font-size: 32px;
  }

  .catalog-about-company-section__also {
    margin-top: 40px;
    font-size: 18px;
  }

  .catalog-about-company-section__img {
    margin-top: 38px;
    height: 360px;
  }

  .catalog-about-company-section__p {
    margin: 60px 0 0;
    font-size: 14px;
  }
}

/* Стили для секций внутри страницы (services, clients, certification) */
.services-section {
  padding-top: 120px;
  padding-bottom: 120px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 33px;
  border-bottom: 1px solid #d9d9d9;
}

.services-section__type {
  font-size: 16px;
  color: #002d82;
  font-weight: 400;
}

.services-section__type::before {
  content: url('@/assets/img/orange-circle.png');
  margin-right: 6px;
}

.services-section__name {
  font-family: 'Manrope', sans-serif;
  margin-top: 20px;
  color: #002d82;
  font-size: 36px;
  font-weight: 700;
}

.services-section__content {
  margin-top: 40px;
}

.services-section__services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px 24px;
}

.services-section__p {
  margin-top: 90px;
  font-size: 20px;
  font-weight: 400;
  width: 66%;
}

.clients-section__p {
  font-size: 16px;
  width: 66%;
}

.clients-section__fat-p {
  font-size: 16px;
  font-weight: 500;
}

.certification-section {
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 33px;
  padding-bottom: 120px;
}

.certification-section__type {
  font-size: 16px;
  color: #002d82;
  font-weight: 400;
}

.certification-section__type::before {
  content: url('@/assets/img/orange-circle.png');
  margin-right: 6px;
}

.certification-section__name {
  font-family: 'Manrope', sans-serif;
  margin-top: 20px;
  color: #002d82;
  font-size: 36px;
  font-weight: 700;
}

.certification-section__content {
  margin-top: 40px;
}

/* Адаптив для этих секций */
@media screen and (max-width: 768px) {
  .services-section,
  .certification-section {
    display: block;
  }

  .services-section {
    padding-top: 120px;
    padding-bottom: 120px;
  }

  .services-section__services {
    grid-template-columns: repeat(2, 1fr);
    gap: 60px 70px;
  }

  .services-section__p {
    width: 100%;
  }

  .clients-section__p {
    width: 100%;
  }

  .certification-section {
    padding-bottom: 120px;
  }
}

@media screen and (max-width: 375px) {
  .services-section {
    padding-top: 90px;
    padding-bottom: 60px;
    display: block;
  }

  .services-section__type {
    font-size: 14px;
  }

  .services-section__name {
    font-size: 30px;
    margin-top: 10px;
  }

  .services-section__content {
    margin-top: 40px;
  }

  .services-section__services {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 32px;
  }

  .service-item {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .service-item__img {
    width: 60px;
    height: 60px;
  }

  .service-item__text {
    margin-top: 0;
    margin-left: 20px;
    font-size: 14px;
  }

  .services-section__p {
    margin-top: 40px;
    font-size: 16px;
  }

  .clients-section__h2 {
    font-size: 32px;
  }

  .clients-section__p {
    margin-top: 32px;
    font-size: 14px;
  }

  .clients-section__fat-p {
    font-size: 14px;
  }

  .certification-section {
    display: block;
    padding-bottom: 90px;
  }

  .certification-section__type {
    font-size: 14px;
  }

  .certification-section__type::before {
    content: url('@/assets/img/orange-circle.png');
    margin-right: 8px;
  }

  .certification-section__name {
    font-size: 32px;
    margin-top: 10px;
  }

  .certification-section__content {
    margin-top: 40px;
  }
}
</style>
