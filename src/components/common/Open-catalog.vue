<template>
  <div class="open-catalog__main">
    <section class="open-catalog__section">
      <div class="open-catalog-header">
        <h2 class="open-catalog-h2">Каталог продукции</h2>
        <button @click="$emit('close')" class="open-catalog-close-button">Закрыть</button>
      </div>
      <div class="open-catalog-content">
        <div class="open-catalog__item">
          <h3 class="open-catalog-h3">Водомерные узлы</h3>
          <p class="open-catalog-p">Одноветочный</p>
          <p class="open-catalog-p">Двухветочный</p>
          <p class="open-catalog-p">С раздельным пожаротушением</p>
        </div>

        <div class="open-catalog__item">
          <h3 class="open-catalog-h3">Счетчики воды</h3>
          <p class="open-catalog-p">Квартирные</p>
          <p class="open-catalog-p">Электронный (цифровые)</p>
          <p class="open-catalog-p">Крыльчатые</p>
          <p class="open-catalog-p">Турбинные</p>
          <p class="open-catalog-p">Комбинированные</p>
          <p class="open-catalog-p">Класса точности «С»</p>
          <p class="open-catalog-p">С защитой IP68</p>
          <p class="open-catalog-p">Ирригационные</p>
          <p class="open-catalog-p">Электромагнитные расходомеры</p>
          <p class="open-catalog-p">Ультразвуковые расходомеры</p>
        </div>

        <div class="open-catalog__item">
          <h3 class="open-catalog-h3">Теплосчетчики и тепловычислители</h3>
          <p class="open-catalog-p">Бытовые</p>
          <div class="attached">
            <p class="attached-p">Эльф Сенсоник</p>
            <p class="attached-p">СТ - 17У</p>
          </div>
          <p class="open-catalog-p">Промышленные</p>
          <div class="attached">
            <p class="attached-p">ВТЭ - 2</p>
          </div>
        </div>

        <div class="open-catalog__item">
          <h3 class="open-catalog-h3">Контрольно-измерительные приборы</h3>
          <p class="open-catalog-p">Манометры</p>
          <p class="open-catalog-p">Термометры</p>
          <p class="open-catalog-p">Бобышки и отборные устройства</p>
        </div>

        <div class="open-catalog__item">
          <h3 class="open-catalog-h3">Задвижки</h3>
          <p class="open-catalog-p">Обрезиненные</p>
          <p class="open-catalog-p">Чугунные</p>
          <p class="open-catalog-p">Стальные</p>
          <p class="open-catalog-p">Шиберные</p>
          <p class="open-catalog-p">Задвижки под электропривод</p>
        </div>

        <div class="open-catalog__item">
          <h3 class="open-catalog-h3">Затворы</h3>
          <p class="open-catalog-p">Межфланцевые</p>
          <p class="open-catalog-p">Межфланцевые с электроприводом</p>
          <p class="open-catalog-p">Фланцевые</p>
          <p class="open-catalog-p">С эксцентриситетом</p>
          <p class="open-catalog-p">Электроприводы к затворам</p>
        </div>

        <div class="open-catalog__item">
          <h3 class="open-catalog-h3">Шаровые краны</h3>
          <p class="open-catalog-p">Фланцевые</p>
          <p class="open-catalog-p">Муфтовые</p>
          <p class="open-catalog-p">Приварные</p>
          <p class="open-catalog-p">Линейно регулирующие</p>
        </div>

        <div class="open-catalog__item">
          <h3 class="open-catalog-h3">Детали трубопровода</h3>
          <p class="open-catalog-p">Отводы крутоизогнутые</p>
          <p class="open-catalog-p">Переходы концентрические</p>
          <p class="open-catalog-p">Тройники</p>
          <p class="open-catalog-p">Резьбы, сгоны</p>
          <p class="open-catalog-p">Заглушки эллиптические</p>
          <p class="open-catalog-p">Фитинги стальные резьбовые</p>
          <p class="open-catalog-p">Фитинги чугунные резьбовые</p>
          <p class="open-catalog-p">Фитинги латунные резьбовые</p>
          <p class="open-catalog-p">Муфты соединительные</p>
          <p class="open-catalog-p">ПФРК и ДРК</p>
        </div>

        <div class="open-catalog__item">
          <h3 class="open-catalog-h3">Фильтры</h3>
          <p class="open-catalog-p">Фланцевые</p>
          <div class="attached">
            <p class="attached-p">Фильтр чугунный с магнитной вставкой</p>
            <p class="attached-p">Фланцевый</p>
          </div>
          <p class="open-catalog-p">Муфтовые</p>
          <div class="attached">
            <p class="attached-p">Латунный косой муфтовый</p>
          </div>
        </div>

        <div class="open-catalog__item">
          <h3 class="open-catalog-h3">Электроприводы и шкафы управления</h3>
          <p class="open-catalog-p">Однооборотные: четвертьоборотные</p>
          <p class="open-catalog-p">Многооборотные</p>
          <p class="open-catalog-p">Шкафы управления</p>
        </div>

        <div class="open-catalog__item">
          <h3 class="open-catalog-h3">Фланцы стальные</h3>
          <p class="open-catalog-p">Плоские фланцы ГОСТ 12820/33259</p>
          <p class="open-catalog-p">Воротниковые фланцы ГОСТ 12821/33259</p>
          <p class="open-catalog-p">Прижимные фланцы</p>
          <p class="open-catalog-p">Заглушки фланцевые</p>
        </div>

        <div class="open-catalog__item">
          <h3 class="open-catalog-h3">Клапаны</h3>
          <p class="open-catalog-p">Обратные</p>
          <p class="open-catalog-p">Подъёмные</p>
          <p class="open-catalog-p">Поворотные</p>
          <p class="open-catalog-p">Шаровые</p>
        </div>

        <div class="open-catalog__item">
          <h3 class="open-catalog-h3">Вентили</h3>
          <p class="open-catalog-p">Муфтовые</p>
          <p class="open-catalog-p">Фланцевые</p>
          <p class="open-catalog-p">Под приварку</p>
        </div>

        <div class="open-catalog__item">
          <h3 class="open-catalog-h3">Ньютон</h3>
          <p class="open-catalog-p">Работа с трубами, опрессовка</p>
          <p class="open-catalog-p">Электромонтажный инструмент</p>
          <p class="open-catalog-p">Инструмент для строительства</p>
        </div>

        <div class="open-catalog__item">
          <h3 class="open-catalog-h3">Пожарное оборудование</h3>
          <p class="open-catalog-p">Шкафы пожарные</p>
          <p class="open-catalog-p">Огнетушители</p>
          <p class="open-catalog-p">Стволы и рукава</p>
          <p class="open-catalog-p">Пожарная арматура</p>
          <p class="open-catalog-p">Щиты и стенды</p>
        </div>
      </div>
    </section>
    <button @click="$emit('close')" class="open-catalog-close-button-375px">Закрыть</button>
  </div>
