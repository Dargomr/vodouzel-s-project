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
/* ========== FIRST SECTION ========== */
.first-section {
  margin-top: 30px;
  height: 735px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-size: cover;
  background-image: url('@/assets/img/first-section-back.png');
}

.first-section__description {
  font-family: 'Manrope', sans-serif;
  color: white;
  font-size: 20px;
  font-weight: 600;
}

.first-section__under {
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin: 41px 0 32px;
}

.first-section__logo {
  margin-bottom: 19px;
  width: 100%;
}

.buttons {
  display: flex;
  justify-content: end;
}

.button-right {
  margin-left: 10px;
}

/* ========== ABOUT COMPANY SECTION ========== */
.about-company-section {
  padding: 120px 32px 90px;
  display: grid;
  align-items: end;
  grid-template-columns: repeat(2, 1fr);
  gap: 33px;
  border-bottom: 1px solid #e1e4ef;
}

.about-company__main {
  color: #002d82;
}

.about-company__h3 {
  font-size: 16px;
  font-weight: 500;
}

.about-company__main-text {
  color: #002d82;
  font-family: 'Manrope', sans-serif;
  margin-top: 18px;
  font-size: 36px;
  font-weight: 700;
}

.about-company__also-text {
  font-size: 20px;
  font-weight: 400;
  color: #3c3c50;
}

/* ========== PIPES DESCRIPTION ========== */
.pipes-description__text {
  color: #3c3c50;
  font-size: 20px;
  font-weight: 400;
  width: 66%;
}

.pipes-description__text2 {
  margin-top: 20px;
  color: #4f4f5f;
  width: 66%;
}

.pipes-description__button {
  position: relative;
  margin-top: 40px;
  width: 244px;
  height: 46px;
  background-color: #002d82;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.pipes-description__button::after {
  position: relative;
  margin-left: 10px;
  width: 12px;
  height: 12px;
  content: url('@/assets/img/button__diag-arrow.png');
}

