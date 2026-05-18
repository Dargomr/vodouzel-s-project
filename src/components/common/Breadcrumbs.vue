<template>
  <div class="breadcrumbs">
    <template v-for="(crumb, index) in breadcrumbsItems" :key="index">
      <span v-if="index > 0" class="breadcrumb-separator">/</span>

      <span
        v-if="index < breadcrumbsItems.length - 1"
        class="breadcrumb-item"
        @click="navigateTo(crumb.path)"
      >
        {{ crumb.name }}
      </span>

      <span v-else class="breadcrumb-item breadcrumb-item_active">
        {{ crumb.name }}
      </span>
    </template>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()

const props = defineProps({
  breadcrumbsItems: {
    type: Array,
    required: true,
  },
})

const navigateTo = (path) => {
  if (path) {
    router.push(path)
  }
}
</script>

<style scoped>
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 4px;
  padding-top: 20px;
}

.breadcrumb-item {
  font-size: 16px;
  font-weight: 400;
  color: #6d6d6d;
  cursor: pointer;
  transition: color 0.2s;
}

.breadcrumb-item:hover {
  color: #002d82;
  text-decoration: underline;
}

.breadcrumb-item_active {
  color: #002d82;
  cursor: default;
  font-weight: 500;
}

.breadcrumb-item_active:hover {
  text-decoration: none;
  color: #002d82;
}

.breadcrumb-separator {
  font-size: 16px;
  color: #6d6d6d;
}

@media screen and (max-width: 768px) {
  .breadcrumbs {
    padding-top: 16px;
  }

  .breadcrumb-item,
  .breadcrumb-separator {
    font-size: 14px;
  }
}

@media screen and (max-width: 375px) {
  .breadcrumb-item,
  .breadcrumb-separator {
    font-size: 12px;
  }
}
</style>
