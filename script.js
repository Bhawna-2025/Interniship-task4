let menubar = document.querySelector("#menubar")
let hiddenMenu = document.querySelector("#hiddenMenu")
let cross = document.querySelector("#cross")
menubar.addEventListener("click",()=>{
    hiddenMenu.classList.toggle("translate-x-full");
    hiddenMenu.classList.toggle("opacity-0");
})
cross.addEventListener("click",()=>{
    hiddenMenu.classList.toggle("translate-x-full")
    hiddenMenu.classList.toggle("opacity-0");
})

