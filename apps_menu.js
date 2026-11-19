const sidebar = document.getElementById("sidebar");
const sidebarAnchor = document.getElementsByClassName("sidebar_anchor");
const burgerVector1 = document.getElementById("burger_vector1");
const burgerVector2 = document.getElementById("burger_vector2");

const coffeeBtn = document.getElementById("coffee_button");
const teaBtn = document.getElementById("tea_button");
const dessertBtn = document.getElementById("dessert_button");

const coffeeSection = document.getElementById("coffee_section");
const teaSection = document.getElementById("tea_section");
const dessertSection = document.getElementById("dessert_section");

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
};

function closeNavFirst() {
    sidebar.style.width = "0%";
    burgerVector1.style.position = "initial";
    burgerVector2.style.position = "initial";
    burgerVector1.style.transform = "rotate(0deg)"
    burgerVector2.style.transform = "rotate(0deg)"
}

teaBtn.addEventListener("click", (e) => {
    e.preventDefault();

    coffeeBtn.style.backgroundColor = "#E1D4C9";
    coffeeBtn.getElementsByTagName("div").backgroundColor = "#C1B6AD";
    coffeeBtn.style.color = "#403F3D";
    dessertBtn.style.backgroundColor = "#E1D4C9";
    dessertBtn.getElementsByTagName("div").backgroundColor = "#C1B6AD";
    dessertBtn.style.color = "#403F3D";

    teaBtn.style.backgroundColor = "#665F55";
    teaBtn.getElementsByTagName("div").backgroundColor = "#E1D4C9";
    teaBtn.style.color = "#E1D4C9";

    coffeeSection.style.display = "none";
    teaSection.style.display = "flex";
    dessertSection.style.display = "none";
})

dessertBtn.addEventListener("click", (e) => {
    e.preventDefault();

    coffeeBtn.style.backgroundColor = "#E1D4C9";
    coffeeBtn.getElementsByTagName("div").backgroundColor = "#C1B6AD";
    coffeeBtn.style.color = "#403F3D";
    teaBtn.style.backgroundColor = "#E1D4C9";
    teaBtn.getElementsByTagName("div").backgroundColor = "#C1B6AD";
    teaBtn.style.color = "#403F3D";

    dessertBtn.style.backgroundColor = "#665F55";
    dessertBtn.getElementsByTagName("div").backgroundColor = "#E1D4C9";
    dessertBtn.style.color = "#E1D4C9";

    coffeeSection.style.display = "none";
    teaSection.style.display = "none";
    dessertSection.style.display = "flex";
})


/* function showTeaMenu() {
    coffeeBtn.style.backgroundColor = "none";
    coffeeBtn.getElementsByTagName("div").backgroundColor = "#C1B6AD";
    dessertBtn.style.backgroundColor = "none";
    dessertBtn.getElementsByTagName("div").backgroundColor = "#C1B6AD";

    teaBtn.style.backgroundColor = "#665F55";
    teaBtn.getElementsByTagName("div").backgroundColor = "#E1D4C9";

    coffeeSection.style.display = "none";
    teaSection.style.display = "flex";
} */