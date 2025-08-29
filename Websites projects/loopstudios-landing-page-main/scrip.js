const URL = "http://api.weatherapi.com/v1/current.json?key=42b6ff08e1414d6b9e791637240312&q=Nagpur";
const API_KEY = "42b6ff08e1414d6b9e791637240312";

fetch(URL,{
    method:'GET',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
})
.then(data => {
    console.log(data)
    console.log(data.location.name);
    console.log(data.current.temp_c)
})
.catch(console.error("Location name is not available in the response!"))

document.addEventListener("DOMContentLoaded", ()=> {
    const navLinks = document.querySelectorAll(".menu ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        let targetID = link.getAttribute("href");
        let targetElement = document.querySelector(targetID);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        } else {
            console.error(`No element found with ID: ${targetID}`);
        }
    });
});
})


document.getElementById("btn").addEventListener("click", () => {
    const line = document.getElementById("line2") 
    if(line.style.display==="none"){
        line.style.display="flex";
    }else{
        line.style.display= "none"
    }
})

