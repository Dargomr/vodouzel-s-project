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

<style>
@import '@/assets/css/1440px.css';
@import '@/assets/css/768px.css';
@import '@/assets/css/375px.css';

.reasons-section__cards {
  /* margin-left: 120px; */
  display: grid;

  /* flex-wrap: wrap; */

  /* justify-content: space-between; */
  grid-template-columns: repeat(3, 1fr);
  column-gap: 33px;
}
</style>
