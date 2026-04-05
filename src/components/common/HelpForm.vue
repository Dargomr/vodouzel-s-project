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

<style scoped></style>
