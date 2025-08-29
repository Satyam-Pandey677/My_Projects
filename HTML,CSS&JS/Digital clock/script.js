function showTime(){
    let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let session = "AM"

if(hour == 0){
    hour = 12;
}

if(hour > 12){
    hour = hour - 12;
    session = "PM";
}

if(hour < 10 ){
    hour = "0"+hour;
}

if(minute < 10 ){
    hour = "0"+minute;
}

if(second < 10 ){
    hour = "0"+second;
}

document.getElementById("DigitalClock").innerHTML = hour +":"+minute+":"+second +" "+ session;
setTimeout(showTime, 1000);
}

showTime();




