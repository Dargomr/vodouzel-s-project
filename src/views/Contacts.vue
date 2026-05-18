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
const breadcrumbsItems = [
  { path: '/', name: 'Главная' },
  { path: '/contacts', name: 'Контакты' },
]
</script>

<style scoped>
@import '@/assets/css/1440px.css';
@import '@/assets/css/768px.css';
@import '@/assets/css/375px.css';
</style>
