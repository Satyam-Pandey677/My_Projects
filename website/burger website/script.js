/*=============== SHOW MENU ===============*/
let navMenu = document.getElementById("nav-menu")
let navToggle =document.getElementById("nav-toggle")
let navClose =document.getElementById("nav-close")

/* menu Show */
if(navToggle){
        navToggle.addEventListener("click",(e) =>{
            console.log(e)
            navMenu.classList.add('show-menu')
        })
    }

/* Menu Hidden */
if(navClose){
    navClose.addEventListener('click',() => {
        navMenu.classList.remove('show-menu')
    })
}
    
/*=============== REMOVE MENU MOBILE ===============*/
let navLink = document.querySelectorAll(".nav_link")

const linkAction = () =>{
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener('click',linkAction));

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollup =() =>{
    const scrollup = document.getElementById("scroll-up");
    this.scrollY >= 350 ? scrollup.classList.add("show-scroll")
    : scrollup.classList.remove('show-scroll')
}

window.addEventListener('scroll',scrollup)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const section = document.querySelectorAll('section[id]')

const scrollDown = () => {
    const scrollDown = window.scrollY

    section.forEach(current => {
        const sectionHeight =current.offsetHeight,
              sectionTop = current.offsetTop-58,
              sectionId =current.getAttribute('id'),
              sectionClass =document.querySelector('.nav__menu a[href*='+sectionId +']')

              if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionClass.classList.add('active-link')
              }else{
                sectionClass.classList.remove('active-link')
              }
    })
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
