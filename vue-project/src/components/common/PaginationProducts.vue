<template>
  <div>
    <SwitchButtons class="item-page__buttons"/>

    <Slider class="item-page__content"
            :displayedItems="displayedItems"/>

    <PaginationBlock class="item-page__keys-block"
                     :total-pages="totalPages"
                     :current-page="currentPage"
                     @prev-page="prevPage"
                     @page-change="pageChange"
                     @next-page="nextPage"/>
  </div>
</template>

<script setup>
  import { ref, computed, watch, onMounted, onBeforeUnmount, toRefs } from 'vue'

  import { compoPagination } from "@/composables/compoPagination.js"
  import PaginationBlock from "@/components/common/PaginationBlock.vue";
  import Slider from "@/components/common/Slider.vue";
  import SwitchButtons from "@/components/common/SwitchButtons.vue";

  const props = defineProps({
    productItems: {
      // required: true,
      type: Array,
      default: () => []
    }
  })

  const items = ref(props.productItems)

  const {
    currentPage,
    totalPages,
    displayedItems,
    pageChange,
    prevPage,
    nextPage,
    setupResizeListener,
    cleanupResizeListener
  } = compoPagination(items, 16)

  // const itemsPerPage = ref(16)
  // const currentPage = ref(1)
  //
  // const allItems = computed(() => props.productItems || [])
  // const totalPages = computed(() =>  Math.ceil(allItems.value.length / itemsPerPage.value))
  // const displayedItems = computed(() => {
  //   const start = (currentPage.value - 1)  * itemsPerPage.value;
  //   const end = start + itemsPerPage.value;
  //   return allItems.value.slice(start, end);
  // })
  //
  // const pageChange = (pageNum) => {
  //   currentPage.value = pageNum
  // }
  //
  // const prevPage = () => {
  //   currentPage.value--
  // }
  //
  // const nextPage = () => {
  //   currentPage.value++
  // }
  //
  // const getItemsPerPage = () => document.documentElement.clientWidth <= 375 ? 10 : 16
  //
  // // const per = ref(getItemsPerPage())
  //
  // const updateItemsPerPage = () => {
  //   const newPerPage = getItemsPerPage()
  //
  //   if (newPerPage !== itemsPerPage.value) {
  //     const currentIndex = (currentPage.value - 1) * itemsPerPage.value
  //
  //     itemsPerPage.value = newPerPage
  //
  //     if (allItems.value.length > 0) {
  //       currentPage.value = Math.min(
  //           Math.floor(currentIndex / newPerPage) + 1,
  //           totalPages.value
  //       )
  //     }
  //   }
  //   if(currentPage.value > totalPages.value) {
  //     currentPage.value = totalPages.value
  //   }
  // }



  onMounted(() => {
    // updateItemsPerPage();
    //
    // window.addEventListener('resize', updateItemsPerPage)
    setupResizeListener()
  })



  onBeforeUnmount(() => {
    // window.removeEventListener('resize', updateItemsPerPage)
    cleanupResizeListener()
  })


</script>

<style scoped>

</style>