const openNav = document.getElementById('openNav')
const navList = document.getElementById('opened-nav-menu')
const closeNav = document.getElementById('closeNav')
const listlink = document.querySelectorAll('.listlink')

openNav.addEventListener("click", ()=>{
     navList.classList.remove("-bottom-32")
     navList.classList.add("bottom-8")
})

closeNav.addEventListener("click", ()=>{
    navList.classList.add("-bottom-32")
    navList.classList.remove("bottom-8")
})


listlink.forEach( e =>e.addEventListener("click",()=>{
    navList.classList.add("-bottom-32")
    navList.classList.remove("bottom-8")
}))