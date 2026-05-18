<template>
  <main class="item-inner-page3-main">
    <section class="">
      <Breadcrumbs
        :breadcrumbs-items="[
          { path: '/', name: 'Главная' },
          { path: '/catalog', name: 'Каталог' },
          { path: '/catalog/gates', name: 'Задвижки' },
          { path: '/catalog/gates/cast-iron-gates', name: 'Задвижки чугунные' },
          {
            path: '/catalog/gates/cast-iron-gates//Ct-17y',
            name: 'Задвижка чугунная КНР 30ч39р Ду50 Ру16',
          },
        ]"
      />
      <div class="product-page3">
        <img
          class="product-page3__img"
          src="@/assets/img/item-page4__item-img.png"
          alt="item-img"
        />
        <button class="product-page3__back-button">Назад</button>
        <div class="product-page3__header">
          <h3 class="product-page3__h3">Ультразвуковой теплосчётчик СТ-17У (ВОДОМЕР)</h3>
          <p class="product-page3__article">
            Артикул:
            <span class="product-page3__article-span">123456</span>
          </p>
          <p class="product-page3__price">
            от
            <span class="product-page3__price-span">5 600</span>
            ₽
          </p>
          <button class="product-page3__button-price orange-button">Узнать цену</button>
        </div>
        <div class="product-page3__details-content">
          <div class="product-page3__details-column">
            <p class="product-page3__details-p">
              Производитель:&nbsp;
              <span class="details-prob">Водомер</span>
            </p>
            <p class="product-page3__details-p">
              Температура воды:&nbsp;
              <span class="details-prob">5 ÷ 95°С</span>
            </p>
            <p class="product-page3__details-p">
              Монтажная длина:&nbsp;
              <span class="details-prob">130 мм</span>
            </p>
            <p class="product-page3__details-p">
              Диапазон расхода:&nbsp;
              <span class="details-prob">0,025...5,0 м3/час</span>
            </p>
          </div>
          <div class="product-page3__details-column">
            <p class="product-page3__details-p">
              Межповерочный интервал:&nbsp;
              <span class="details-prob">6 лет</span>
            </p>
            <p class="product-page3__details-p">
              Гарантия:&nbsp;
              <span class="details-prob">24 месяца</span>
            </p>
            <p class="product-page3__details-p">
              Класс точности:&nbsp;
              <span class="details-prob">B</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="german-quality-section2">
      <div class="german-quality-section__select">
        <p class="german-quality-section__select-item german-quality-section__select-item_basis">
          Характеристики
        </p>
        <p class="german-quality-section__select-item german-quality-section__select-item_selected">
          Описание
        </p>
        <p class="questionnaire-section__select-item">Документация</p>
      </div>
      <Rename
        main-class="upToDownBlock"
        :with-h2="false"
        name="Квартирный ультразвуковой теплосчетчик СТ-17У"
      >
        <div class="german-quality-section__content">
          <p class="german-quality-section__big-text">
            СТ-17У (счетчик тепла, Ду15, Ду20) предназначен для измерения тепловой энергии и других
            параметров теплоносителя в закрытых системах водяного отопления.
          </p>
          <p class="german-quality-section__text">
            Данные сиситемы отопления используются небольшими объектами, такими как квартиры, с
            тепловой мощностью от 0,3 кВт до 850 кВт. В качестве теплоносителя используется вода,
            соответствующая требованиям СП 124.13330.2012.
            <br />
            <br />
            Теплосчетчики СТ-17У производятся в соответствии с ТУ 26.51.70-005-06469904-2017 и
            полностью соответствуют стандартам как европейским, так и российским.
            <br />
            <br />
            Модель СТ-17У представлена в двух вариантах, которые различаются используемыми
            уравнениями для измерения тепловой энергии в зависимости от типа трубопровода (подающего
            или обратного), на котором осуществляется учет объема теплоносителя. Выпускаются два
            типоразмера теплосчетчиков СТ-17У, отличающиеся значениями расхода воды и номинальными
            диаметрами: СТ-17У-1,5-15 и СТ-17-2,5-20.
            <br />
            <br />
            Принцип действия теплосчётчиков состоит в обработке вычислителем измерительных сигналов,
            поступающих от ультразвукового датчика объёмного расхода (далее – датчик объёмного
            расхода), пары термопреобразователей сопротивления Pt 1000 (далее – пары датчиков
            температуры), вычисления и отображения на индикаторном устройстве вычислителя (далее –
            индикаторное устройство) результатов измерений:
          </p>
          <div class="ultrasonic-heatmeter-section__list-div">
            <ul class="ultrasonic-heatmeter-section__list">
              <li class="ultrasonic-heatmeter-section__list-item">
                суммарного с нарастающим итогом значения количества тепловой энергии, Гкал;
              </li>
              <li class="ultrasonic-heatmeter-section__list-item">
                текущих значений температуры и разности температур теплоносителя, °С;
              </li>
              <li class="ultrasonic-heatmeter-section__list-item">
                текущего значения объёмного расхода теплоносителя, м3/ч;
              </li>
              <li class="ultrasonic-heatmeter-section__list-item">
                суммарного с нарастающим итогом значения объёма теплоносителя, м3.
              </li>
            </ul>
          </div>
          <p class="german-quality-section__big-text">
            Теплосчётчики конструктивно выполнены в виде единых теплосчётчиков, соответствующих
            классу 2 по ГОСТ Р ЕН 1431-1-2011.
          </p>
          <p class="german-quality-section__text">
            Теплосчётчики выпускаются в четырёх модификациях, отличающихся номинальным расходом и
            диаметром условного прохода. Данные модификации имеют различные исполнения, которые
            отличаются форм-фактором корпуса вычислителя, местом установки (подающий или обратный
            трубопровод) датчика объёмного расхода и интерфейсами связи. Для передачи результатов
            измерений во внешние устройства теплосчётчики комплектуются интерфейсом связи: M-bus,
            RS-485, Wireless M-bus, LoRaWan, NB-IoT, оптический интерфейс, импульсный выход.
            <br />
            <br />
            В архиве энергонезависимой памяти теплосчётчика хранятся результаты измерений и
            диагностическая информация. Ёмкость архива теплосчётчиков не менее: часового – 60 суток,
            суточного – 6 месяцев, месячного – 38 месяцев.
          </p>
        </div>
      </Rename>
    </section>

    <section class="char-table-section">
      <table class="char-table">
        <tbody>
          <tr>
            <td>a</td>
            <td>1</td>
          </tr>
          <tr>
            <td>b</td>
            <td>2</td>
          </tr>
          <tr>
            <td>c</td>
            <td>3</td>
          </tr>
          <tr>
            <td>d</td>
            <td>4</td>
          </tr>
          <tr>
            <td>e</td>
            <td>5</td>
          </tr>
          <tr>
            <td>f</td>
            <td>6</td>
          </tr>
          <tr>
            <td>g</td>
            <td>7</td>
          </tr>
          <tr>
            <td>h</td>
            <td>8</td>
          </tr>
        </tbody>
      </table>

      <table class="char-table">
        <caption class="char-table-caption">
          Метрологические характеристики теплосчетчиков СТ-17У.
        </caption>
        <thead>
          <tr>
            <th rowspan="2">Параметр (характеристика)</th>
            <th colspan="2">Значение параметра</th>
          </tr>
          <tr>
            <th>теплосчетчик</th>
            <th>теплосчетчик</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>a</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>b</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>c</td>
            <td>3</td>
            <td>3</td>
          </tr>
          <tr>
            <td>d</td>
            <td>4</td>
            <td>4</td>
          </tr>
          <tr>
            <td>e</td>
            <td>5</td>
            <td>5</td>
          </tr>
          <tr>
            <td>f</td>
            <td colspan="2">6</td>
          </tr>
          <tr>
            <td>g</td>
            <td colspan="2">7</td>
          </tr>
          <tr>
            <td>h</td>
            <td colspan="2">8</td>
          </tr>
          <tr>
            <td>h</td>
            <td colspan="2">8</td>
          </tr>
          <tr>
            <td>h</td>
            <td colspan="2">8</td>
          </tr>
          <tr>
            <td>h</td>
            <td colspan="2">8</td>
          </tr>
        </tbody>
      </table>
    </section>

    <HelpForm />
  </main>