</template>

<script setup>
defineEmits(['close'])
</script>

<style scoped>
.open-catalog__main {
  max-height: calc(100vh - 120px); /* отступ под шапку */
  background-color: white;
  border-top: 1px solid #f2f2f8;
  overflow-y: auto; /* скролл внутри */
  -webkit-overflow-scrolling: touch; /* ← плавный скролл на iOS */
}

.open-catalog__section {
  padding-top: 32px;
  padding-bottom: 32px;
}

.open-catalog-header {
  display: flex;
  justify-content: space-between;
}

.open-catalog-h2 {
  font-size: 30px;
  color: #002d82;
  font-weight: 700;
}

.open-catalog-close-button {
  width: 123px;
  height: 34px;
  color: #002d82;
  background-color: #e1e4ef;
  border: none;
  border-radius: 4px;
}

.open-catalog-content {
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 32px;
}

.open-catalog-h3 {
  font-size: 20px;
  color: #002d82;
  font-weight: 600;
}

.open-catalog-p,
.attached-p {
  font-size: 16px;
  color: #18182f;
  font-weight: 400;
  line-height: 120%;
}

.open-catalog-p:first-of-type {
  margin-top: 20px;
}

.open-catalog-p:not(:first-of-type),
.attached-p:not(:first-of-type) {
  margin-top: 8px;
}

.attached {
  padding: 14px 0 6px 20px;
}

.open-catalog-close-button-375px {
  width: 100%;
  height: 36px;
  background-color: #d9d9d9;
  color: #002d82;
  display: none;
}

@media screen and (max-width: 768px) {
  .open-catalog__main {
    max-height: calc(100vh - 80px);
  }

  .open-catalog__section {
    padding-top: 24px;
    padding-bottom: 40px;
  }

  .open-catalog-header {
    display: flex;
    justify-content: space-between;
  }

  .open-catalog-h2 {
    font-size: 30px;
    color: #002d82;
    font-weight: 700;
  }

  .open-catalog-close-button {
    width: 123px;
    height: 34px;
    color: #002d82;
    background-color: #e1e4ef;
    border: none;
    border-radius: 4px;
  }

  .open-catalog-content {
    margin-top: 41px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 24px;
  }

  .open-catalog-h3 {
    font-size: 20px;
    color: #002d82;
    font-weight: 600;
  }

  .open-catalog-p,
  .attached-p {
    font-size: 16px;
    color: #18182f;
    font-weight: 400;
    line-height: 120%;
  }

  .attached {
    padding: 14px 0 6px 20px;
  }

  .open-catalog-close-button-375px {
    width: 100%;
    height: 36px;
    background-color: #d9d9d9;
    color: #002d82;
    display: none;
  }
}

@media screen and (max-width: 375px) {
  .open-catalog__main {
    max-height: calc(100vh - 165px); /* отступ под шапку */
    border-top: none;
  }

  .open-catalog__section {
    padding-top: 32px;
    padding-bottom: 32px;
  }

  .open-catalog-header {
    display: block;
  }

  .open-catalog-h2 {
    font-size: 22px;
    color: #002d82;
    font-weight: 700;
  }

  .open-catalog-close-button {
    display: none;
  }

  .open-catalog-content {
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 32px;
  }

  .open-catalog-h3 {
    font-size: 18px;
    color: #002d82;
    font-weight: 600;
  }

  .open-catalog-p,
  .attached-p {
    font-size: 14px;
    color: #18182f;
    font-weight: 400;
    line-height: 120%;
  }

  .attached {
    padding: 14px 0 6px 20px;
  }

  .open-catalog-close-button-375px {
    margin: 0 16px;
    width: 100%;
    height: 36px;
    background-color: #d9d9d9;
    color: #002d82;
    display: block;
    position: fixed;
    bottom: 12px;
    border: none;
    border-radius: 4px;
  }
}
</style>
