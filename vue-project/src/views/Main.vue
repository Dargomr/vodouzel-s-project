<template>
  <main>
    <section class="first-section">
        <p class="first-section__description">Водомерные узлы<br>по альбому ЦИРВ 02А.00.00.00<br>для сдачи представителям водоканалов</p>
        <div class="first-section__under">
            <img class="first-section__logo" src="@/assets/img/first-section-logo.png" alt="first-section__logo">
<!--            <img class="first-section__logo-768px" src="@/assets/img/first-section-logo-768px.png" alt="first-section__logo">-->
            <div class="first-section__additionally">
                <p class="first-section__number"></p>
                <div class="buttons">
                    <img class="button-left" src="@/assets/img/button-left.png" alt="button-left">
                    <img class="button-right" src="@/assets/img/button-right.png" alt="button-right">
                </div>
            </div>

        </div>
    </section>

    <section class="about-company-section">
        <div class="about-company__main">
            <p class="about-company__h3">О компании</p>
            <p class="about-company__main-text">Наша компания занимается<br>оптовой и розничной продажей<br>трубопроводной арматуры</p>
        </div>
        <div class="about-company__also">
            <p class="about-company__also-text">А так же продажей материалов для инженерных коммуникаций, контрольно-измерительных приборов,  автоматики и реализацией пожарного оборудования.</p>
        </div>
    </section>

    <Rename black-title="Почему стоит сотрудничать с нами" black-p="Берёмся за то, в чём разбираемся">
      <div class="reasons-section__cards">
        <div class="card">
          <div class="card__upper">
            <p class="card__name">Персональный<br>менеджер</p>
            <p class="card__number">.01</p>
          </div>
          <img class="card__img" src="@/assets/img/card-img1.png" alt="card__img">
        </div>

        <div class="card">
          <div class="card__upper">
            <p class="card__name">Мгновенная<br>обработка заказов</p>
            <p class="card__number">.02</p>
          </div>
          <img class="card__img" src="@/assets/img/card-img2.png" alt="card__img">
        </div>

        <div class="card">
          <div class="card__upper">
            <p class="card__name">Гарантия и сертификаты<br>качества</p>
            <p class="card__number">.03</p>
          </div>
          <img class="card__img" src="@/assets/img/card-img3.png" alt="card__img">
        </div>

        <div class="card">
          <div class="card__upper">
            <p class="card__name">Качественная<br>продукция от ведущих<br>производителей</p>
            <p class="card__number">.04</p>
          </div>
          <img class="card__img" src="@/assets/img/card-img4.png" alt="card__img">
        </div>

        <div class="card">
          <div class="card__upper">
            <p class="card__name">Опыт. На рынке<br>с 2002 года</p>
            <p class="card__number">.05</p>
          </div>
          <img class="card__img" src="@/assets/img/card-img5.png" alt="card__img">
        </div>

        <div class="card">
          <div class="card__upper">
            <p class="card__name">Консультация и помощь<br>в подборе</p>
            <p class="card__number">.06</p>
          </div>
          <img class="card__img" src="@/assets/img/card-img6.png" alt="card__img">
        </div>
      </div>
    </Rename>

    <Rename class="bg-gray" name="Водомерные узлы">
      <div class="pipes-description">
        <p class="pipes-description__text">Каждый водомерный узел подбирается с учетом специфики
          вашего объекта и требований к учету воды.</p>
        <p class="pipes-description__text2">Специалисты компании «Водоузел СПБ» помогут вам сделать правильный выбор водомерного узла, проведут предварительный расчет стоимости и сроков выполнения работ в полном объеме (от проектирования до установки и наладки оборудования). </p>
        <button class="pipes-description__button button-catalog">
          Перейти в каталог
        </button>
        <div class="pipes--description__examples">
          <!--                <div class="example__top">-->
          <!--                    <img class="example__img" src="@/assets/img/example__img.png" alt="example__img">-->
          <!--                    <p class="example__type">Общий<br>>вид</p>-->
          <!--                </div>-->
          <div class="example__bottom">
            <div class="change-view">
              <button class="side-view">
                Вид<br>сбоку
              </button>

              <button class="top-view">
                Вид<br>сверху
              </button>
            </div>
            <div class="general-view">
              <p>Общий<br>вид</p>
              <img class="ae" style="fill:currentColor" src="@/assets/img/general-view__img.png" alt="asd"> //заменить на svg//
            </div>
          </div>
        </div>
      </div>
    </Rename>

    <Rename class="bg-gray" h2="продукция" name="Трубопроводная арматура" secondName="Инженерная сантехника">
      <div class="fittings-section__content">
        <p class="fittings-section__big-text">Компания «Водоузел СПБ» является официальным поставщиком иной трубопроводной арматуры и комплектующих таких как: </p>
        <div class="fittings-section__items">
          <div class="item">
            <!--                    <p class="item__name">Задвижки</p>-->
            <img class="item__img" src="@/assets/img/fittings-item1__img.png" alt="item__img">
          </div>

          <div class="item">
            <!--                    <p class="item__name">Затворы</p>-->
            <img class="item__img" src="@/assets/img/fittings-item2__img.png" alt="item__img">
          </div>

          <div class="item">
            <!--                    <p class="item__name">Шаровые краны</p>-->
            <img class="item__img" src="@/assets/img/fittings-item3__img.png" alt="item__img">
          </div>

          <div class="item">
            <!--                    <p class="item__name">Вентили</p>-->
            <img class="item__img" src="@/assets/img/fittings-item4__img.png" alt="item__img">
          </div>

          <div class="item">
            <!--                    <p class="item__name">Фильтры</p>-->
            <img class="item__img" src="@/assets/img/fittings-item5__img.png" alt="item__img">
          </div>

          <div class="item">
            <!--                    <p class="item__name">Клапаны</p>-->
            <img class="item__img" src="@/assets/img/fittings-item6__img.png" alt="item__img">
          </div>
        </div>
        <p class="fittings-section__text">Инженерная сантехника представляет собой набор изделий, обеспечивающих бесперебойную работу различных магистральных систем, таких как отопление, водоснабжение и другие.
          <br>
          <br>
          Трубопроводы монтируются на этапе строительства здания, а арматура для труб должна функционировать без сбоев на протяжении долгого времени.
          <br>
          <br>
          Ключевым моментом является их герметичность, надежность и способность выдерживать неблагоприятные условия, включая высокую влажность, агрессивные среды и температурные колебания. В компании "Водоузел СПБ" вы найдете все необходимое для установки коммуникаций любого назначения.</p>
        <button class="fittings-section__button button-catalog">
          Перейти в каталог
        </button>
      </div>
    </Rename>

    <Rename class="bg-gray" h2="продукция" name="Счетчики воды">
      <div class="water-meters-section__content">
        <div class="water-meters-section__items">
          <div class="item">
            <img class="item__img" src="@/assets/img/water-meters-item1__img.png" alt="item__img">
          </div>

          <div class="item">
            <img class="item__img" src="@/assets/img/water-meters-item2__img.png" alt="item__img">
          </div>

          <div class="item">
            <img class="item__img" src="@/assets/img/water-meters-item3__img.png" alt="item__img">
          </div>

          <div class="item">
            <img class="item__img" src="@/assets/img/water-meters-item4__img.png" alt="item__img">
          </div>
        </div>
        <p class="water-meters-section__text">Точный контроль и снижение расходов.<br>Мы поможем подобрать нужные счетчики, которые будут отвечать всем<br>современным требованиям.</p>
        <button class="water-meters-section__button button-catalog">
          Перейти в каталог
        </button>
      </div>
    </Rename>
    <Rename main-class="upToDownBlock" :with-h2="false" name="Оставьте заявку на выбор оборудования">
      <div class="application">
        <div class="application-section__help">
          <p class="application-section__helping">Мы поможем:</p>
          <p class="application-section__01">.01</p>
          <p class="application-section__02">.02</p>
          <p class="application-section__03">.03</p>
          <p class="application-section__blank"></p>
          <p class="application-section__01-text">Оценить текущий проект<br>и подобрать оборудование.</p>
          <p class="application-section__02-text">Предложить альтернативные варианты<br>по бюджету и срокам поставки.</p>
          <p class="application-section__03-text">Получить коммерческое предложение<br>с точными условиями для договора.</p>
        </div>
        <form class="application-form">
          <div class="application-form__text-input">
            <div class="application-form__text-username-item">
              <label class="application-form__username-label" for="application-form__username">Имя:</label>
              <input class="application-form__username-input" id="application-form__username" type="text" placeholder="Иванов Иван" />
            </div>

            <div class="application-form__text-phone-item">
              <label class="application-form__phone-label" for="application-form__phone">Телефон:</label>
              <input class="application-form__phone-input" id="application-form__phone" type="number" placeholder="+7 ( ___ ) - ___ - __ - __" />
            </div>
          </div>
          <label class="application-form__attach-label">
            <input class="application-form____attach" type="file"/>
            <!--                <span class="input-file-btn">Выберите файл</span>-->
          </label>
          <div class="application-form__submit-element">
            <input class="application-form__submit orange-button" type="submit" value="Оставить заявку"/>
            <label class="application-form__submit-text">Нажимая кнопку, вы соглашаетесь<br>с условиями политики конфиденциальности</label>
          </div>
        </form>
      </div>
    </Rename>

    <Rename :isCarousel="true" name="Наша продукция на объектах" h2="Проекты и клиенты"
            @prev-slide="handlePrevSlide" @next-slide="handleNextSlide" :current-slide="currentSlide" :max-slide="items.length - 1">
      <Carousel :items="items" :current-slide="currentSlide" @slide-change="handleSlideChange"/>
    </Rename>

    <Rename black-title="Наши клиенты" >
      <CardTiles :tiles="tiles"></CardTiles>
    </Rename>

    <HelpForm/>
