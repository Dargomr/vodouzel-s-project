<template>
  <main>
    <section class="first-section">
      <p class="first-section__description">
        Водомерные узлы
        <br />
        по альбому ЦИРВ 02А.00.00.00
        <br />
        для сдачи представителям водоканалов
      </p>
      <div class="first-section__under">
        <img
          class="first-section__logo"
          src="@/assets/img/first-section-logo.png"
          alt="first-section__logo"
        />
        <div class="first-section__additionally">
          <p class="first-section__number"></p>
          <div class="buttons">
            <img class="button-left" src="@/assets/img/button-left.png" alt="button-left" />
            <img class="button-right" src="@/assets/img/button-right.png" alt="button-right" />
          </div>
        </div>
      </div>
    </section>

    <section class="about-company-section">
      <div class="about-company__main">
        <p class="about-company__h3">О компании</p>
        <p class="about-company__main-text">
          Наша компания занимается
          <br />
          оптовой и розничной продажей
          <br />
          трубопроводной арматуры
        </p>
      </div>
      <div class="about-company__also">
        <p class="about-company__also-text">
          А так же продажей материалов для инженерных коммуникаций, контрольно-измерительных
          приборов, автоматики и реализацией пожарного оборудования.
        </p>
      </div>
    </section>

    <Rename
      black-title="Почему стоит сотрудничать с нами"
      black-p="Берёмся за то, в чём разбираемся"
    >
      <CardTiles section="mainReasons"></CardTiles>
    </Rename>

    <Rename class="bg-gray" name="Водомерные узлы">
      <div class="pipes-description">
        <p class="pipes-description__text">
          Каждый водомерный узел подбирается с учетом специфики вашего объекта и требований к учету
          воды.
        </p>
        <p class="pipes-description__text2">
          Специалисты компании «Водоузел СПБ» помогут вам сделать правильный выбор водомерного узла,
          проведут предварительный расчет стоимости и сроков выполнения работ в полном объеме (от
          проектирования до установки и наладки оборудования).
        </p>
        <button class="pipes-description__button button-catalog">Перейти в каталог</button>
        <div class="pipes--description__examples">
          <div class="example__bottom">
            <div class="change-view">
              <button class="side-view">
                Вид
                <br />
                сбоку
              </button>

              <button class="top-view">
                Вид
                <br />
                сверху
              </button>
            </div>
            <div class="general-view">
              <p>
                Общий
                <br />
                вид
              </p>
              <img
                class="ae"
                style="fill: currentColor"
                src="@/assets/img/general-view__img.png"
                alt="asd"
              />
            </div>
          </div>
        </div>
      </div>
    </Rename>

    <Rename
      class="bg-gray"
      h2="продукция"
      name="Трубопроводная арматура"
      secondName="Инженерная сантехника"
    >
      <div class="fittings-section__content">
        <p class="fittings-section__big-text">
          Компания «Водоузел СПБ» является официальным поставщиком иной трубопроводной арматуры и
          комплектующих таких как:
        </p>
        <CardTiles section="mainFittingMeters"></CardTiles>
        <p class="fittings-section__text">
          Инженерная сантехника представляет собой набор изделий, обеспечивающих бесперебойную
          работу различных магистральных систем, таких как отопление, водоснабжение и другие.
          <br />
          <br />
          Трубопроводы монтируются на этапе строительства здания, а арматура для труб должна
          функционировать без сбоев на протяжении долгого времени.
          <br />
          <br />
          Ключевым моментом является их герметичность, надежность и способность выдерживать
          неблагоприятные условия, включая высокую влажность, агрессивные среды и температурные
          колебания. В компании "Водоузел СПБ" вы найдете все необходимое для установки коммуникаций
          любого назначения.
        </p>
        <button class="fittings-section__button button-catalog">Перейти в каталог</button>
      </div>
    </Rename>

    <Rename class="bg-gray" h2="продукция" name="Счетчики воды">
      <div class="water-meters-section__content">
        <CardTiles section="mainWaterMeters"></CardTiles>
        <p class="water-meters-section__text">
          Точный контроль и снижение расходов.
          <br />
          Мы поможем подобрать нужные счетчики, которые будут отвечать всем
          <br />
          современным требованиям.
        </p>
        <button class="water-meters-section__button button-catalog">Перейти в каталог</button>
      </div>
    </Rename>
    <Rename
      main-class="upToDownBlock"
      :with-h2="false"
      name="Оставьте заявку на выбор оборудования"
    >
      <div class="application">
        <div class="application-section__help">
          <p class="application-section__helping">Мы поможем:</p>
          <p class="application-section__01">.01</p>
          <p class="application-section__02">.02</p>
          <p class="application-section__03">.03</p>
          <p class="application-section__blank"></p>
          <p class="application-section__01-text">
            Оценить текущий проект
            <br />
            и подобрать оборудование.
          </p>
          <p class="application-section__02-text">
            Предложить альтернативные варианты
            <br />
            по бюджету и срокам поставки.
          </p>
          <p class="application-section__03-text">
            Получить коммерческое предложение
            <br />
            с точными условиями для договора.
          </p>
        </div>
        <form class="application-form">
          <div class="application-form__text-input">
            <div class="application-form__text-username-item">
              <label class="application-form__username-label" for="application-form__username">
                Имя:
              </label>
              <input
                class="application-form__username-input"
                id="application-form__username"
                type="text"
                placeholder="Иванов Иван"
              />
            </div>

            <div class="application-form__text-phone-item">
              <label class="application-form__phone-label" for="application-form__phone">
                Телефон:
              </label>
              <input
                class="application-form__phone-input"
                id="application-form__phone"
                type="number"
                placeholder="+7 ( ___ ) - ___ - __ - __"
              />
            </div>
          </div>
          <label class="application-form__attach-label">
            <input class="application-form____attach" type="file" />
          </label>
          <div class="application-form__submit-element">
            <input
              class="application-form__submit orange-button"
              type="submit"
              value="Оставить заявку"
            />
            <label class="application-form__submit-text">
              Нажимая кнопку, вы соглашаетесь
              <br />
              с условиями политики конфиденциальности
            </label>
          </div>
        </form>
      </div>
    </Rename>

    <Rename
      :isCarousel="true"
      name="Наша продукция на объектах"
      h2="Проекты и клиенты"
      section="mainOurProduction"
    >
      <Carousel section="mainOurProduction" />
    </Rename>

    <Rename black-title="Наши клиенты">
      <CardTiles section="mainOurClients"></CardTiles>
    </Rename>

    <HelpForm />
  </main>
</template>

<script setup>
import Carousel from '@/components/common/Carousel.vue'
import HelpForm from '@/components/common/HelpForm.vue'
import Rename from '@/components/common/Rename.vue'
import CardTiles from '@/components/common/CardTiles.vue'
</script>

<style scoped>
@import '@/assets/css/1440px.css';
@import '@/assets/css/768px.css';
@import '@/assets/css/375px.css';

.application {
  grid-column: 1 / 5;
}
</style>
