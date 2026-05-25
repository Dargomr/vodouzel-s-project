<template>
  <div>
    <div v-for="item in displayedItems" class="item-page__item" :key="item.id">
      <img class="item-page__item-img" :src="item.img" alt="item-page__item-img" />
      <p class="item-page__item-name">{{ item.name }}</p>
      <p class="item-page__item-article">
        Артикул:
        <span>{{ item.article }}</span>
      </p>
      <p class="item-page__item-prev-price">
        от
        <span>{{ item.prevPrice }}</span>
        ₽
      </p>
      <p class="item-page__item-curr-price">
        от
        <span>{{ item.currPrice }}</span>
        ₽
      </p>
      <button class="item-page__item-more-detailed">Подробнее</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  displayedItems: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
/* ========== СЕТКА ТОВАРОВ ========== */
.item-page__content {
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

/* ========== КАРТОЧКА ТОВАРА ========== */
.item-page__item {
  background-color: white;
  padding: 20px;
  transition: transform 0.5s ease;
}

.item-page__item:hover {
  transform: scale(1.2);
  border: 2px solid #e1e4ef;
}

.item-page__item-img {
  width: 282px;
  height: 282px;
}

.item-page__item-name {
  margin-top: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #002d82;
}

.item-page__item-article {
  margin-top: 10px;
  font-size: 16px;
  font-weight: 400;
  color: #7990bd;
}

.item-page__item-prev-price {
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
  color: #7990bd;
  text-decoration: line-through;
}

.item-page__item-curr-price {
  font-size: 30px;
  font-weight: 700;
  color: #18182f;
  line-height: 120%;
}

.item-page__item-more-detailed {
  margin-top: 20px;
  color: #002d82;
  background-color: #e1e4ef;
  width: 100%;
  height: 39px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
}

/* ========== АДАПТИВ ПЛАНШЕТЫ (768px) ========== */
@media screen and (width <= 769px) {
  .item-page__content {
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 24px;
  }

  .item-page__item {
    background-color: white;
    padding: 20px;
  }

  .item-page__item-name {
    margin-top: 20px;
    font-size: 20px;
    font-weight: 600;
    color: #002d82;
  }

  .item-page__item-article {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 400;
    color: #7990bd;
  }

  .item-page__item-prev-price {
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
    color: #7990bd;
    text-decoration: line-through;
  }

  .item-page__item-curr-price {
    font-size: 30px;
    font-weight: 700;
    color: #18182f;
    line-height: 120%;
  }

  .item-page__item-more-detailed {
    margin-top: 20px;
    color: #002d82;
    background-color: #e1e4ef;
    width: 100%;
    height: 39px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 500;
  }
}

/* ========== АДАПТИВ ТЕЛЕФОНЫ (375px) ========== */
@media screen and (width <= 375px) {
  .item-page__content {
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
  }

  .item-page__item {
    background-color: white;
    padding: 20px;
  }

  .item-page__item-name {
    margin-top: 20px;
    font-size: 18px;
    font-weight: 600;
    color: #002d82;
  }

  .item-page__item-article {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    color: #7990bd;
  }

  .item-page__item-prev-price {
    margin-top: 32px;
    font-size: 14px;
    font-weight: 500;
    color: #7990bd;
    text-decoration: line-through;
  }

  .item-page__item-curr-price {
    font-size: 22px;
    font-weight: 700;
    color: #18182f;
    line-height: 120%;
  }

  .item-page__item-more-detailed {
    margin-top: 20px;
    color: #002d82;
    background-color: #e1e4ef;
    width: 100%;
    height: 37px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
  }
}
</style>