.pipes--description__examples {
  margin-top: 60px;
  padding: 30px;
  width: 100%;
  height: 700px;
  background: url('@/assets/img/pipes--description__examples-back.png') no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.example__bottom {
  display: flex;
  justify-content: space-between;
}

.change-view {
  display: flex;
}

.side-view {
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 140px;
  height: 64px;
  background: #002d82;
  color: white;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.side-view::after {
  position: relative;
  width: 16px;
  height: 16px;
  content: url('@/assets/img/side-view__img.png');
}

.top-view {
  margin-left: 10px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 140px;
  height: 64px;
  background: white;
  color: #002d82;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.top-view::after {
  position: relative;
  width: 16px;
  height: 16px;
  content: url('@/assets/img/top-view__img.png');
}

.general-view {
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 140px;
  height: 64px;
  background: white;
  font-size: 16px;
  font-weight: 500;
  color: #002d82;
  border: none;
  border-radius: 4px;
}

/* ========== FITTINGS SECTION ========== */
.fittings-section__big-text {
  width: 66%;
  font-size: 20px;
  font-weight: 400;
}

.fittings-section__text {
  width: 65%;
  color: #4f4f5f;
  margin-top: 62px;
}

.fittings-section__button {
  position: relative;
  margin-top: 40px;
  width: 244px;
  height: 46px;
  background-color: #002d82;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button-catalog::after {
  position: relative;
  margin-left: 10px;
  top: 2px;
  width: 12px;
  height: 12px;
  content: url('@/assets/img/diag-arrow-white.png');
}

/* ========== WATER METERS SECTION ========== */
.water-meters-section__text {
  color: #3c3c50;
  margin-top: 60px;
}

.water-meters-section__button {
  position: relative;
  margin-top: 40px;
  width: 244px;
  height: 46px;
  background-color: #002d82;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.water-meters-section__button::after {
  position: relative;
  margin-left: 10px;
  width: 12px;
  height: 12px;
  content: url('@/assets/img/button__diag-arrow.png');
}

/* ========== APPLICATION SECTION ========== */
.application {
  grid-column: 1 / 5;
}

.application-section__help {
  font-family: 'Manrope', sans-serif;
  margin-top: 62px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 82px);
  column-gap: 33px;
}

.application-section__helping,
.application-section__01,
.application-section__02,
.application-section__03 {
  font-family: 'Manrope', sans-serif;
  font-size: 30px;
  font-weight: 400;
  color: #002d82;
  border-bottom: 1px solid #e1e4ef;
  display: flex;
  align-items: center;
}

.application-section__01-text,
.application-section__02-text,
.application-section__03-text {
  color: #002d82;
  display: flex;
  align-items: center;
}

.application-form {
  margin-top: 60px;
  margin-left: 25%;
  width: 75%;
  position: relative;
  right: 0;
  padding: 30px;
  background: #002d82;
}

.application-form__text-input {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
}

.application-form__username-label,
.application-form__phone-label {
  color: white;
  display: block;
}

.application-form__username-input,
.application-form__phone-input {
  margin-top: 10px;
  background: #002d82;
  color: white;
  border: 1px solid rgb(255 255 255 / 100%);
  border-radius: 4px;
  width: 100%;
  height: 50px;
  padding: 16px;
}

.application-form__username-input::placeholder,
.application-form__phone-input::placeholder {
  font-size: 20px;
  font-weight: 200;
  color: white;
}

.application-form__text-phone-item {
  margin-left: 10px;
}

.application-form____attach {
  margin-top: 10px;
  border: 1px solid white;
  border-radius: 4px;
  background: #002d82;
  color: white;
  width: 202px;
  height: 39px;
}

.application-form__submit-element {
  margin-top: 66px;
  display: flex;
  align-items: end;
}

.application-form__submit {
  width: 207px;
  height: 46px;
  background: #ea5a00;
  color: white;
  font-size: 20px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.application-form__submit-text {
  margin-left: 13px;
  color: white;
  font-size: 16px;
  font-weight: 400;
}

/* ========== АДАПТИВ (768px) ========== */
@media screen and (max-width: 768px) {
  .first-section {
    margin-top: 12px;
    height: 486px;
  }

  .first-section__under {
    margin: 24px 0;
  }

  .about-company-section {
    display: block;
  }

  .about-company__also {
    margin-top: 40px;
  }

  .pipes-description {
    margin-top: 32px;
  }

  .pipes--description__examples {
    padding: 20px;
    height: 560px;
  }

  .fittings-section__name1,
  .fittings-section__name2 {
    margin-top: 10px;
    font-size: 30px;
    font-weight: 700;
  }

  .fittings-section__content {
    margin-top: 32px;
  }

  .fittings-section__text {
    width: 90%;
  }

  .water-meters-section__content {
    margin-top: 60px;
  }

  .application-section__help {
    margin-top: 40px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 61px);
    gap: 24px;
  }

  .application-section__blank {
    grid-column: 2/3;
    grid-row: 1/2;
  }

  .application-section__01-text {
    grid-column: 1/2;
    grid-row: 3/4;
  }

  .application-section__03 {
    grid-column: 1/3;
    grid-row: 4/5;
  }

  .application-section__03-text {
    grid-column: 1/3;
    grid-row: 5/6;
  }

  .application-form {
    margin-left: 0;
    width: 100%;
    position: static;
  }
}

/* ========== АДАПТИВ (375px) ========== */
@media screen and (max-width: 375px) {
  .first-section {
    margin-top: 14px;
    background: url('@/assets/img/first-section-back-375px.png') no-repeat center;
  }

  .first-section__description {
    font-size: 14px;
  }

  .first-section__under {
    display: block;
    margin: 24px 0 16px;
  }

  .first-section__logo {
    margin-bottom: 19px;
    padding-bottom: 24px;
    border-bottom: 1px solid #d9d9d9;
  }

  .button-left,
  .button-right {
    width: 30px;
    height: 30px;
  }

  .about-company__h3 {
    font-size: 14px;
  }

  .about-company__main-text {
    font-size: 26px;
  }

  .about-company__also-text {
    font-size: 18px;
  }

  .pipes-description__text {
    font-size: 18px;
  }

  .pipes-description__text2 {
    margin-top: 16px;
    font-size: 14px;
  }

  .pipes-description__button {
    margin-top: 50px;
    width: 191px;
    height: 39px;
    font-size: 14px;
  }

  .pipes--description__examples {
    margin-top: 60px;
    padding: 30px;
    height: 700px;
    background: url('@/assets/img/pipes--description__examples-back-375px.png') no-repeat;
  }

  .button-catalog {
    width: 191px;
    height: 39px;
  }

  .fittings-section__big-text {
    font-size: 18px;
  }

  .fittings-section__text {
    font-size: 14px;
    width: 100%;
  }

  .water-meters-section__text {
    font-size: 14px;
  }

  .application-section__h2 {
    font-size: 26px;
  }

  .application-section__help {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(7, 74px);
    gap: 24px;
  }

  .application-section__helping {
    font-size: 20px;
  }

  .application-section__helping,
  .application-section__01,
  .application-section__02,
  .application-section__03 {
    font-size: 24px;
  }

  .application-section__01-text,
  .application-section__02-text,
  .application-section__03-text {
    font-size: 14px;
  }

  .application-section__01 {
    grid-column: 1/2;
    grid-row: 2/3;
  }

  .application-section__01-text {
    grid-column: 1/2;
    grid-row: 3/4;
  }

  .application-section__02 {
    grid-column: 1/2;
    grid-row: 4/5;
  }

  .application-section__02-text {
    grid-column: 1/2;
    grid-row: 5/6;
  }

  .application-section__03 {
    grid-column: 1/2;
    grid-row: 6/7;
  }

  .application-section__03-text {
    grid-column: 1/2;
    grid-row: 7/8;
  }

  .application-form__text-input {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .application-form__username-label,
  .application-form__phone-label {
    font-size: 14px;
  }

  .application-form__username-input::placeholder,
  .application-form__phone-input::placeholder {
    font-size: 18px;
  }

  .application-form__text-phone-item {
    margin-left: 0;
  }

  .application-form____attach {
    width: 100%;
  }

  .application-form__submit-element {
    width: 100%;
    margin-top: 30px;
    flex-direction: column;
    align-items: start;
  }

  .application-form__submit {
    width: 100%;
    height: 44px;
    font-size: 18px;
  }

  .application-form__submit-text {
    margin-top: 20px;
    margin-left: 0;
    font-size: 12px;
  }
}
</style>
