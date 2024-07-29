let Daily = document.getElementById("daily");
let Weekly = document.getElementById("weekly");
let Monthly = document.getElementById("monthly");

window.addEventListener("load", (evt) =>{
  getJsonData('daily')
})


Daily.addEventListener("click", function(){
  Weekly.style.color='hsl(236, 100%, 87%)';
  Monthly.style.color='hsl(236, 100%, 87%)';
  this.style.color ='#fff'
  getJsonData("daily");
})

Weekly.addEventListener("click", function() {
  Daily.style.color='hsl(236, 100%, 87%)';
  Monthly.style.color='hsl(236, 100%, 87%)';
  this.style.color ='#fff'
  getJsonData("weekly");
})

Monthly.addEventListener("click", function() {
  Daily.style.color='hsl(236, 100%, 87%)';
  Weekly.style.color='hsl(236, 100%, 87%)';
  this.style.color ='#fff'
  getJsonData("monthly");
})


function getJsonData(timeFrame) {
  fetch('./data.json').then(response => {
    return response.json();
  }).then(data => {
    data.forEach((value, index) => {
      let current = value.timeframes[timeFrame].current;
      let previous = value.timeframes[timeFrame].previous;
      let title = value.title;
      let textNode;

      let titleElement = document.getElementById(`title-${index}`)
      let currentHrsElement = document.getElementById(`current-${index}`)

      titleElement.innerHTML = title;
      currentHrsElement.innerHTML =current.toString()+"hrs";

      const spanNode = document.createElement("span")

      if(timeFrame === "daily"){
      textNode =document.createTextNode("yesterday - "+previous.toString()+"hrs");
      }

      else if(timeFrame === "weekly"){
        textNode =document.createTextNode("Last Week - " +previous.toString()+"hrs");
      }

      else{
        textNode = document.createTextNode("Last Month - " +previous.toString()+"hrs")
      }

      spanNode.appendChild(textNode);
      currentHrsElement.appendChild(spanNode)

    })
  })
}