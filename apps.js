const sidebar = document.getElementById("sidebar");
const sidebarAnchor = document.getElementsByClassName("sidebar_anchor");
const burgerVector1 = document.getElementById("burger_vector1")
const burgerVector2 = document.getElementById("burger_vector2")

const leftBtnSlider = document.getElementById("left_btn_slider");
const rightBtnSlider = document.getElementById("right_btn_slider");

let coffeeSlider = document.getElementById("slider");
let slides = document.querySelectorAll("#favorite_container #favorite_slider .slider_card");
let controls = document.querySelectorAll("#favorite_container #controls button");

function show_nav() {
    if (sidebar.style.width === "100%") {
        sidebar.style.width = "0%";
        burgerVector1.style.position = "initial";
        burgerVector2.style.position = "initial";
        burgerVector1.style.transform = "rotate(0deg)"
        burgerVector2.style.transform = "rotate(0deg)"
      } else {
        sidebar.style.width = "100%";
        burgerVector1.style.transform = "rotate(-45deg)";
        burgerVector1.style.position = "absolute";
        burgerVector2.style.transform = "rotate(45deg)";
        burgerVector2.style.position = "absolute";
      }
}

function closeNavFirst() {
    sidebar.style.width = "0%";
    burgerVector1.style.position = "initial";
    burgerVector2.style.position = "initial";
    burgerVector1.style.transform = "rotate(0deg)"
    burgerVector2.style.transform = "rotate(0deg)"
}

let active = 0;
let cardsLength = slides.length - 1;
let offsetLeft = 0;

rightBtnSlider.onclick = function(){
    if (active + 1 > cardsLength) {
        active = 0;
    }else{
        active = active + 1;
    };
    reloadSlider();
}

leftBtnSlider.onclick = function(){
    if (active - 1 < 0) {
        active = cardsLength;
    }else{
        active = active - 1;
    }
    reloadSlider();
}

coffeeSlider.addEventListener('touchstart', function (event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

coffeeSlider.addEventListener('touchend', function (event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    swipeSlider();
}, false);

function swipeSlider() {
    if (touchendX < touchstartX) { // Swiped Left
        if (active + 1 > cardsLength) {
            active = 0;
        }else{
            active = active + 1;
        };
        reloadSlider();
    } else if (touchendX > touchstartX) { // Swiped Right
        if (active - 1 < 0) {
            active = cardsLength;
        }else{
            active = active - 1;
        }
        reloadSlider();
    }
}

let refreshSlider = setInterval(() => {
    offset = slides[0].offsetWidth;
    coffeeSlider.style.transition = "left ease-in-out 500ms";
    coffeeSlider.style.left = -offset + "px";
    setTimeout(() => {
        coffeeSlider.style.transition = "none";
        slides[active].style.order = slides.length - 1;
        coffeeSlider.style.left = 0;
        active++;
        if (active === slides.length) {
            active = 0;
            slides.forEach(slide => {
                slide.style.order = "initial";
            });
        }
    }, 5000);
}, 7000);

function reloadSlider(){
    let checkLeft = slides[active].offsetLeft;
    coffeeSlider.style.left = -checkLeft + "px";

    let lastActive = document.querySelector("#controls button.active");
    lastActive.classList.remove("active");
    controls[active].classList.add("active");
    clearInterval(refreshSlider);
    /* let refreshSlider = setInterval(() => {rightBtnSlider.click()}, 7000); */
}

controls.forEach((button, key) => {
    button.addEventListener("click", function(){
        active = key;
        reloadSlider();
    })
});
