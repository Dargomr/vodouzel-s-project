<template>
  <button
    class="arrow-button"
    :class="[`arrow-button-${direction}`]"
    @click="$emit('click')"
    :disabled="disabled"
  ></button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  direction: {
    type: String,
  },
  disabled: Boolean,
})

defineEmits(['click'])
</script>

<style scoped>
.arrow-button {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: none;
  background-color: #002d82;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s;
}

.arrow-button:active {
  background-color: #001c50;
}

.arrow-button:disabled {
  background-color: #a9a9a9;
  cursor: not-allowed;
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

/* ========== АДАПТИВ (768px) ========== */
@media screen and (max-width: 768px) {
  .arrow-button {
    width: 40px;
    height: 40px;
  }

  .arrow-button-prev:before {
    left: 16px;
    width: 9px;
    height: 9px;
    border-width: 2px;
  }

  .arrow-button-next:before {
    left: 11px;
    width: 9px;
    height: 9px;
    border-width: 2px;
  }
}

/* ========== АДАПТИВ (375px) ========== */
@media screen and (max-width: 375px) {
  .arrow-button {
    width: 30px;
    height: 30px;
  }

  .arrow-button-prev:before {
    left: 13px;
    width: 6px;
    height: 6px;
  }

  .arrow-button-next:before {
    left: 9px;
    width: 6px;
    height: 6px;
  }
}
</style>
