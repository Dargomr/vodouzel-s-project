<template>
  <button
    class="arrow-button"
    :class="[`arrow-button-${direction}`]"
    @click="$emit('click')"
    :disabled="disabled"
  ></button>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  direction: {
    type: String,
  },
  disabled: Boolean,
})

defineEmits(['click'])
</script>

<style scoped>
@import '@/assets/css/1440px.css';
@import '@/assets/css/768px.css';
@import '@/assets/css/375px.css';

.arrow-button {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: none;
  background-color: #002d82;
  color: #fff;
}

.arrow-button-prev:before {
  position: relative;
  left: 25px;
  display: block;
  content: '';
  width: 10px;
  height: 10px;
  border-bottom: 3px solid white;
  border-left: 3px solid white;
  transform: rotate(45deg);
}

.arrow-button-next:before {
  position: relative;
  left: 21px;
  display: block;
  content: '';
  width: 10px;
  height: 10px;
  border-bottom: 3px solid white;
  border-left: 3px solid white;
  transform: rotate(225deg);
}
</style>
