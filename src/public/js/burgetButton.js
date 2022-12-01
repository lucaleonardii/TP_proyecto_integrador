const hamburgerBtn = document.querySelector(".main-header__hamburger-button-container");
const navList = document.querySelector(".main-nav__list")
let hamburgerBtnOpen = false;

hamburgerBtn.addEventListener("click", e => {
    if (!hamburgerBtnOpen) {
        
        navList.style.transition = "max-height 0.2s linear"
        hamburgerBtn.classList.add("open");
        navList.classList.add("open")
        hamburgerBtnOpen = true;
    }
    else {
        navList.style.transition = "max-height 0.2s linear"
        hamburgerBtn.classList.remove("open")
        navList.classList.remove("open")
        hamburgerBtnOpen = false;
    }
    
});

window.addEventListener("resize", e => {
    navList.style.transition = "none"
})