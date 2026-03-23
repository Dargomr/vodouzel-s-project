<template>
  <main>
    <section class="nodes-section">
      <div class="nodes-selection">
        <div class="nodes-selection__switch">
          <p class="switch">Главная</p>
          &nbsp;
          <p class="proch">/</p>
          &nbsp;
          <p class="switch">Каталог</p>
          &nbsp;
          <p class="proch">/</p>
          &nbsp;
          <p class="switch">Водомерные трубы</p>
          &nbsp;
        </div>
        <div class="nodes-selection__content">
          <h2 class="nodes-selection__h2">
            Водомерные узлы
            <br />
            по ЦИРВ 02А.00.00.00
          </h2>
          <p class="nodes-selection__p">Подберем правильный водомерный узел, который останется лишь смонтировать!</p>
          <button class="nodes-selection__button orange-button">Выбрать узел</button>
        </div>
      </div>
      <div class="nodes-roster">
        <div class="nodes-roster-item">
          <div class="nodes-roster-item__content">
            <p class="nodes-roster-item__name">Одноветочный</p>
            <p class="nodes-roster-item__number">01</p>
          </div>
          <img
            class="nodes-roster-item__img"
            src="@/assets/img/nodes-roster-item__img1.png"
            alt="nodes__roster-item__img"
          />
        </div>

        <div class="nodes-roster-item">
          <div class="nodes-roster-item__content">
            <p class="nodes-roster-item__name">Двухветочный</p>
            <p class="nodes-roster-item__number">02</p>
          </div>
          <img
            class="nodes-roster-item__img"
            src="@/assets/img/nodes-roster-item__img2.png"
            alt="nodes__roster-item__img"
          />
        </div>

        <div class="nodes-roster-item">
          <div class="nodes-roster-item__content">
            <p class="nodes-roster-item__name">
              С отдельным
              <br />
              пожаротушением
            </p>
            <p class="nodes-roster-item__number">03</p>
          </div>
          <img
            class="nodes-roster-item__img"
            src="@/assets/img/nodes-roster-item__img3.png"
            alt="nodes__roster-item__img"
          />
        </div>

        <div class="nodes-roster-item">
          <div class="nodes-roster-item__content">
            <p class="nodes-roster-item__name">
              Элементы
              <br />
              водомерных
              <br />
              узлов
            </p>
            <p class="nodes-roster-item__number">04</p>
          </div>
          <img
            class="nodes-roster-item__img"
            src="@/assets/img/nodes-roster-item__img4.png"
            alt="nodes__roster-item__img"
          />
        </div>
      </div>
    </section>
    <Rename
      main-class="upToDownBlock"
      h2="О продукте"
      name="Водомерный узел - это комплекс приборов обеспечивающий непрерывный коммерческий учет воды потребляемой абонентом."
    >
      <div class="about-nodes-section__block">
        <p class="about-nodes-section__big-text">
          Водомерные узлы состоят из приборов учета потребляемой воды (водомеров), трубопроводной арматуры (задвижек или
          затворов), спускного крана, технического манометра, соединительных частей (колен, переходов, тройников) и
          патрубков из водопроводных стальных труб.
        </p>
        <p class="about-nodes-section__text">
          Наша организация, имея собственное производство, предлагает возможность поставки водомерных узлов по альбому
          ЦИРВ 02А, разработанному ГУП Водоканал больше 20 лет назад, но до сих пор имеющий большое практическое
          применение.
          <br />
          <br />
          Водомерные узлы предназначены для учета расхода воды в коммерческих зданиях. Они состоят из участка трубы
          холодного водоснабжения с затвором, измерительного устройства и манометра ля контроля давления подаваемой
          воды, а также фильтра, обратного клапана и дополнительных соединительных элементов, таких как патрубки,
          контрольно-спускной кран-вентиль и обводная линия.
        </p>
        <br />
        <p class="about-nodes-section__short-text">
          В соответствии с альбомом ЦИРВ, водомерные узлы могут быть классифицированы на I тип без пожарно-резервной
          линии) и II тип (с тройником для подключения систем пожаротушения. Узел второго типа обеспечивает подачу воды
          во время ремонта или замены конструкции.
        </p>
      </div>
    </Rename>

    <Rename
      black-title="Основные сферы применения"
      :is-carousel="true"
      @next-slide="nextSlide"
      @prev-slide="prevSlide"
      :current-slide="currentSlide"
      :max-slide="carouselStore.nodesAreasOfApplicationItems.length - 1"
    >
      <Carousel
        :items="carouselStore.nodesAreasOfApplicationItems"
        :current-slide="currentSlide"
        @slide-change="handleSlideChange"
      />
    </Rename>

    <HelpForm />

    <Rename class="bg-gray" h2="Документация" name="Что такое альбом?" secondName="И какие его требования">
      <div class="album-section__content">
        <p class="album-section__big-text">
          Альбом ЦИРВ 02А.00.00.00 содержит в себе требования к ВУ (водомерным узлам), которые монтируются на вводе в
          строения.
        </p>
        <p class="album-section__text">
          Такой альбом очень полезен для абонентов, которые подключены напрямую к сетям Водоканала. Абонентами могут
          являться как юридические, так и физические лица, которые имеют в собственности здания или компании,
          управляющие этими зданиями. Распространяются требования альбома к механическим счётчикам для воды, условный
          проход которых имеет диаметр от 20 до 200 мм. При подключении к коммунальным системам водоснабжения диаметр
          должен иметь от 50 до 200 мм.
        </p>

        <div class="album-section__pdfs">
          <div class="pdf">
            <p class="pdf__text">Лист 1-150.pdf</p>
            <div class="pdf-imgs">
              <img class="pdf__download" src="@/assets/img/pdf__download.svg" alt="pdf__download" />
              <img class="pdf__img" src="@/assets/img/pdf__img.svg" alt="pdf__img" />
            </div>
          </div>

          <div class="pdf">
            <p class="pdf__text">Лист 151-300.pdf</p>
            <div class="pdf-imgs">
              <img class="pdf__download" src="@/assets/img/pdf__download.svg" alt="pdf__download" />
              <img class="pdf__img" src="@/assets/img/pdf__img.svg" alt="pdf__img" />
            </div>
          </div>

          <div class="pdf">
            <p class="pdf__text">Лист 301-441.pdf</p>
            <div class="pdf-imgs">
              <img class="pdf__download" src="@/assets/img/pdf__download.svg" alt="pdf__download" />
              <img class="pdf__img" src="@/assets/img/pdf__img.svg" alt="pdf__img" />
            </div>
          </div>
        </div>

        <p class="album-section__big-text">ЦИРВ 03А.00.00.00</p>
        <p class="album-section__text">
          Есть также альбом ЦИРВ 03А.00.00.00, который содержит в себе требования к ВУ, являющихся внутренней сетью
          различных объектов. Это могут быть люди, владеющие нежилыми помещениями, которые располагаются в жилых домах
          (мастерские, рестораны, кафе, магазины и офисы).
        </p>

        <div class="album-section__pdfs">
          <div class="pdf">
            <p class="pdf__text"></p>
            <div class="pdf-imgs">
              <img class="pdf__download" src="@/assets/img/pdf__download.svg" alt="pdf__download" />
              <img class="pdf__img" src="@/assets/img/pdf__img.svg" alt="pdf__img" />
            </div>
          </div>
        </div>
      </div>
    </Rename>

    <Rename
      class="bg-gray"
      h2="Структура и установка"
      name="Из каких деталей состоит водомерный узел?"
      main-class="upToDownBlock"
    >
      <div class="nodes-details-section__content">
        <p class="nodes-details-section__big-text">
          Водомерный узел состоит: комплекта стяжек, предназначенных для подсоединения к вводу.
        </p>
        <p class="nodes-details-section__text">
          Если ввод из стали, то в комплект ВУ входят специальные фланцы, патрубки до счётчика ПДС и патрубок после
          счётчика ППС, фланцевый переход ПФ, фланцевый тройник и фланцевое колено. В комплект также входит обрезиненная
          задвижка, фильтр фланцевого ФМФ, межфланцевый или фланцевый обратный клапан, затвор или задвижка с
          электрическим приводом и щит управления ею, импульсные или простые счётчики воды типа ВСХНд, патрубки для
          счётчиков, компенсаторы, манометр. В комплект также входят шпильки, прокладки, шайбы, гайки и болты. ВУ могут
          комплектоваться турбинными или крыльчатыми счётчиками.
        </p>

        <div class="nodes-details-section__list-div">
          <p class="nodes-details-section__list-p">Элементы водомерного узла:</p>
          <ul class="nodes-details-section__list">
            <li class="nodes-details-section__list-item">Патрубки фланцевые</li>
            <li class="nodes-details-section__list-item">Колена фланцевые УФ</li>
            <li class="nodes-details-section__list-item">Тройники фланцевые</li>
            <li class="nodes-details-section__list-item">Переходы фланцевые</li>
            <li class="nodes-details-section__list-item">Опоры подвижные</li>
            <li class="nodes-details-section__list-item">Стяжки стальные</li>
            <li class="nodes-details-section__list-item">Фланцы резьбовые</li>
          </ul>
        </div>

        <p class="nodes-details-section__big-text">Где устанавливаются Водомерные узлы?</p>
        <p class="nodes-details-section__text">
          ВУ монтируются на водопроводах, прошедших опрессовку для учёта расхода воды. В многоквартирных домах чаще
          всего их устанавливают в подвалах, тепловых пунктах или подъездах. Контроль показаний счётчиков и их
          обслуживание проводят специальные организации, которые имеют лицензию или допуск к таким работам.
          <br />
          <br />
          На трубопроводах, которые расположены горизонтально, устанавливают чаще всего крыльчатые счётчики. В таких
          счётчиках ось вращения перпендикулярна движению воды, а крепятся они с помощью резьбового соединения.
          <br />
          <br />
          Турбинные счётчики могут быть установлены на любые типы водопровода – они могут вести подсчёт количества воды,
          подаваемой даже вертикально. Направление оси в турбинных счётчиках параллельно по направлению движения воды.
          <br />
          <br />
          Общая стоимость ВУ определяется из расчёта стоимости оборудования, входящего во весь комплекс.
        </p>
      </div>
    </Rename>
    <Rename :withH2="false" name="Опросный лист для заказа водомерного узла" main-class="upToDownBlock">
      <div class="questionnaire-section__content">
        <div class="questionnaire-section__context">
          <p class="questionnaire-section__big-text">Я знаю, что необходимо</p>
          <p class="questionnaire-section__text">
            Заполните развернутую форму и оставьте подробный комментарий к заказу водомерного узла
          </p>
        </div>
        <form class="pipe-order-form">
          <div class="pipe-order-form__material">
            <label class="pipe-order-form__material-label" for="pipe-order-form__material-select">
              Материал водопроводного ввода:
            </label>
            <select class="pipe-order-form__material-select" id="pipe-order-form__material-select">
              <option class="pipe-order-form__material-option">Чугун</option>
              <option class="pipe-order-form__material-option">Чугун</option>
            </select>
          </div>

          <div class="pipe-order-form__type">
            <label class="pipe-order-form__type-label" for="pipe-order-form__type-select"> Тип присоединения: </label>
            <select class="pipe-order-form__type-select" id="pipe-order-form__type-select">
              <option class="pipe-order-form__type__option">Раструб</option>
            </select>
          </div>

          <div class="pipe-order-form__number-list">
            <label class="pipe-order-form__number-list-label" for="pipe-order-form__number-list-input">
              Номер листа по типовому альбому ЦИРВ 02А.00.00.00:
            </label>
            <input
              class="pipe-order-form__number-list-input"
              id="pipe-order-form__number-list-input"
              placeholder="Введите номер листа ..."
            />
          </div>

          <div class="pipe-order-form__wanted-material">
            <label class="pipe-order-form__wanted-material-label" for="pipe-order-form__wanted-material-input">
              Желаемый материал фасонных частей:
            </label>
            <input
              class="pipe-order-form__wanted-material-input"
              id="pipe-order-form__wanted-material-input"
              placeholder="Тройники ТФ, колена УФ ..."
            />
          </div>

          <div class="pipe-order-form__diameter">
            <label class="pipe-order-form__diameter-label" for="pipe-order-form__diameter-input">
              Диаметр счетчика воды, мм:
            </label>
            <input
              class="pipe-order-form__diameter-input"
              id="pipe-order-form__diameter-input"
              placeholder="10 мм ..."
            />
          </div>

          <div class="pipe-order-form__necessity">
            <label class="pipe-order-form__necessity-label">
              Необходимость наличия у счетчика воды импульсного выхода:
            </label>
            <div class="pipe-order-form__necessity-buttons">
              <button class="pipe-order-form__necessity-button1">Да</button>
              <button class="pipe-order-form__necessity-button2">Нет</button>
            </div>
          </div>

          <div class="pipe-order-form__armature-type">
            <label class="pipe-order-form__armature-type-label" for="pipe-order-form__armature-type-select">
              Тип водозаборной арматуры:
            </label>
            <select class="pipe-order-form__armature-type-select" id="pipe-order-form__armature-type-select">
              <option class="pipe-order-form__armature-type-option">Затворы</option>
            </select>
          </div>

          <div class="pipe-order-form__complete-it">
            <label class="pipe-order-form__complete-it-label">
              Доукомплектовать водомерный узел пультом управления затвора (задвижки) с электроприводом:
            </label>
            <div class="pipe-order-form__complete-it-buttons">
              <button class="pipe-order-form__complete-it-button1">Да</button>
              <button class="pipe-order-form__complete-it-button2">Нет</button>
            </div>
          </div>

          <div class="pipe-order-form__wishes">
            <label class="pipe-order-form__wishes-label" for="pipe-order-form__wishes-input"> Прочие пожелания: </label>
            <input
              class="pipe-order-form__wishes-input"
              id="pipe-order-form__wishes-input"
              placeholder="Напишите сюда свои пожелания ..."
            />
          </div>

          <div class="pipe-order-form__username">
            <label class="pipe-order-form__username-label" for="pipe-order-form__username-input"> Имя: </label>
            <input
              class="pipe-order-form__username-input"
              id="pipe-order-form__username-input"
              placeholder="Иванов Иван"
            />
          </div>

          <div class="pipe-order-form__phone">
            <label class="pipe-order-form__phone-label" for="pipe-order-form__phone-input"> Телефон: </label>
            <input
              class="pipe-order-form__phone-input"
              id="pipe-order-form__phone-input"
              placeholder="+7 ( ___ ) - ___ - __ - __"
            />
          </div>

          <div class="pipe-order-form__email">
            <label class="pipe-order-form__email-label" for="pipe-order-form__email-input"> E-mail: </label>
            <input
              class="pipe-order-form__email-input"
              id="pipe-order-form__email-input"
              placeholder="vodouzel@mail.ru"
            />
          </div>

          <div class="pipe-order-form__button">
            <input
              type="button"
              class="pipe-order-form__button-input orange-button"
              id="pipe-order-form__button-input"
              value="Оставить заявку"
            />
            <label class="pipe-order-form__button-label" for="pipe-order-form__button-input">
              Нажимая кнопку, вы соглашаетесь с условиями политики конфиденциальности
            </label>
          </div>
        </form>
      </div>
    </Rename>
    <section class="questionnaire-section">
      <h2 class="questionnaire-section__h2">Опросный лист для заказа водомерного узла</h2>
      <div class="questionnaire-section__select">
        <p class="questionnaire-section__select-item questionnaire-section__select-item_selected">Подробная форма</p>
        <p class="questionnaire-section__select-item">Быстрая заявка</p>
      </div>

      <div class="questionnaire-section__content">
        <div class="questionnaire-section__context">
          <p class="questionnaire-section__big-text">Я знаю, что необходимо</p>
          <p class="questionnaire-section__text">
            Заполните развернутую форму и оставьте подробный комментарий к заказу водомерного узла
          </p>
        </div>
        <form class="pipe-order-form">
          <div class="pipe-order-form__material">
            <label class="pipe-order-form__material-label" for="pipe-order-form__material-select">
              Материал водопроводного ввода:
            </label>
            <select class="pipe-order-form__material-select" id="pipe-order-form__material-select">
              <option class="pipe-order-form__material-option">Чугун</option>
              <option class="pipe-order-form__material-option">Чугун</option>
            </select>
          </div>

          <div class="pipe-order-form__type">
            <label class="pipe-order-form__type-label" for="pipe-order-form__type-select"> Тип присоединения: </label>
            <select class="pipe-order-form__type-select" id="pipe-order-form__type-select">
              <option class="pipe-order-form__type__option">Раструб</option>
            </select>
          </div>

          <div class="pipe-order-form__number-list">
            <label class="pipe-order-form__number-list-label" for="pipe-order-form__number-list-input">
              Номер листа по типовому альбому ЦИРВ 02А.00.00.00:
            </label>
            <input
              class="pipe-order-form__number-list-input"
              id="pipe-order-form__number-list-input"
              placeholder="Введите номер листа ..."
            />
          </div>

          <div class="pipe-order-form__wanted-material">
            <label class="pipe-order-form__wanted-material-label" for="pipe-order-form__wanted-material-input">
              Желаемый материал фасонных частей:
            </label>
            <input
              class="pipe-order-form__wanted-material-input"
              id="pipe-order-form__wanted-material-input"
              placeholder="Тройники ТФ, колена УФ ..."
            />
          </div>

          <div class="pipe-order-form__diameter">
            <label class="pipe-order-form__diameter-label" for="pipe-order-form__diameter-input">
              Диаметр счетчика воды, мм:
            </label>
            <input
              class="pipe-order-form__diameter-input"
              id="pipe-order-form__diameter-input"
              placeholder="10 мм ..."
            />
          </div>

          <div class="pipe-order-form__necessity">
            <label class="pipe-order-form__necessity-label">
              Необходимость наличия у счетчика воды импульсного выхода:
            </label>
            <div class="pipe-order-form__necessity-buttons">
              <button class="pipe-order-form__necessity-button1">Да</button>
              <button class="pipe-order-form__necessity-button2">Нет</button>
            </div>
          </div>

          <div class="pipe-order-form__armature-type">
            <label class="pipe-order-form__armature-type-label" for="pipe-order-form__armature-type-select">
              Тип водозаборной арматуры:
            </label>
            <select class="pipe-order-form__armature-type-select" id="pipe-order-form__armature-type-select">
              <option class="pipe-order-form__armature-type-option">Затворы</option>
            </select>
          </div>

          <div class="pipe-order-form__complete-it">
            <label class="pipe-order-form__complete-it-label">
              Доукомплектовать водомерный узел пультом управления затвора (задвижки) с электроприводом:
            </label>
            <div class="pipe-order-form__complete-it-buttons">
              <button class="pipe-order-form__complete-it-button1">Да</button>
              <button class="pipe-order-form__complete-it-button2">Нет</button>
            </div>
          </div>

          <div class="pipe-order-form__wishes">
            <label class="pipe-order-form__wishes-label" for="pipe-order-form__wishes-input"> Прочие пожелания: </label>
            <input
              class="pipe-order-form__wishes-input"
              id="pipe-order-form__wishes-input"
              placeholder="Напишите сюда свои пожелания ..."
            />
          </div>

          <div class="pipe-order-form__username">
            <label class="pipe-order-form__username-label" for="pipe-order-form__username-input"> Имя: </label>
            <input
              class="pipe-order-form__username-input"
              id="pipe-order-form__username-input"
              placeholder="Иванов Иван"
            />
          </div>

          <div class="pipe-order-form__phone">
            <label class="pipe-order-form__phone-label" for="pipe-order-form__phone-input"> Телефон: </label>
            <input
              class="pipe-order-form__phone-input"
              id="pipe-order-form__phone-input"
              placeholder="+7 ( ___ ) - ___ - __ - __"
            />
          </div>

          <div class="pipe-order-form__email">
            <label class="pipe-order-form__email-label" for="pipe-order-form__email-input"> E-mail: </label>
            <input
              class="pipe-order-form__email-input"
              id="pipe-order-form__email-input"
              placeholder="vodouzel@mail.ru"
            />
          </div>

          <div class="pipe-order-form__button">
            <input
              type="button"
              class="pipe-order-form__button-input orange-button"
              id="pipe-order-form__button-input"
              value="Оставить заявку"
            />
            <label class="pipe-order-form__button-label" for="pipe-order-form__button-input">
              Нажимая кнопку, вы соглашаетесь с условиями политики конфиденциальности
            </label>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>

<script setup>
import Carousel from '@/components/common/Carousel.vue'
import Rename from '@/components/common/Rename.vue'
import HelpForm from '@/components/common/HelpForm.vue'
import { ref } from 'vue'
import { useCarouselStore } from '@/stores/CarouselStore.js'

const carouselStore = useCarouselStore()

const currentSlide = ref(0)

const handleSlideChange = (index) => {
  currentSlide.value = index
}

const prevSlide = () => {
  currentSlide.value--
}

const nextSlide = () => {
  currentSlide.value++
}
</script>

<style scoped>
@import '@/assets/css/1440px.css';
@import '@/assets/css/768px.css';
@import '@/assets/css/375px.css';
</style>
