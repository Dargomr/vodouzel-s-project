<template>
  <main>
    <section class="nodes-section">
      <div class="nodes-selection">
        <Breadcrumbs
          :breadcrumbs-items="[
            { path: '/', name: 'Главная' },
            { path: '/catalog', name: 'Каталог' },
            { name: 'Водомерные узлы' },
          ]"
        />
        <div class="nodes-selection__content">
          <h2 class="nodes-selection__h2">
            Водомерные узлы
            <br />
            по ЦИРВ 02А.00.00.00
          </h2>
          <p class="nodes-selection__p">
            Подберем правильный водомерный узел, который останется лишь смонтировать!
          </p>
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
      is-long-header
      name="Водомерный узел - это комплекс приборов обеспечивающий непрерывный коммерческий учет воды потребляемой абонентом."
    >
      <div class="about-nodes-section__block">
        <p class="about-nodes-section__big-text">
          Водомерные узлы состоят из приборов учета потребляемой воды (водомеров), трубопроводной
          арматуры (задвижек или затворов), спускного крана, технического манометра, соединительных
          частей (колен, переходов, тройников) и патрубков из водопроводных стальных труб.
        </p>
        <p class="about-nodes-section__text">
          Наша организация, имея собственное производство, предлагает возможность поставки
          водомерных узлов по альбому ЦИРВ 02А, разработанному ГУП Водоканал больше 20 лет назад, но
          до сих пор имеющий большое практическое применение.
          <br />
          <br />
          Водомерные узлы предназначены для учета расхода воды в коммерческих зданиях. Они состоят
          из участка трубы холодного водоснабжения с затвором, измерительного устройства и манометра
          ля контроля давления подаваемой воды, а также фильтра, обратного клапана и дополнительных
          соединительных элементов, таких как патрубки, контрольно-спускной кран-вентиль и обводная
          линия.
        </p>
        <br />
        <p class="about-nodes-section__short-text">
          В соответствии с альбомом ЦИРВ, водомерные узлы могут быть классифицированы на I тип без
          пожарно-резервной линии) и II тип (с тройником для подключения систем пожаротушения. Узел
          второго типа обеспечивает подачу воды во время ремонта или замены конструкции.
        </p>
      </div>
    </Rename>

    <Rename
      black-title="Основные сферы применения"
      :is-carousel="true"
      section="nodesAreasOfApplication"
    >
      <Carousel section="nodesAreasOfApplication" />
    </Rename>

    <HelpForm />

    <Rename
      class="bg-gray"
      h2="Документация"
      name="Что такое альбом?"
      secondName="И какие его требования"
    >
      <div class="album-section__content">
        <p class="album-section__big-text">
          Альбом ЦИРВ 02А.00.00.00 содержит в себе требования к ВУ (водомерным узлам), которые
          монтируются на вводе в строения.
        </p>
        <p class="album-section__text">
          Такой альбом очень полезен для абонентов, которые подключены напрямую к сетям Водоканала.
          Абонентами могут являться как юридические, так и физические лица, которые имеют в
          собственности здания или компании, управляющие этими зданиями. Распространяются требования
          альбома к механическим счётчикам для воды, условный проход которых имеет диаметр от 20 до
          200 мм. При подключении к коммунальным системам водоснабжения диаметр должен иметь от 50
          до 200 мм.
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
          Есть также альбом ЦИРВ 03А.00.00.00, который содержит в себе требования к ВУ, являющихся
          внутренней сетью различных объектов. Это могут быть люди, владеющие нежилыми помещениями,
          которые располагаются в жилых домах (мастерские, рестораны, кафе, магазины и офисы).
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
          Если ввод из стали, то в комплект ВУ входят специальные фланцы, патрубки до счётчика ПДС и
          патрубок после счётчика ППС, фланцевый переход ПФ, фланцевый тройник и фланцевое колено. В
          комплект также входит обрезиненная задвижка, фильтр фланцевого ФМФ, межфланцевый или
          фланцевый обратный клапан, затвор или задвижка с электрическим приводом и щит управления
          ею, импульсные или простые счётчики воды типа ВСХНд, патрубки для счётчиков, компенсаторы,
          манометр. В комплект также входят шпильки, прокладки, шайбы, гайки и болты. ВУ могут
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
          ВУ монтируются на водопроводах, прошедших опрессовку для учёта расхода воды. В
          многоквартирных домах чаще всего их устанавливают в подвалах, тепловых пунктах или
          подъездах. Контроль показаний счётчиков и их обслуживание проводят специальные
          организации, которые имеют лицензию или допуск к таким работам.
          <br />
          <br />
          На трубопроводах, которые расположены горизонтально, устанавливают чаще всего крыльчатые
          счётчики. В таких счётчиках ось вращения перпендикулярна движению воды, а крепятся они с
          помощью резьбового соединения.
          <br />
          <br />
          Турбинные счётчики могут быть установлены на любые типы водопровода – они могут вести
          подсчёт количества воды, подаваемой даже вертикально. Направление оси в турбинных
          счётчиках параллельно по направлению движения воды.
          <br />
          <br />
          Общая стоимость ВУ определяется из расчёта стоимости оборудования, входящего во весь
          комплекс.
        </p>
      </div>
    </Rename>
    <Rename
      :withH2="false"
      name="Опросный лист для заказа водомерного узла"
      main-class="upToDownBlock"
    >
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
            <label class="pipe-order-form__type-label" for="pipe-order-form__type-select">
              Тип присоединения:
            </label>
            <select class="pipe-order-form__type-select" id="pipe-order-form__type-select">
              <option class="pipe-order-form__type__option">Раструб</option>
            </select>
          </div>

          <div class="pipe-order-form__number-list">
            <label
              class="pipe-order-form__number-list-label"
              for="pipe-order-form__number-list-input"
            >
              Номер листа по типовому альбому ЦИРВ 02А.00.00.00:
            </label>
            <input
              class="pipe-order-form__number-list-input"
              id="pipe-order-form__number-list-input"
              placeholder="Введите номер листа ..."
            />
          </div>

          <div class="pipe-order-form__wanted-material">
            <label
              class="pipe-order-form__wanted-material-label"
              for="pipe-order-form__wanted-material-input"
            >
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
            <label
              class="pipe-order-form__armature-type-label"
              for="pipe-order-form__armature-type-select"
            >
              Тип водозаборной арматуры:
            </label>
            <select
              class="pipe-order-form__armature-type-select"
              id="pipe-order-form__armature-type-select"
            >
              <option class="pipe-order-form__armature-type-option">Затворы</option>
            </select>
          </div>

          <div class="pipe-order-form__complete-it">
            <label class="pipe-order-form__complete-it-label">
              Доукомплектовать водомерный узел пультом управления затвора (задвижки) с
              электроприводом:
            </label>
            <div class="pipe-order-form__complete-it-buttons">
              <button class="pipe-order-form__complete-it-button1">Да</button>
              <button class="pipe-order-form__complete-it-button2">Нет</button>
            </div>
          </div>

          <div class="pipe-order-form__wishes">
            <label class="pipe-order-form__wishes-label" for="pipe-order-form__wishes-input">
              Прочие пожелания:
            </label>
            <input
              class="pipe-order-form__wishes-input"
              id="pipe-order-form__wishes-input"
              placeholder="Напишите сюда свои пожелания ..."
            />
          </div>

          <div class="pipe-order-form__username">
            <label class="pipe-order-form__username-label" for="pipe-order-form__username-input">
              Имя:
            </label>
            <input
              class="pipe-order-form__username-input"
              id="pipe-order-form__username-input"
              placeholder="Иванов Иван"
            />
          </div>

          <div class="pipe-order-form__phone">
            <label class="pipe-order-form__phone-label" for="pipe-order-form__phone-input">
              Телефон:
            </label>
            <input
              class="pipe-order-form__phone-input"
              id="pipe-order-form__phone-input"
              placeholder="+7 ( ___ ) - ___ - __ - __"
            />
          </div>

          <div class="pipe-order-form__email">
            <label class="pipe-order-form__email-label" for="pipe-order-form__email-input">
              E-mail:
            </label>
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
    <!--    <section class="questionnaire-section">-->
    <!--      <h2 class="questionnaire-section__h2">Опросный лист для заказа водомерного узла</h2>-->
    <!--      <div class="questionnaire-section__select">-->
    <!--        <p class="questionnaire-section__select-item questionnaire-section__select-item_selected">-->
    <!--          Подробная форма-->
    <!--        </p>-->
    <!--        <p class="questionnaire-section__select-item">Быстрая заявка</p>-->
    <!--      </div>-->

    <!--      <div class="questionnaire-section__content">-->
    <!--        <div class="questionnaire-section__context">-->
    <!--          <p class="questionnaire-section__big-text">Я знаю, что необходимо</p>-->
    <!--          <p class="questionnaire-section__text">-->
    <!--            Заполните развернутую форму и оставьте подробный комментарий к заказу водомерного узла-->
    <!--          </p>-->
    <!--        </div>-->
    <!--        <form class="pipe-order-form">-->
    <!--          <div class="pipe-order-form__material">-->
    <!--            <label class="pipe-order-form__material-label" for="pipe-order-form__material-select">-->
    <!--              Материал водопроводного ввода:-->
    <!--            </label>-->
    <!--            <select class="pipe-order-form__material-select" id="pipe-order-form__material-select">-->
    <!--              <option class="pipe-order-form__material-option">Чугун</option>-->
    <!--              <option class="pipe-order-form__material-option">Чугун</option>-->
    <!--            </select>-->
    <!--          </div>-->

    <!--          <div class="pipe-order-form__type">-->
    <!--            <label class="pipe-order-form__type-label" for="pipe-order-form__type-select">-->
    <!--              Тип присоединения:-->
    <!--            </label>-->
    <!--            <select class="pipe-order-form__type-select" id="pipe-order-form__type-select">-->
    <!--              <option class="pipe-order-form__type__option">Раструб</option>-->
    <!--            </select>-->
    <!--          </div>-->

    <!--          <div class="pipe-order-form__number-list">-->
    <!--            <label-->
    <!--              class="pipe-order-form__number-list-label"-->
    <!--              for="pipe-order-form__number-list-input"-->
    <!--            >-->
    <!--              Номер листа по типовому альбому ЦИРВ 02А.00.00.00:-->
    <!--            </label>-->
    <!--            <input-->
    <!--              class="pipe-order-form__number-list-input"-->
    <!--              id="pipe-order-form__number-list-input"-->
    <!--              placeholder="Введите номер листа ..."-->
    <!--            />-->
    <!--          </div>-->

    <!--          <div class="pipe-order-form__wanted-material">-->
    <!--            <label-->
    <!--              class="pipe-order-form__wanted-material-label"-->
    <!--              for="pipe-order-form__wanted-material-input"-->
    <!--            >-->
    <!--              Желаемый материал фасонных частей:-->
    <!--            </label>-->
    <!--            <input-->
    <!--              class="pipe-order-form__wanted-material-input"-->
    <!--              id="pipe-order-form__wanted-material-input"-->
    <!--              placeholder="Тройники ТФ, колена УФ ..."-->
    <!--            />-->
    <!--          </div>-->

    <!--          <div class="pipe-order-form__diameter">-->
    <!--            <label class="pipe-order-form__diameter-label" for="pipe-order-form__diameter-input">-->
    <!--              Диаметр счетчика воды, мм:-->
    <!--            </label>-->
    <!--            <input-->
    <!--              class="pipe-order-form__diameter-input"-->
    <!--              id="pipe-order-form__diameter-input"-->
    <!--              placeholder="10 мм ..."-->
    <!--            />-->
    <!--          </div>-->

    <!--          <div class="pipe-order-form__necessity">-->
    <!--            <label class="pipe-order-form__necessity-label">-->
    <!--              Необходимость наличия у счетчика воды импульсного выхода:-->
    <!--            </label>-->
    <!--            <div class="pipe-order-form__necessity-buttons">-->
    <!--              <button class="pipe-order-form__necessity-button1">Да</button>-->
    <!--              <button class="pipe-order-form__necessity-button2">Нет</button>-->
    <!--            </div>-->
    <!--          </div>-->

    <!--          <div class="pipe-order-form__armature-type">-->
    <!--            <label-->
    <!--              class="pipe-order-form__armature-type-label"-->
    <!--              for="pipe-order-form__armature-type-select"-->
    <!--            >-->
    <!--              Тип водозаборной арматуры:-->
    <!--            </label>-->
    <!--            <select-->
    <!--              class="pipe-order-form__armature-type-select"-->
    <!--              id="pipe-order-form__armature-type-select"-->
    <!--            >-->
    <!--              <option class="pipe-order-form__armature-type-option">Затворы</option>-->
    <!--            </select>-->
    <!--          </div>-->

    <!--          <div class="pipe-order-form__complete-it">-->
    <!--            <label class="pipe-order-form__complete-it-label">-->
    <!--              Доукомплектовать водомерный узел пультом управления затвора (задвижки) с-->
    <!--              электроприводом:-->
    <!--            </label>-->
    <!--            <div class="pipe-order-form__complete-it-buttons">-->
    <!--              <button class="pipe-order-form__complete-it-button1">Да</button>-->
    <!--              <button class="pipe-order-form__complete-it-button2">Нет</button>-->
    <!--            </div>-->
    <!--          </div>-->

    <!--          <div class="pipe-order-form__wishes">-->
    <!--            <label class="pipe-order-form__wishes-label" for="pipe-order-form__wishes-input">-->
    <!--              Прочие пожелания:-->
    <!--            </label>-->
    <!--            <input-->
    <!--              class="pipe-order-form__wishes-input"-->
    <!--              id="pipe-order-form__wishes-input"-->
    <!--              placeholder="Напишите сюда свои пожелания ..."-->
    <!--            />-->
    <!--          </div>-->

    <!--          <div class="pipe-order-form__username">-->
    <!--            <label class="pipe-order-form__username-label" for="pipe-order-form__username-input">-->
    <!--              Имя:-->
    <!--            </label>-->
    <!--            <input-->
    <!--              class="pipe-order-form__username-input"-->
    <!--              id="pipe-order-form__username-input"-->
    <!--              placeholder="Иванов Иван"-->
    <!--            />-->
    <!--          </div>-->

    <!--          <div class="pipe-order-form__phone">-->
    <!--            <label class="pipe-order-form__phone-label" for="pipe-order-form__phone-input">-->
    <!--              Телефон:-->
    <!--            </label>-->
    <!--            <input-->
    <!--              class="pipe-order-form__phone-input"-->
    <!--              id="pipe-order-form__phone-input"-->
    <!--              placeholder="+7 ( ___ ) - ___ - __ - __"-->
    <!--            />-->
    <!--          </div>-->

    <!--          <div class="pipe-order-form__email">-->
    <!--            <label class="pipe-order-form__email-label" for="pipe-order-form__email-input">-->
    <!--              E-mail:-->
    <!--            </label>-->
    <!--            <input-->
    <!--              class="pipe-order-form__email-input"-->
    <!--              id="pipe-order-form__email-input"-->
    <!--              placeholder="vodouzel@mail.ru"-->
    <!--            />-->
    <!--          </div>-->

    <!--          <div class="pipe-order-form__button">-->
    <!--            <input-->
    <!--              type="button"-->
    <!--              class="pipe-order-form__button-input orange-button"-->
    <!--              id="pipe-order-form__button-input"-->
    <!--              value="Оставить заявку"-->
    <!--            />-->
    <!--            <label class="pipe-order-form__button-label" for="pipe-order-form__button-input">-->
    <!--              Нажимая кнопку, вы соглашаетесь с условиями политики конфиденциальности-->
    <!--            </label>-->
    <!--          </div>-->
    <!--        </form>-->
    <!--      </div>-->
    <!--    </section>-->
  </main>
</template>

<script setup>
import Carousel from '@/components/common/Carousel.vue'
import Rename from '@/components/common/Rename.vue'
import HelpForm from '@/components/common/HelpForm.vue'
import Breadcrumbs from '@/components/common/Breadcrumbs.vue'
</script>

<style scoped>
/* ========== NODES SECTION ========== */
.nodes-section {
  background-color: #e1e4ef;
  background-clip: padding-box;
}

/* ========== NODES SELECTION ========== */
.nodes-selection {
  margin: 0;
  padding: 20px 32px 32px;
  height: 735px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-image: url('@/assets/img/nodes-selection__back.png');
  background-size: cover;
}

.nodes-selection__h2 {
  font-size: 48px;
  font-weight: 700;
  color: #002d82;
}

.nodes-selection__p {
  margin-top: 20px;
  width: 540px;
  font-size: 20px;
  font-weight: 400;
  color: #18182f;
}

.nodes-selection__button {
  margin-top: 40px;
  background-color: #ea5a00;
  border: none;
  border-radius: 4px;
  color: white;
  width: 320px;
  height: 44px;
  font-weight: 400;
  font-size: 20px;
  cursor: pointer;
}

/* ========== NODES ROSTER ========== */
.nodes-roster {
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 32px;
}

.nodes-roster-item {
  display: flex;
  height: 200px;
  justify-content: space-between;
  background-color: #f2f2f8;
  border-radius: 4px;
}

.nodes-roster-item__content {
  margin: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.nodes-roster-item__name {
  font-size: 16px;
  font-weight: 500;
  color: #002d82;
}

.nodes-roster-item__number {
  font-size: 20px;
  font-weight: 400;
  color: #7990bd;
}

.nodes-roster-item__img {
  height: 100%;
}

/* ========== ABOUT NODES SECTION ========== */
.about-nodes-section {
  padding-top: 110px;
  padding-bottom: 90px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-bottom: 1px solid #d9d9d9;
}

.about-nodes-section__type-and-name {
  grid-column: 1/4;
}

.about-nodes-section__type {
  color: #002d82;
  font-weight: 400;
}

.about-nodes-section__type::before {
  content: url('@/assets/img/orange-circle.png');
  margin-right: 6px;
}

.about-nodes-section__name {
  font-family: 'Manrope', sans-serif;
  margin-top: 20px;
  width: 66%;
  color: #002d82;
  font-size: 36px;
  font-weight: 700;
}

.about-nodes-section__block {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column: 1/5;
}

.about-nodes-section__big-text {
  margin-top: 60px;
  grid-column: 2/4;
  font-size: 20px;
  font-weight: 400;
  color: #18182f;
}

.about-nodes-section__text {
  margin-top: 40px;
  grid-column: 2/4;
  font-size: 16px;
  font-weight: 400;
  color: #4f4f5f;
}

.about-nodes-section__short-text {
  margin-top: 20px;
  grid-column: 2/4;
  font-size: 16px;
  font-weight: 400;
  color: #4f4f5f;
  width: 430px;
}

/* ========== ALBUM SECTION ========== */
.album-section {
  padding-top: 81px;
  padding-bottom: 120px;
  border-bottom: 1px solid #7990bd;
  background-color: #f3f5f7;
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 32px;
}

.album-section__type {
  color: #002d82;
  font-weight: 400;
}

.album-section__type::before {
  content: url('@/assets/img/orange-circle.png');
  margin-right: 6px;
}

.album-section__name {
  font-family: 'Manrope', sans-serif;
  margin-top: 20px;
  color: #002d82;
  font-size: 36px;
  font-weight: 700;
}

.album-section__name2 {
  font-family: 'Manrope', sans-serif;
  margin-top: 40px;
  color: #3c3c50;
  font-size: 20px;
  font-weight: 400;
}

.album-section__content {
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.album-section__big-text {
  color: #18182f;
  font-size: 20px;
  font-weight: 400;
  grid-column: 1/3;
}

.album-section__text {
  margin-top: 20px;
  color: #4f4f5f;
  font-size: 16px;
  font-weight: 400;
  grid-column: 1/3;
}

.album-section__pdfs {
  margin-top: 60px;
  margin-bottom: 90px;
  grid-column: 1/4;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
}

.pdf {
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 160px;
}

.pdf__text {
  font-size: 16px;
  font-weight: 500;
  color: #002d82;
}

.pdf-imgs {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.pdf__download {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.pdf__img {
  width: 38px;
  height: 46px;
}

/* ========== NODES DETAILS SECTION ========== */
.nodes-details-section {
  padding-top: 120px;
  padding-bottom: 90px;
  background-color: #f3f5f7;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 32px;
}

.nodes-details-section__type-and-name {
  grid-column: 1/5;
}

.nodes-details-section__type {
  color: #002d82;
  font-weight: 400;
}

.nodes-details-section__type::before {
  content: url('@/assets/img/orange-circle.png');
  margin-right: 6px;
}

.nodes-details-section__name {
  width: 666px;
  font-family: 'Manrope', sans-serif;
  margin-top: 20px;
  color: #002d82;
  font-size: 36px;
  font-weight: 700;
}

.nodes-details-section__content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 60px;
  grid-column: 1/5;
}

.nodes-details-section__big-text {
  grid-column: 2/4;
  color: #18182f;
  font-size: 20px;
  font-weight: 400;
}

.nodes-details-section__text {
  grid-column: 2/4;
  margin-top: 20px;
  color: #4f4f5f;
  font-size: 16px;
  font-weight: 400;
}

.nodes-details-section__list-div {
  grid-column: 2/4;
  margin-top: 40px;
}

.nodes-details-section__list-p {
  color: #4f4f5f;
  font-size: 16px;
  font-weight: 400;
}

.nodes-details-section__list {
  margin: 20px 0 40px 16px;
  column-count: 2;
}

.nodes-details-section__list-item {
  margin-bottom: 10px;
  color: #4f4f5f;
  font-size: 16px;
  font-weight: 400;
}

.nodes-details-section__list-item::marker {
  color: #ea5a00;
  font-size: 22px;
}

/* ========== QUESTIONNAIRE SECTION ========== */
.questionnaire-section {
  padding: 120px 32px;
}

.questionnaire-section__h2 {
  width: 666px;
  font-size: 40px;
  color: #002d82;
}

.questionnaire-section__select {
  display: flex;
  margin-top: 90px;
  border-bottom: 1px solid #7990bd;
}

.questionnaire-section__select-item {
  font-size: 30px;
  font-weight: 700;
  color: #6d6d6d;
}

.questionnaire-section__select-item:not(:first-of-type) {
  margin-left: 40px;
}

.questionnaire-section__select-item_selected {
  color: #002d82;
  padding-bottom: 38px;
  border-bottom: 6px solid #002d82;
}

.questionnaire-section__content {
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 32px;
}

.questionnaire-section__big-text {
  font-size: 30px;
  font-weight: 700;
  color: #18182f;
}

.questionnaire-section__text {
  margin-top: 40px;
  font-size: 16px;
  font-weight: 400;
  color: #4f4f5f;
}

/* ========== PIPE ORDER FORM ========== */
.pipe-order-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.pipe-order-form__material,
.pipe-order-form__type,
.pipe-order-form__number-list,
.pipe-order-form__wanted-material,
.pipe-order-form__username,
.pipe-order-form__phone,
.pipe-order-form__email {
  height: 79px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.pipe-order-form__diameter,
.pipe-order-form__necessity,
.pipe-order-form__armature-type,
.pipe-order-form__complete-it {
  height: 107px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.pipe-order-form__wishes {
  height: 179px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-column: 1/3;
}

.pipe-order-form__button {
  display: flex;
  align-items: center;
  grid-column: 1/3;
}

.pipe-order-form__material-label,
.pipe-order-form__type-label,
.pipe-order-form__number-list-label,
.pipe-order-form__wanted-material-label,
.pipe-order-form__diameter-label,
.pipe-order-form__necessity-label,
.pipe-order-form__armature-type-label,
.pipe-order-form__complete-it-label,
.pipe-order-form__wishes-label,
.pipe-order-form__username-label,
.pipe-order-form__phone-label,
.pipe-order-form__email-label {
  font-size: 16px;
  font-weight: 500;
  color: #18182f;
}

.pipe-order-form__number-list-input,
.pipe-order-form__wanted-material-input,
.pipe-order-form__diameter-input,
.pipe-order-form__username-input,
.pipe-order-form__phone-input,
.pipe-order-form__email-input,
.pipe-order-form__material-select,
.pipe-order-form__type-select,
.pipe-order-form__armature-type-select {
  height: 50px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  padding: 13px 0 13px 16px;
  font-size: 20px;
  font-weight: 400;
  color: #18182f;
}

.pipe-order-form__necessity-button1,
.pipe-order-form__necessity-button2,
.pipe-order-form__complete-it-button1,
.pipe-order-form__complete-it-button2 {
  width: 114px;
  height: 50px;
  border: 1px solid #d9d9d9;
  color: #18182f;
  font-size: 20px;
  font-weight: 400;
  background-color: white;
  cursor: pointer;
}

.pipe-order-form__necessity-button2,
.pipe-order-form__complete-it-button2 {
  margin-left: 10px;
}

.pipe-order-form__button-input {
  width: 207px;
  height: 46px;
  background-color: #ea5a00;
  color: white;
  font-size: 20px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.pipe-order-form__button-label {
  color: #6d6d6d;
  font-size: 16px;
  font-weight: 400;
  width: 440px;
  margin-left: 13px;
}

.pipe-order-form__wishes-input {
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  height: 150px;
  color: #6d6d6d;
  font-size: 20px;
  font-weight: 400;
  padding: 13px 0 13px 16px;
}

/* ========== АДАПТИВ (768px) ========== */
@media screen and (max-width: 768px) {
  .nodes-selection {
    padding: 20px 24px 24px;
    height: 735px;
  }

  .nodes-selection__h2 {
    font-size: 48px;
  }

  .nodes-selection__p {
    width: 540px;
  }

  .nodes-roster {
    margin-top: 24px;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .nodes-roster-item {
    height: 200px;
  }

  .about-nodes-section {
    padding-top: 110px;
    padding-bottom: 90px;
    display: block;
  }

  .about-nodes-section__name {
    width: 66%;
    font-size: 36px;
  }

  .about-nodes-section__big-text {
    font-size: 20px;
  }

  .about-nodes-section__text {
    font-size: 16px;
  }

  .about-nodes-section__short-text {
    width: 430px;
  }

  .about-nodes-section__block {
    display: block;
  }

  .album-section {
    display: block;
    padding-top: 120px;
    padding-bottom: 120px;
  }

  .album-section__name {
    font-size: 36px;
  }

  .album-section__name2 {
    font-size: 20px;
  }

  .album-section__content {
    display: block;
    padding-top: 40px;
  }

  .album-section__pdfs {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .nodes-details-section {
    display: block;
    padding-top: 120px;
    padding-bottom: 90px;
  }

  .nodes-details-section__name {
    width: 100%;
    font-size: 36px;
  }

  .nodes-details-section__content {
    display: block;
    margin-top: 40px;
  }

  .nodes-details-section__list {
    column-count: 2;
  }

  .questionnaire-section {
    padding: 120px 32px;
  }

  .questionnaire-section__h2 {
    width: 666px;
    font-size: 40px;
  }

  .questionnaire-section__select-item {
    font-size: 30px;
  }

  .questionnaire-section__content {
    display: block;
  }

  .pipe-order-form {
    margin-top: 40px;
    grid-template-columns: repeat(2, 1fr);
  }

  .pipe-order-form__wishes {
    grid-column: 1/3;
  }

  .pipe-order-form__button {
    grid-column: 1/3;
  }
}

/* ========== АДАПТИВ (375px) ========== */
@media screen and (max-width: 375px) {
  .nodes-selection {
    padding: 16px 16px 16px 32px;
    height: 600px;
  }

  .nodes-selection__h2 {
    font-size: 30px;
  }

  .nodes-selection__p {
    width: 100%;
    font-size: 16px;
  }

  .nodes-selection__button {
    margin-top: 32px;
    width: 100%;
    height: 39px;
    font-size: 16px;
  }

  .nodes-roster {
    margin-top: 16px;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 16px;
  }

  .nodes-roster-item {
    height: 160px;
  }

  .nodes-roster-item__name {
    font-size: 16px;
  }

  .nodes-roster-item__number {
    font-size: 20px;
  }

  .about-nodes-section {
    padding-top: 110px;
    padding-bottom: 90px;
    display: block;
  }

  .about-nodes-section__name {
    width: 100%;
    font-size: 26px;
  }

  .about-nodes-section__big-text {
    font-size: 18px;
  }

  .about-nodes-section__text {
    font-size: 14px;
  }

  .about-nodes-section__short-text {
    width: 100%;
    font-size: 14px;
  }

  .album-section {
    padding-top: 90px;
    padding-bottom: 90px;
    display: block;
  }

  .album-section__name {
    font-size: 26px;
  }

  .album-section__name2 {
    font-size: 16px;
  }

  .album-section__content {
    display: block;
    padding-top: 32px;
  }

  .album-section__big-text {
    font-size: 16px;
  }

  .album-section__text {
    font-size: 14px;
  }

  .album-section__pdfs {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 20px;
  }

  .pdf {
    height: 140px;
  }

  .nodes-details-section {
    padding-top: 90px;
    padding-bottom: 90px;
    display: block;
  }

  .nodes-details-section__name {
    font-size: 26px;
  }

  .nodes-details-section__big-text {
    font-size: 18px;
  }

  .nodes-details-section__text {
    font-size: 14px;
  }

  .nodes-details-section__list {
    column-count: 1;
  }

  .nodes-details-section__list-item {
    font-size: 14px;
  }

  .questionnaire-section {
    padding: 90px 32px;
  }

  .questionnaire-section__h2 {
    width: 66%;
    font-size: 26px;
  }

  .questionnaire-section__select {
    margin-top: 60px;
  }

  .questionnaire-section__select-item {
    font-size: 22px;
  }

  .questionnaire-section__select-item:not(:first-of-type) {
    margin-left: 40px;
  }

  .questionnaire-section__select-item_selected {
    padding-bottom: 38px;
  }

  .questionnaire-section__content {
    margin-top: 40px;
    display: block;
  }

  .questionnaire-section__big-text {
    font-size: 22px;
  }

  .questionnaire-section__text {
    font-size: 14px;
  }

  .pipe-order-form {
    grid-template-columns: repeat(1, 1fr);
  }

  .pipe-order-form__wishes {
    height: 329px;
  }

  .pipe-order-form__button {
    display: block;
  }

  .pipe-order-form__button-label {
    margin-left: 0;
    margin-top: 22px;
    width: 100%;
  }

  .pipe-order-form__wishes-input {
    height: 300px;
  }
}
</style>
