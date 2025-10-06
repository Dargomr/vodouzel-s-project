


                                                                /*certification-section*/

const certificationSectionLeftKey = document.querySelector(".certification-section__left-key");
const certificationSectionRightKey = document.querySelector(".certification-section__right-key");
const certificationSectionCertificationsInnerBlock = document.querySelector(".certification-section__certifications-inner-block");
const certificationItem = Array.from(document.getElementsByClassName("certification-item"))[1];

const certificationAmount = document.getElementsByClassName("certification-item").length;
console.log(certificationAmount)
slideIndex = 0;
// console.log(certificationItem.style.width);


certificationSectionLeftKey.addEventListener("click", (e) => {
    // certificationSectionCertificationsInnerBlock.style["transform"] = `translateX(-${certificationItem.style.width}px)`;
    slideIndex--;
    console.debug(window.getComputedStyle(certificationItem).getPropertyValue("width"));
    let certWidth = parseInt(window.getComputedStyle(certificationItem).getPropertyValue("width"));
    let certMargin = parseInt(window.getComputedStyle(certificationItem).getPropertyValue("margin-left"));
    certificationSectionCertificationsInnerBlock.style["transform"] = `translateX(${-(certWidth + certMargin)*slideIndex}px)`;
    certificationSectionLeftKey.disabled = slideIndex === 0;
    certificationSectionRightKey.disabled = slideIndex === certificationAmount;
    console.log(slideIndex)

})

certificationSectionRightKey.addEventListener("click", (e) => {
    slideIndex++
    console.debug(window.getComputedStyle(certificationItem).getPropertyValue("width"));
    let certWidth = parseInt(window.getComputedStyle(certificationItem).getPropertyValue("width"));
    let certMargin = parseInt(window.getComputedStyle(certificationItem).getPropertyValue("margin-left"));
    certificationSectionCertificationsInnerBlock.style["transform"] = `translateX(${-(certWidth + certMargin)*slideIndex}px)`;
    certificationSectionLeftKey.disabled = slideIndex === 0;
    certificationSectionRightKey.disabled = slideIndex === certificationAmount - 1;
    console.log(slideIndex)

})