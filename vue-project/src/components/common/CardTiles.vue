<template>
  <div class="clients-section__items">
    <img v-for="tile in tiles" class="clients-section__img" :src="tile.image" alt="tile">
  </div>
</template>

<script setup>
const props = defineProps({
  tiles: Array,
})
</script>


<style scoped>

</style>