let submit = document.getElementById("submit");
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2")
let input = document.getElementById("email").value;
let feedback = document.getElementById("feedback");
let email_print = document.getElementById("email_print")
let close_Btn = document.getElementById("btn")


function checkinput() {
    let input = document.getElementById("email").value;
    arr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(arr.test(input) ) {
        feedback.textContent ="";
    }else{
        feedback.textContent = "valid email required";
        input.classList.add("color")
    }
}


submit.addEventListener("click",(e)=>{
    let input = document.getElementById("email").value;
    let email_print = document.getElementById("email_print");


    card1.style.display = "none"
    card2.style.display ="block"
    email_print.textContent =input;
})

close_Btn.addEventListener("click", (e) => {
    card1.style.display = "flex";
    card2.style.display = "none";
})