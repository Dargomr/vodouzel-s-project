/*—————————————————————————————————————————————————————————————————nodes-carousel-section———————————————————————————————————————————————————————*/

let nodesCarousel = document.querySelector(".nodes-carousel");
let nodesCarouselInner = document.querySelector(".nodes-carousel__inner");
let nodesCarouselLeftButton = document.querySelector(".nodes-carousel_left-button");
let nodesCarouselRightButton = document.querySelector(".nodes-carousel_right-button");
let nodesCarouselItem = Array.from(document.getElementsByClassName("nodes-carousel-item"))[1];
let slideIndex = 0;

// nodesCarouselLeftButton.addEventListener("click", ()=> {
//     slideIndex--;
//     let itemWidth = parseInt(window.getComputedStyle(nodesCarouselItem).getPropertyValue("width"))
//     let itemMargin = parseInt(window.getComputedStyle(nodesCarouselItem).getPropertyValue("margin-left"))
//     nodesCarouselInner.style["transform"] = `translateX(${-(itemWidth + itemMargin)*slideIndex}px)`;
//
//     console.log(`${-(itemWidth + itemMargin)*slideIndex}`);
//     console.log(carouselButtonLeft.disabled);
//     carouselButtonLeft.disabled = slideIndex === 0;
//     console.log(carouselButtonLeft.disabled);
//     carouselButtonRight.disabled = slideIndex === itemsAmount;
// })

nodesCarouselLeftButton.addEventListener("click", ()=> {
    slideIndex--;
    let itemWidth = parseInt(window.getComputedStyle(nodesCarouselItem).getPropertyValue("width"))
    let itemMargin = parseInt(window.getComputedStyle(nodesCarouselItem).getPropertyValue("margin-left"))
    // nodesCarouselInner.scrollBy(-(itemWidth + itemMargin), 0);
    nodesCarouselInner.scrollBy({
        top: 0,
        left: -(itemWidth + itemMargin),
        behavior: "smooth"
});
})

nodesCarouselRightButton.addEventListener("click", ()=> {
    slideIndex++;
    let itemWidth = parseInt(window.getComputedStyle(nodesCarouselItem).getPropertyValue("width"))
    let itemMargin = parseInt(window.getComputedStyle(nodesCarouselItem).getPropertyValue("margin-left"))
    // nodesCarouselInner.scrollBy(-(itemWidth + itemMargin), 0);
    nodesCarouselInner.scrollBy({
        top: 0,
        left: (itemWidth + itemMargin),
        behavior: "smooth"
    });
})


/*—————————————————————————————————————————————————————————————————item-page-section———————————————————————————————————————————————————————*/

let items = document.getElementsByClassName("item-page__item");
let elCounts;

function widthCheck() {
    let width = window.innerWidth;
    if (width <= 375) {
        elCounts = 10;
    } else {
        elCounts = 16;
    }
}

widthCheck()

let pagesDiv = document.querySelector(".item-page__pages")
let pagesCount = Math.ceil(items.length / elCounts)

for(let i = 0; i < pagesCount; i++) {
    let page = document.createElement("p");
    page.innerHTML = `${i + 1}`
    pagesDiv.appendChild(page);
    page.classList.add("item-page__page")
}

let currentPage = 1;


function updateItems() {
    [...items].forEach((el, num) =>  {
        if (num < (currentPage - 1) * (elCounts) || num >= (currentPage) * (elCounts)) {
            el.classList.add('item_closed');
        } else {
            el.classList.remove('item_closed');
        }
    })
}

let pages = document.getElementsByClassName("item-page__page")

let itemPageLeftKey = document.querySelector(".item-page__left-key");
let itemPageRightKey = document.querySelector(".item-page__right-key");
itemPageLeftKey.disabled = true;

itemPageLeftKey.addEventListener('click', (e) => {
    currentPage--
    widthCheck()
    updateItems()
    updatePage()
    itemPageLeftKey.disabled = currentPage === 1
    itemPageRightKey.disabled = currentPage === pagesCount
})

itemPageRightKey.addEventListener('click', (e) => {
    currentPage++
    widthCheck()
    updateItems()
    updatePage()
    itemPageLeftKey.disabled = currentPage === 1
    itemPageRightKey.disabled = currentPage === pagesCount
})

function updatePage() {
    [...pages].forEach((page, num) => {
        if (num === currentPage - 1) {
            page.style.backgroundColor = '#E1E4EF';
        } else {
            page.style.backgroundColor = '#F2F2F8';
        }
    })
}


updatePage()

updateItems();