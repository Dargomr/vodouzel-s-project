<template>
  <div
    v-if="isOnlyImages"
    :class="{
      'fittings-section__items': section.includes('FittingMeters'),
      'water-meters-section__items': section.includes('WaterMeters'),
      'clients-section__items': section.includes('OurClients'),
    }"
  >
    <img v-for="tile in tiles" class="item" :key="tile.id" :src="tile.src" :alt="tile.alt" />
  </div>

  <div v-else-if="prov" class="reasons-section__cards">
    <div v-for="card in tiles" class="card" :key="card.id">
      <div class="card__upper">
        <p class="card__name">{{ card.name }}</p>
        <p class="card__number">{{ card.number }}</p>
      </div>
      <img class="card__img" :src="card.src" :alt="card.alt" />
    </div>
  </div>

  <div v-else class="services-section__services">
    <div v-for="tile in tiles" class="service-item" :key="tile.id">
      <img class="service-item__img" :src="tile.src" :alt="tile.alt" />
      <div class="service-item__text">{{ tile.name }}</div>
    </div>
  </div>
</template>

<script setup>
import { useTilesStore } from '@/stores/TilesStore.js'
import { computed } from 'vue'

const tilesStore = useTilesStore()

const props = defineProps({
  section: {
    type: String,
    required: true,
  },
})

const tiles = computed(() => tilesStore.getTiles(props.section))

const prov = computed(() => {
  return props.section.includes('Reasons')
  // if (!tiles.value || tiles.value.length === 0) {
  //   return false
  // }
  // const expectedKeys = ['id', 'name', 'number', 'src', 'alt']
  // const keys = Object.keys(tiles.value[0])
  //
  // return expectedKeys.length !== keys.length && expectedKeys.every((key) => keys.includes(key))
})

const isOnlyImages = computed(() => {
  // if (!tiles.value || tiles.value.length === 0) {
  //   return false
  // }
  // const expectedKeys = ['id', 'src', 'alt']
  // const keys = Object.keys(tiles.value[0])
  // return expectedKeys.length !== keys.length && expectedKeys.every((key) => keys.includes(key))
  return (
    props.section.includes('FittingMeters') ||
    props.section.includes('WaterMeters') ||
    props.section.includes('OurClients')
  )
})
</script>

<style scoped>
/* Стили для карточек-картинок (FittingMeters, WaterMeters, OurClients) */
.fittings-section__items,
.water-meters-section__items,
.clients-section__items {
  display: grid;
  gap: 24px;
}

.fittings-section__items {
  grid-template-columns: repeat(3, 1fr);
  column-gap: 33px;
}

.fittings-section__items {
  margin-top: 58px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 33px;
}

.water-meters-section__items {
  grid-template-columns: repeat(4, 1fr);
  column-gap: 33px;
}

.clients-section__items {
  grid-template-columns: repeat(4, 1fr);
}

.item {
  width: 100%;
  transition: transform 0.5s ease;
}

.item:hover {
  transform: scale(1.2);
  border: 2px solid #e1e4ef;
}

.item__img {
  width: 100%;
}

/* Стили для карточек с причинами (Reasons) */
.reasons-section__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 33px;
}

.card {
  width: 100%;
  height: 200px;
  border: 1px solid #e1e4ef;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  transition: transform 0.5s ease;
  background-color: white;
  margin-bottom: 33px;
  flex: 0 0 30%;
}

.card:hover {
  transform: scale(1.2);
  border: 2px solid #e1e4ef;
}

.card__upper {
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
}

.card__name {
  color: #002d82;
  font-size: 16px;
  font-weight: 400;
}

.card__number {
  color: #7990bd;
  justify-self: end;
}

.card__img {
  width: 80px;
}

/* Стили для услуг (services) */
.services-section__services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px 24px;
}

.service-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  transition: transform 0.5s ease;
}

.service-item:hover {
  transform: scale(1.2);
  border: 2px solid #e1e4ef;
}

.service-item__img {
  width: 80px;
  height: 80px;
}

.service-item__text {
  margin-top: 40px;
  font-size: 16px;
  font-weight: 500;
  color: #002d82;
}

@media screen and (max-width: 1100px) {
  .fittings-section__items {
    margin-top: 58px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 27px;
  }
}

@media screen and (max-width: 900px) {
  .fittings-section__items {
    margin-top: 58px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 27px;
  }
}

/* Адаптив планшеты */
@media screen and (max-width: 768px) {
  .reasons-section__cards {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 24px;
  }

  .fittings-section__items {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 24px;
  }

  .water-meters-section__items {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 24px;
  }

  .clients-section__items {
    margin-top: 60px;
    grid-template-columns: repeat(3, 1fr);
  }

  .services-section__services {
    grid-template-columns: repeat(2, 1fr);
    gap: 60px 70px;
  }
}

@media screen and (max-width: 375px) {
  .reasons-section__cards {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }

  .fittings-section__items {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 16px;
  }

  .water-meters-section__items {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 16px;
  }

  .clients-section__items {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .services-section__services {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 32px;
  }

  .service-item {
    flex-direction: row;
    align-items: center;
  }

  .service-item__img {
    width: 60px;
    height: 60px;
  }

  .service-item__text {
    margin-top: 0;
    margin-left: 20px;
    font-size: 14px;
  }
}
</style>
