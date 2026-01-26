 <template>

    <div class="areas-of-application-section__content">
      <div class="carousel">
        <div class="carousel__container">
          <div class="carousel__container-inner" :style="carouselTransform" ref="carouselInner"
            @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd"
          >
            <div v-for="(item, index) in items" :key="index" class="carousel__item" ref="carouselItems"
              @click="handleItemClick(index)"
            >
              <div  :class="carouselClass">
                <img :class="carouselClassInner" :src="item.image" :alt="item.alt">
              </div>
              <p class="carousel__text">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="areas-of-application-section-carousel__buttons-768px">
      <button class="areas-of-application-section-carousel__button-left" @click="prevSlide" :disabled="currentSlide === 0"></button>
      <button class="areas-of-application-section-carousel__button-right" @click="nextSlide" :disabled="currentSlide === maxSlideIndex"></button>
    </div>

    <p v-if="showDescription" class="areas-of-application-section__post-p">Эти узлы помогают не только в учете потребления,
      но и в управлении ресурсами, оптимизации расходов и контроле за качеством воды.</p>
    <div class="carousel-indicators" v-if="showIndicators">
      <button
          v-for="i in items.length"
          :key="i"
          class="carousel-indicator"
          :class="{ 'active': currentSlide === i - 1 }"
          @click="goToSlide(i - 1)"
      ></button>
    </div>
</template>

<script setup>
import {computed, onMounted, onBeforeUnmount, ref} from "vue";

  const props = defineProps( {
    carouselClass: {
      type: String,
      default: "carousel__img"
    },
    carouselClassInner: {
      type: String,
      default: "carousel__img-inner"
    },
    items: {
      required: true,
      type: Array,
    },
    currentSlide: {
      type: Number,
      default: 0,
    },
    showIndicators: {
      type: Boolean,
      default: false,
    },
    showDescription: {
      type: Boolean,
      default: false
    }
  })

  const emit = defineEmits(['slide-change']);

const carouselItems = ref([]);
const carouselInner = ref(null);
const itemWidth = ref(0)
const itemMargin = ref(0)
const touchStartX = ref(0);
const touchEndX = ref(0);

  const maxSlideIndex = computed(() => {
      return props.items.length - 1
    })

    const carouselTransform = computed(() => {
    const translateX = -(itemWidth.value + itemMargin.value) * props.currentSlide
    return {
      transform: `translateX(${translateX}px)`,
      transition: 'transform 0.3s ease-in-out'
    }
  })

  const prevSlide = () => {
    if(props.currentSlide > 0) {
      emit('slide-change', props.currentSlide - 1)
    }
  }

  const nextSlide = () => {
    if (props.currentSlide < maxSlideIndex.value) {
      emit('slide-change', props.currentSlide + 1)
    }
  }

  const goToSlide = (index) => {
    if (index >= 0 && index < maxSlideIndex.value) {
      emit('slide-change', index)
    }
  }

  const handleItemClick = (index) => {
    goToSlide(index)
  }

  const updateItemDimensions = () => {
    if(carouselItems.value && carouselItems.value.length > 0) {
      const item = carouselItems.value[0]
      if(item) {
        itemWidth.value = parseInt(window.getComputedStyle(item).getPropertyValue('width'))
        itemMargin.value = parseInt(window.getComputedStyle(item).getPropertyValue('margin-left'))
      }
    }
  }

  const handleTouchStart = (event) => {
    touchStartX.value = event.touches[0].clientX;
  }

  const handleTouchMove = (event) => {
    touchEndX.value = event.touches[0].clientX;
  }

  const handleTouchEnd = () => {
    const touchDiff = touchStartX.value - touchEndX.value;
    const threshold = 50; // Минимальное расстояние для свайпа

    if (Math.abs(touchDiff) > threshold) {
      if (touchDiff > 0) {
        // Свайп влево -> следующий слайд
        goToNextSlide();
      } else {
        // Свайп вправо -> предыдущий слайд
        goToPrevSlide();
      }
    }

    // Сброс значений
    touchStartX.value = 0;
    touchEndX.value = 0;
  };

  const handleResize = () => {
    updateItemDimensions();
  };




  onMounted(() => {
    updateItemDimensions()

    setTimeout(() => {
      updateItemDimensions();
    }, 100);

    window.addEventListener('resize', handleResize)

    // nextTick(() => {
    //   updateItemDimensions();
    // })
  });

  onBeforeUnmount(() => {
    removeEventListener('resize', handleResize)
  })

</script>

<style scoped>
@import '@/assets/css/1440px.css';
@import '@/assets/css/768px.css';
@import '@/assets/css/375px.css';
</style>