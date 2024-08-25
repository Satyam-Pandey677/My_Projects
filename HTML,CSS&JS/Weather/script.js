const citys = document.getElementById('city').value;

window.addEventListener("load", (evt) =>{
    weather('nagpur')
  })

const button =  document.getElementById('submit');

button.addEventListener("click", (e) => {
    e.preventDefault();
    const citys = document.getElementById('city').value.trim();
    weather(citys);
});

function weather(city){
    document.getElementById('header').textContent = city
    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
    fetch(url,{
        method: 'GET',
        headers: {
            'x-rapidapi-key': '0029fb19c5msh0aba98b16bae7a1p1d4839jsne8f2d653662e',
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }}).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the response as JSON
        }).then
    (data => {
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; 
        document.getElementById('icon').src= iconUrl;
        document.getElementById('temp').textContent = data.coord.lat;
        document.getElementById('header').textContent = data.name;
        document.getElementById('humidity').textContent = data.main.humidity;
        document.getElementById('wind').textContent = data.wind.speed;
    })
}
