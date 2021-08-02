function formatDate (timestamp){
    let date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;

}

function displayTemperature(response){
    console.log(response.data.main.temp);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector ("#date")
    temperatureElement.innerHTML = Math.round (response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round (response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.dt * 1000)


  
}

let apiKey = "bf1a450160d22fdfe731b236aa5f1569";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);

