<template>
  <main class="contacts-main">
    <Breadcrumbs :breadcrumbs-items="[{ path: '/', name: 'Главная' }, { name: 'Контакты' }]" />
    <Rename :with-h2="false" name="Контакты" :isFirstSection="true" noTopPadding="true">
      <div class="contacts-section__content">
        <div class="contacts-section__phone-and-email">
          <div class="contacts-section__phone">
            <p class="phone-label label">Телефон:</p>
            <p class="contacts-phone-number">8 800 201-55-30</p>
            <p class="phone-free">(по РФ бесплатно)</p>
          </div>
          <div class="contacts-section__email">
            <p class="email-label label">Почта:</p>
            <p class="email-text">pa21@bk.ru</p>
          </div>
        </div>
        <div class="contacts-section__massagers-and-address">
          <div class="contacts-section__massagers">
            <p class="massagers-label label">Телефон:</p>
            <p class="contacts-tg">Telegram</p>
            <p class="contacts-wa">WhatsApp</p>
          </div>
          <div class="contacts-section__address">
            <p class="address-label label">Адрес:</p>
            <p class="address-text">194292, Россия, г. Санкт-Петербург, ул. Верхняя, 12А</p>
          </div>
        </div>
      </div>
    </Rename>

    <section class="map-section"></section>

    <Rename blackTitle="Юридическая информация">
      <div class="legal-information-section__content">
        <div class="legal-information-section__first-page">
          <div class="legal-information-section__inn">
            <p class="inn-label label">ИНН::</p>
            <p class="inn-text">7816211489</p>
          </div>
          <div class="legal-information-section__kpp">
            <p class="kpp-label label">КПП:</p>
            <p class="kpp-text">780201001</p>
          </div>
          <div class="legal-information-section__ogrn">
            <p class="ogrn-label label">ОГРН:</p>
            <p class="ogrn-text">1027807975953</p>
          </div>
          <div class="legal-information-section__okpo">
            <p class="okpo-label label">Код ОКПО:</p>
            <p class="okpo-text">54213583</p>
          </div>
          <div class="legal-information-section__oktmo">
            <p class="oktmo-label label">ОКТМО:</p>
            <p class="oktmo-text">40317000</p>
          </div>
        </div>
        <div class="legal-information-section__second-page">
          <div class="legal-information-section__payment-account">
            <p class="payment-account-label label">Расчетный счет:</p>
            <p class="payment-account-text">40702810932210001232</p>
          </div>
          <div class="legal-information-section__bank">
            <p class="bank-label label">Банк:</p>
            <p class="bank-text">
              Филиал «Санкт-Петербургский», АО «АЛЬФА-БАНК» г. Санкт-Петербург
            </p>
          </div>
          <div class="legal-information-section__kc">
            <p class="kc-label label">К/С:</p>
            <p class="email-text">30101810600000000786</p>
          </div>
          <div class="legal-information-section__bik">
            <p class="bik-label label">БИК:</p>
            <p class="bik-text">044030786</p>
          </div>
        </div>
      </div>
    </Rename>
  </main>
</template>

<script setup>
import Rename from '@/components/common/Rename.vue'
import Breadcrumbs from '@/components/common/Breadcrumbs.vue'
</script>

<style scoped>
.contacts-main {
  background-color: #f2f2f8;
}

.label {
  font-size: 20px;
  font-weight: 400;
  color: #6d6d6d;
}

.phone-free {
  font-size: 16px;
  font-weight: 400;
  color: #6d6d6d;
}

.legal-information-section__h2 {
  font-size: 30px;
  font-weight: 700;
  color: #18182f;
}

.contacts-section__phone .contacts-phone-number,
.email-text,
.contacts-tg,
.contacts-wa,
.address-text,
.inn-text,
.kpp-text,
.ogrn-text,
.okpo-text,
.oktmo-text,
.payment-account-text,
.bank-text,
.bik-text {
  margin-top: 10px;
  font-size: 30px;
  font-weight: 400;
  color: #18182f;
}

