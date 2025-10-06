let articles = document.getElementsByClassName("article");
let elCounts;

function widthCheck() {
    const width = window.innerWidth;
    if (width <= 375) {
        elCounts = 12
    } else if (width > 375 && width <= 768) {
        elCounts = 12
    } else if (width > 768) {
        elCounts = 16
    }
}

widthCheck()

let pagesDiv = document.querySelector(".articles-section__pages");
let pagesCount = Math.ceil(articles.length / elCounts);

for (let i = 0; i < pagesCount; i++) {
    let page = document.createElement("p")
    page.innerHTML = `${i + 1}`
    pagesDiv.appendChild(page);
    page.classList.add("articles-section__page");
}


let currentPage = 1;


let pages = document.getElementsByClassName("articles-section__page");

let articlesSectionLeftKey = document.querySelector(".articles-section__left-key");
let articlesSectionRightKey = document.querySelector(".articles-section__right-key");
articlesSectionLeftKey.disabled = true;

function updateArticles() {
    [...articles].forEach((el, num) => {
        if (num < elCounts * (currentPage - 1)  ||  num >= elCounts * (currentPage)) {
            el.classList.add("article_closed");
        } else {
            el.classList.remove("article_closed");
        }
    })
};


articlesSectionLeftKey.addEventListener("click", (e) => {
    currentPage--
    widthCheck()
    updateArticles()
    updatePage()
    articlesSectionLeftKey.disabled = currentPage === 1;
    articlesSectionRightKey.disabled = currentPage === pagesCount;
    // articlesSectionLeftKey.enabled = currentPage !== 1;
});


articlesSectionLeftKey.addEventListener("click", (e) => {
    currentPage++
    widthCheck()
    updateArticles()
    updatePage()
    articlesSectionLeftKey.disabled = currentPage === 1;
    articlesSectionRightKey.disabled = currentPage === pagesCount;
});


function updatePage() {
    [...pages].forEach((page, num) => {
        if (num === currentPage - 1) {
            page.style.background = "#E1E4EF";
        } else {
            page.style.background = "white";
        }
    });
}



updatePage()

updateArticles();

/*—————————————————————————————————————————————————————————————————ABOUT-COMPANY————————————————————————————————————————————————————————*/

                                                                /*certification-section*/

const certificationSectionLeftKey = document.querySelector(".certification-section__left-key");
const certificationSectionRightKey = document.querySelector(".certification-section__right-key");
const certificationSectionCertificationsInnerBlock = document.querySelector(".certification-section__certifications-inner-block");
// const certificationItem = document.querySelector(".certification-item");



certificationSectionLeftKey.addEventListener("click", (e) => {
    certificationSectionCertificationsInnerBlock.style.left = "-500px";
})