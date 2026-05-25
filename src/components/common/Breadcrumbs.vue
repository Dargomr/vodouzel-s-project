<template>
  <div :class="['breadcrumbs', bgGray ? 'bg-gray' : '']">
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
  bgGray: {
    type: Boolean,
  },
})

const navigateTo = (path) => {
  if (path) {
    router.push(path)
  }
}
</script>

<style scoped>
.bg-gray {
  background-color: #f2f2f8;
}

.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 20px 32px 0 32px;
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
  color: #6d6d6d;
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
    padding-top: 16px 24px 0 24px;
  }

  .breadcrumb-item,
  .breadcrumb-separator {
    font-size: 14px;
  }
}

@media screen and (max-width: 375px) {
  .breadcrumbs {
    padding-top: 16px 16px 0 16px;
  }

  .breadcrumb-item,
  .breadcrumb-separator {
    font-size: 12px;
  }
}
</style>
