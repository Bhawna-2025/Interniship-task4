let menubar_desktop = document.querySelector(".menubar_desktop")
let menubar_mobile = document.querySelector(".menubar_mobile")
let toggleMenu = document.querySelector(".toggleMenu")
let cross = document.querySelector("#cross")
let cross2= document.querySelector("#cross2")
let nav_links= document.querySelector("#nav_links")

menubar_desktop.addEventListener("click",()=>{
    toggleMenu.classList.toggle("translate-x-full");
    toggleMenu.classList.toggle("opacity-0");
})
menubar_mobile.addEventListener("click",()=>{
    toggleMenu.classList.toggle("translate-x-full");
    toggleMenu.classList.toggle("opacity-0");
})
cross.addEventListener("click",()=>{
    toggleMenu.classList.toggle("translate-x-full")
    toggleMenu.classList.toggle("opacity-0");
})
cross2.addEventListener("click",()=>{
    nav_links.classList.toggle("translate-x-full")
    nav_links.classList.toggle("opacity-0");
})

let menubar2 = document.querySelector("#menubar2")
let navLinks = document.querySelector("#nav_links")

menubar2.addEventListener("click",()=>{
    navLinks.classList.toggle("translate-x-full")
    navLinks.classList.toggle("opacity-0")
})
