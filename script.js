let menubar = document.querySelector(".menubarIcon")
let toggleMenu = document.querySelector(".toggleMenu")
// let hiddenMenu3 = document.querySelector("#hiddenMenu")
let cross = document.querySelector("#cross")

menubar.addEventListener("click",()=>{
    toggleMenu.classList.toggle("translate-x-full");
    toggleMenu.classList.toggle("opacity-0");
})
cross.addEventListener("click",()=>{
    toggleMenu.classList.toggle("translate-x-full")
    toggleMenu.classList.toggle("opacity-0");
})

let menubar2 = document.querySelector("#menubar2")
let navLinks = document.querySelector("#nav_links")

menubar2.addEventListener("click",()=>{
    navLinks.classList.toggle("translate-x-full")
    navLinks.classList.toggle("opacity-0")
})
