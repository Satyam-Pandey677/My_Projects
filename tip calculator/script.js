let tipInput = document.getElementById("tip");
let personInput = document.getElementById("person");
let tip_buttons = document.querySelectorAll(".tip-button");
let customs = document.getElementById("custom");
let tip_Price = document.getElementById("tip-price");
let total_Price = document.getElementById("total_price");
let Reset = document.getElementById('reset');

tipInput.value = "0.0";
personInput.value = "1";
tip_Price.innerHTML = "$" + (0.0).toFixed(2);
total_Price.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tip_value = 0.15; // Default tip percentage

tipInput.addEventListener("input", billInputFun);
personInput.addEventListener("input", peopleInputFun);
tip_buttons.forEach(function (val) {
    val.addEventListener('click', handclick)
});

function billInputFun() {
    billValue = parseFloat(tipInput.value);
    calculateTip();
}

function peopleInputFun() {
    peopleValue = parseFloat(personInput.value);
    calculateTip();
}

function handclick(event) {
    tip_value = parseFloat(event.target.innerHTML) / 100;
    calculateTip();
}

function calculateTip() {
    if (peopleValue >= 1) {
        let tipAmount = (billValue * tip_value) / peopleValue;
        let total = (billValue + (billValue * tip_value)) / peopleValue;
        tip_Price.innerHTML = "$" + tipAmount.toFixed(2);
        total_Price.innerHTML = "$" + total.toFixed(2);
    }
}

Reset.addEventListener("click", function(){
    tipInput.value = "0.0";
    personInput.value = "1";
    tip_Price.innerHTML = "$" + (0.0).toFixed(2);
    total_Price.innerHTML = "$" + (0.0).toFixed(2);
})
