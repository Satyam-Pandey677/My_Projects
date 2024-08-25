let toggle_button = document.getElementById("toggle-button")
let close_button =document.getElementById("close-button")
let box = document.querySelector(".social_link")
if(toggle_button){
    toggle_button.addEventListener("click", (e) => {
        console.log(e)
        box.classList.add('show-menu')
        toggle_button.classList.add('show-button')
    })
}

if(close_button){
    close_button.addEventListener('click', (e) =>{
        console.log(e)
        box.classList.remove('show-menu')
        toggle_button.classList.remove('show-button')
    })
}

