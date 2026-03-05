
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

export function compoPagination(items, defaultItemsPerPage = 16) {
    const itemsPerPage = ref(defaultItemsPerPage)
    const currentPage = ref(1)

    const allItems = computed(() => items.value || [])
    const totalPages = computed(() =>
        Math.ceil(allItems.value.length / itemsPerPage.value)
    )

    const displayedItems = computed(() => {
        const start = (currentPage.value - 1) * itemsPerPage.value
        const end = start + itemsPerPage.value
        return allItems.value.slice(start, end)
    })

    const pageChange = (pageNum) => {
        if (pageNum >= 1 && pageNum <= totalPages.value) {
            currentPage.value = pageNum
        }
    }

    const prevPage = () => {
        if (currentPage.value > 1) currentPage.value--
    }

    const nextPage = () => {
        if (currentPage.value < totalPages.value) currentPage.value++
    }

    const getItemsPerPage = () =>
        document.documentElement.clientWidth <= 375 ? 10 : 16

    const updateItemsPerPage = () => {
        const newPerPage = getItemsPerPage()

        if (newPerPage !== itemsPerPage.value) {
            const currentIndex = (currentPage.value - 1) * itemsPerPage.value
            itemsPerPage.value = newPerPage

            if (allItems.value.length > 0) {
                currentPage.value = Math.min(
                    Math.floor(currentIndex / newPerPage) + 1,
                    totalPages.value
                )
            }
        }

        if (currentPage.value > totalPages.value && totalPages.value > 0) {
            currentPage.value = totalPages.value
        }
    }

    const setupResizeListener = () => {
        updateItemsPerPage()
        window.addEventListener('resize', updateItemsPerPage)
    }

    const cleanupResizeListener = () => {
        window.removeEventListener('resize', updateItemsPerPage)
    }

    return {
        itemsPerPage,
        currentPage,
        totalPages,
        displayedItems,
        pageChange,
        prevPage,
        nextPage,
        setupResizeListener,
        cleanupResizeListener,
        updateItemsPerPage
    }
}