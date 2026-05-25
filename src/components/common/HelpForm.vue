<template>
  <section class="help-section">
    <div class="help-section__texts">
      <h2 class="help-section__h2">
        Нужна помощь? Не знаете
        <br />
        подойдут ли комплектующие
        <br />
        для вашего проекта?
      </h2>
      <p class="help-section__text">
        Оставьте заявку на бесплатную
        <br />
        консультацию
      </p>
    </div>
    <form class="help-form">
      <div class="help-form__text-input">
        <div class="help-form__text-username-item">
          <label class="help-form__username-label" for="help-form__username">Имя:</label>
          <input
            class="help-form__username-input"
            id="help-form__username"
            type="text"
            placeholder="Иванов Иван"
          />
        </div>

        <div class="help-form__text-phone-item">
          <label class="help-form__phone-label" for="help-form__phone">Телефон:</label>
          <input
            class="help-form__phone-input"
            id="help-form__phone"
            type="number"
            placeholder="+7 ( ___ ) - ___ - __ - __"
          />
        </div>
      </div>
      <div class="help-form__submit-element">
        <input class="help-form__submit orange-button" type="submit" value="Оставить заявку" />
        <label class="help-form__submit-text">
          Нажимая кнопку, вы соглашаетесь
          <br />
          с условиями политики конфиденциальности
        </label>
      </div>
    </form>
  </section>
</template>

<script setup></script>
<style scoped>
.help-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 33px;
  padding-top: 120px;
  padding-bottom: 90px;
  background: #002d82;
}

.help-section__h2 {
  font-family: 'Manrope', sans-serif;
  color: white;
  font-size: 36px;
  font-weight: 700;
  line-height: 120%;
}

.help-section__text {
  margin-top: 40px;
  color: white;
  font-size: 20px;
  font-weight: 400;
  line-height: 120%;
}

.help-form__username-label,
.help-form__phone-label {
  color: white;
  display: block;
  font-size: 16px;
  font-weight: 400;
}

.help-form__username-input,
.help-form__phone-input {
  margin-top: 10px;
  background: #002d82;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  width: 100%;
  height: 50px;
  padding: 16px;
  font-size: 20px;
  box-sizing: border-box;
}

.help-form__username-input::placeholder,
.help-form__phone-input::placeholder {
  color: #5074b5;
  font-size: 20px;
}

.help-form__text-phone-item {
  margin-top: 30px;
}

.help-form__submit-element {
  margin-top: 66px;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
}

.help-form__submit {
  width: 207px;
  height: 46px;
  background: #ea5a00;
  color: white;
  font-size: 20px;
  font-weight: 400;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.help-form__submit:hover {
  background-color: #cd3700;
}

.help-form__submit-text {
  margin-left: 13px;
  color: white;
  font-size: 16px;
  font-weight: 400;
  opacity: 0.7;
}

/* Адаптив планшеты */
@media screen and (max-width: 768px) {
  .help-section {
    display: block;
    padding-top: 90px;
    padding-bottom: 90px;
  }

  .help-form {
    margin-top: 60px;
  }
}

/* Адаптив телефоны */
@media screen and (max-width: 375px) {
  .help-section {
    padding-top: 90px;
    padding-bottom: 66px;
  }

  .help-form__text-input {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .help-form__username-label,
  .help-section__phone-label {
    font-size: 14px;
  }

  .help-form__username-input,
  .help-form__phone-input {
    font-size: 18px;
  }

  .help-form__text-phone-item {
    margin-left: 0;
  }

  .help-form__submit-element {
    display: block;
    margin-top: 30px;
  }

  .help-form__submit {
    width: 100%;
    height: 44px;
    font-size: 18px;
  }

  .help-form__submit-text {
    margin-top: 20px;
    margin-left: 0;
    display: block;
  }
}
</style>