.contacts-section {
  padding-top: 20px;
}

.contacts-section__contacts {
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 33px;
}

.contacts-section__h2 {
  font-size: 36px;
  font-weight: 700;
  color: #002d82;
}

.contacts-section__content {
  margin-top: 0;
}

.contacts-section__phone-and-email {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.contacts-section__massagers-and-address {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.map-section {
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 120px;
  height: 500px;
  background: url('@/assets/img/catalog-map-1440px.png') center;
  background-size: cover;
}

.legal-information-section {
  margin-top: 120px;
  padding-bottom: 120px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 33px;
}

.legal-information-section__content {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.legal-information-section__first-page div:not(:first-of-type),
.legal-information-section__second-page div:not(:first-of-type) {
  margin-top: 40px;
}

/* Адаптив планшеты */
@media screen and (max-width: 768px) {
  .label {
    font-size: 20px;
  }

  .phone-free {
    font-size: 16px;
  }

  .legal-information-section__h2 {
    font-size: 32px;
  }

  .contacts-section__phone .contacts-phone-number,
  .email-text,
  .contacts-tg,
  .contacts-wa,
  .address-text,
  .inn-text,
  .kpp-text,
  .ogrn-text,
  .okpo-text,
  .oktmo-text,
  .payment-account-text,
  .bank-text,
  .bik-text {
    margin-top: 10px;
    font-size: 30px;
  }

  .contacts-section {
    padding-top: 20px;
  }

  .contacts-section__contacts {
    margin-top: 60px;
    display: block;
  }

  .contacts-section__h2 {
    font-size: 36px;
  }

  .contacts-section__content {
    margin-top: 40px;
  }

  .contacts-section__phone-and-email {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .contacts-section__massagers-and-address {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .map-section {
    margin-top: 60px;
    height: 500px;
    background: url('@/assets/img/catalog-map-768px.png') center;
    background-size: cover;
  }

  .legal-information-section {
    margin-top: 60px;
    padding-bottom: 120px;
    display: block;
  }

  .legal-information-section__content {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .legal-information-section__first-page div:not(:first-of-type),
  .legal-information-section__second-page div:not(:first-of-type) {
    margin-top: 40px;
  }
}

/* Адаптив телефоны */
@media screen and (max-width: 375px) {
  .label {
    font-size: 18px;
  }

  .phone-free {
    font-size: 14px;
  }

  .legal-information-section__h2 {
    font-size: 24px;
    font-weight: 500;
  }

  .contacts-section__phone .contacts-phone-number,
  .email-text,
  .contacts-tg,
  .contacts-wa,
  .address-text,
  .inn-text,
  .kpp-text,
  .ogrn-text,
  .okpo-text,
  .oktmo-text,
  .payment-account-text,
  .bank-text,
  .bik-text {
    margin-top: 10px;
    font-size: 22px;
  }

  .contacts-section {
    padding-top: 16px;
  }

  .contacts-section__contacts {
    margin-top: 60px;
    display: block;
  }

  .contacts-section__h2 {
    font-size: 32px;
  }

  .contacts-section__content {
    margin-top: 40px;
  }

  .contacts-section__phone-and-email {
    display: block;
  }

  .contacts-section__email {
    margin-top: 32px;
  }

  .contacts-section__massagers-and-address {
    margin-top: 32px;
    display: block;
  }

  .contacts-section__address {
    margin-top: 32px;
  }

  .map-section {
    margin-top: 60px;
    height: 500px;
    background: url('@/assets/img/catalog-map-768px.png') center;
    background-size: cover;
  }

  .legal-information-section {
    margin-top: 60px;
    padding-bottom: 90px;
    display: block;
  }

  .legal-information-section__content {
    margin-top: 32px;
    display: block;
  }

  .legal-information-section__second-page {
    margin-top: 32px;
  }

  .legal-information-section__first-page div:not(:first-of-type),
  .legal-information-section__second-page div:not(:first-of-type) {
    margin-top: 32px;
  }
}
</style>
