import {defineStore} from 'pinia';
import {ref} from 'vue'

export const useAboutCompanyTilesStore = defineStore('aboutCompanyTilesStore', () => {
    const tiles = ref([
        {image: 'src/assets/img/client-img.png'},
        {image: 'src/assets/img/client-img.png'},
        {image: 'src/assets/img/client-img.png'},
        {image: 'src/assets/img/client-img.png'},
        {image: 'src/assets/img/client-img.png'},
        {image: 'src/assets/img/client-img.png'},
        {image: 'src/assets/img/client-img.png'},
        {image: 'src/assets/img/client-img.png'},
        {image: 'src/assets/img/client-img.png'},
        {image: 'src/assets/img/client-img.png'},
        {image: 'src/assets/img/client-img.png'},
        {image: 'src/assets/img/client-img.png'},
        {image: 'src/assets/img/client-img.png'},
        {image: 'src/assets/img/client-img.png'},
        {image: 'src/assets/img/client-img.png'},
        {image: 'src/assets/img/client-img.png'},
    ])

    return {
        tiles
    };
})