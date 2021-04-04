const buttom = document.getElementById("menu-buttom")
const menu = document.getElementsByClassName("menu") [0]
const fadeLayer = document.getElementsByClassName("fade-layer") [0]

function toggleMenu() {
    fadeLayer.classList.toggle("visible")
    menu.classList.toggle("show")
}

buttom.addEventListener("click",toggleMenu)
fadeLayer.addEventListener("click",toggleMenu)