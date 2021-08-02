function displayTemperature(response){
    console.log(response.data.main.temp);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city")
    temperatureElement.innerHTML = Math.round (response.data.main.temp);
    cityElement.innerHTML = response.data.name;

  
}

let apiKey = "bf1a450160d22fdfe731b236aa5f1569";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);