</main>
</template>

<script setup>
import Carousel from "@/components/common/Carousel.vue";
import HelpForm from "@/components/common/HelpForm.vue";
import Rename from "@/components/common/Rename.vue";
import CardTiles from "@/components/common/CardTiles.vue";
import {ref} from "vue";

const tiles = ref([
  {image: 'src/assets/img/client-img.png'},
  {image: 'src/assets/img/client-img.png'},
  {image: 'src/assets/img/client-img.png'},
  {image: 'src/assets/img/client-img.png'},
  {image: 'src/assets/img/client-img.png'},
  {image: 'src/assets/img/client-img.png'},
  {image: 'src/assets/img/client-img.png'},
  {image: 'src/assets/img/client-img.png'},
  {image: 'src/assets/img/client-img.png'},
  {image: 'src/assets/img/client-img.png'},
  {image: 'src/assets/img/client-img.png'},
  {image: 'src/assets/img/client-img.png'},
  {image: 'src/assets/img/client-img.png'},
  {image: 'src/assets/img/client-img.png'},
  {image: 'src/assets/img/client-img.png'},
  {image: 'src/assets/img/client-img.png'},
])

const items = ref( [
  {image: 'src/assets/img/carousel_img2.png', text: 'Жилые комплексы', alt: 'carousel__img1'},
  {image: 'src/assets/img/carousel_img3.png', text: 'Промышленные объекты', alt: 'carousel__img2'},
  {image: 'src/assets/img/carousel_img1.png', text: 'Общественные здания', alt: 'carousel__img3'},
  {image: 'src/assets/img/carousel_img2.png', text: 'Жилые комплексы', alt: 'carousel__img4'},
])

const currentSlide = ref(0)



const handlePrevSlide = (data) => {
  if(currentSlide.value > 0){
    currentSlide.value--
  }
}

const handleNextSlide = (data) => {
  if(currentSlide.value < items.value.length - 1){
    currentSlide.value++
  }
}

const handleSlideChange = (index) => {
  currentSlide.value = index
}

</script>


<style scoped>


@import '@/assets/css/1440px.css';
@import '@/assets/css/768px.css';
@import '@/assets/css/375px.css';

  .application {
    grid-column: 1 / 5;
  }

</style>