</template>

<script setup>
import HelpForm from '@/components/common/HelpForm.vue'
import Rename from '@/components/common/Rename.vue'
import Breadcrumbs from '@/components/common/Breadcrumbs.vue'
</script>

<style scoped>
@import '@/assets/css/1440px.css';
@import '@/assets/css/768px.css';
@import '@/assets/css/375px.css';

.rename-section {
  grid-column: 1/5;
}

.german-quality-section__name-div {
  grid-column: 1/3;
}

.german-quality-section2 {
  padding-top: 0;
  padding-bottom: 0;
  background-color: #f3f5f7;
  display: grid;
  column-gap: 32px;
}

.german-quality-section__content {
  display: grid;
  grid-column: 1/5;
  grid-template-columns: repeat(4, 1fr);
}

.upToDownBlock__content .german-quality-section__name-div {
  grid-column: 2/4;
}

.upToDownBlock__content .german-quality-section__big-text {
  grid-column: 2/4;
}

.german-quality-section__big-text {
  grid-column: 2/4;
}

.german-quality-section__text {
  grid-column: 2/4;
}

.upToDownBlock__content .ultrasonic-heatmeter-section__list-div {
  grid-column: 2/4;
  margin-top: 0;
}

.ultrasonic-heatmeter-section__list {
  margin: 20px 0 40px 16px;
  column-count: 1;
}

.ultrasonic-heatmeter-section__list-item {
  margin-bottom: 10px;
  color: #4f4f5f;
  font-size: 16px;
  font-weight: 400;
}

.ultrasonic-heatmeter-section__list-item::marker {
  color: #ea5a00;
  font-size: 22px;
}

@media screen and (min-width: 375px) and (max-width: 768px) {
  .upToDownBlock__content {
    display: block;
  }

  .german-quality-section__content {
    display: block;
  }
}

@media screen and (max-width: 375px) {
  .upToDownBlock__content {
    display: block;
  }

  .german-quality-section__content {
    display: block;
  }
}
</style>
