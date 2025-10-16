let carouselButtonLeft = document.querySelector(".areas-of-application-section-carousel__button-left")
let carouselButtonRight = document.querySelector(".areas-of-application-section-carousel__button-right")
let carouselButtonLeft768px = document.querySelector(".areas-of-application-section-carousel__button-left-768px")
let carouselButtonRight768px = document.querySelector(".areas-of-application-section-carousel__button-right-768px")
let carouselButtonLeft375px = document.querySelector(".areas-of-application-section-carousel__button-left-375px")
let carouselButtonRight375px = document.querySelector(".areas-of-application-section-carousel__button-right-375px")
let carouselContainerInner = document.querySelector(".carousel__container-inner")
let carouselItem = Array.from(document.getElementsByClassName("carousel__item"))[1];
let itemsAmount = Array.from(document.getElementsByClassName("carousel__item")).length;

let slideIndex = 0;

////////////////////////////////carouselButton///////////////////////////////////

carouselButtonLeft.addEventListener("click", (event) => {
    slideIndex--;
    let itemWidth = parseInt(window.getComputedStyle(carouselItem).getPropertyValue("width"))
    let itemMargin = parseInt(window.getComputedStyle(carouselItem).getPropertyValue("margin-left"))
    carouselContainerInner.style["transform"] = `translateX(${-(itemWidth + itemMargin)*slideIndex}px)`;

    console.log(`${-(itemWidth + itemMargin)*slideIndex}`);
    console.log(carouselButtonLeft.disabled);
    carouselButtonLeft.disabled = slideIndex === 0;
    console.log(carouselButtonLeft.disabled);
    carouselButtonRight.disabled = slideIndex === itemsAmount;
})

carouselButtonRight.addEventListener("click", (event) => {
    event.preventDefault();
    slideIndex++;
    console.log(slideIndex);
    let itemWidth = parseInt(window.getComputedStyle(carouselItem).getPropertyValue("width"))
    let itemMargin = parseInt(window.getComputedStyle(carouselItem).getPropertyValue("margin-left"))
    carouselContainerInner.style["transform"] = `translateX(${-(itemWidth + itemMargin)*slideIndex}px)`;
    console.log(`${-(itemWidth + itemMargin)*slideIndex}`);
    carouselButtonLeft.disabled = slideIndex === 0;
    carouselButtonRight.disabled = slideIndex === itemsAmount;
})

////////////////////////////////carouselButton768px///////////////////////////////////

// carouselButtonLeft768px.addEventListener("click", (event) => {
//     slideIndex--;
//     console.log(slideIndex);
//     let itemWidth = parseInt(window.getComputedStyle(carouselItem).getPropertyValue("width"))
//     let itemMargin = parseInt(window.getComputedStyle(carouselItem).getPropertyValue("margin-left"))
//     carouselContainerInner.style["transform"] = `translateX(${-(itemWidth + itemMargin)*slideIndex}px)`;
//
//     console.log(`${-(itemWidth + itemMargin)*slideIndex}`);
//     console.log(carouselButtonLeft.disabled);
//     carouselButtonLeft768px.disabled = slideIndex === 0;
//     console.log(carouselButtonLeft.disabled);
//     carouselButtonRight768px.disabled = slideIndex === itemsAmount;
// })
//
// carouselButtonRight768px.addEventListener("click", (event) => {
//     event.preventDefault();
//     slideIndex++;
//     console.log(slideIndex);
//     let itemWidth = parseInt(window.getComputedStyle(carouselItem).getPropertyValue("width"))
//     let itemMargin = parseInt(window.getComputedStyle(carouselItem).getPropertyValue("margin-left"))
//     carouselContainerInner.style["transform"] = `translateX(${-(itemWidth + itemMargin)*slideIndex}px)`;
//     console.log(`${-(itemWidth + itemMargin)*slideIndex}`);
//     carouselButtonLeft768px.disabled = slideIndex === 0;
//     carouselButtonRight768px.disabled = slideIndex === itemsAmount;
// })

////////////////////////////////carouselButton375px///////////////////////////////////

// carouselButtonLeft375px.addEventListener("click", (event) => {
//     slideIndex--;
//     console.log(slideIndex);
//     let itemWidth = parseInt(window.getComputedStyle(carouselItem).getPropertyValue("width"))
//     let itemMargin = parseInt(window.getComputedStyle(carouselItem).getPropertyValue("margin-left"))
//     carouselContainerInner.style["transform"] = `translateX(${-(itemWidth + itemMargin)*slideIndex}px)`;
//
//     console.log(`${-(itemWidth + itemMargin)*slideIndex}`);
//     console.log(carouselButtonLeft.disabled);
//     carouselButtonLeft375px.disabled = slideIndex === 0;
//     console.log(carouselButtonLeft.disabled);
//     carouselButtonRight375px.disabled = slideIndex === itemsAmount;
// })
//
// carouselButtonRight375px.addEventListener("click", (event) => {
//     event.preventDefault();
//     slideIndex++;
//     console.log(slideIndex);
//     let itemWidth = parseInt(window.getComputedStyle(carouselItem).getPropertyValue("width"))
//     let itemMargin = parseInt(window.getComputedStyle(carouselItem).getPropertyValue("margin-left"))
//     carouselContainerInner.style["transform"] = `translateX(${-(itemWidth + itemMargin)*slideIndex}px)`;
//     console.log(`${-(itemWidth + itemMargin)*slideIndex}`);
//     carouselButtonLeft375px.disabled = slideIndex === 0;
//     carouselButtonRight375px.disabled = slideIndex === itemsAmount;
// })

