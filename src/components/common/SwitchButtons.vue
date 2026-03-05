<template>
  <div>
    <button class="item-page__back-button">Назад</button>
    <button class="item-page__all-filters-button">Все фильтры</button>
    <button class="item-page__filter-button" @click="func">По возрастанию цены</button>
  </div>
</template>

<script setup>

import {onMounted, ref, computed} from 'vue'

const props = defineProps({
  store: String,
})

const importedStore = ref(null)

onMounted(async () => {
  try {
    const module = await import(`@/stores/${props.store}.js`)

    const storeName = `use${props.store.charAt(0).toUpperCase() + props.store.slice(1)}`

    if (module[storeName]) {
      importedStore.value = module[storeName]()
    } else {
      console.error(`Функция ${storeName} не найдена в модуле`)
    }
  } catch (error) {
    console.error('Ошибка загрузки стора:', error)
  }
})

const products = computed (() => importedStore.value?.products || [])



const comparePrice = (a, b) => {
  if (a.currPrice > b.currPrice) return -1;
  if (a.currPrice === b.currPrice) return 0;
  if (a.currPrice < b.currPrice) return 1;
}

const func = () => {
  const sortedProducts = [...products.value].sort(comparePrice)
  if (importedStore.value) {
    importedStore.value.products = sortedProducts
  }
}

</script>


<style scoped>

</style>