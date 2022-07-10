function currentDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
        hours = "0".concat(hours);
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = "0".concat(minutes);
    }

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let dayStart = date.getDay();
    let day = days[dayStart];
    return "".concat(day, " ").concat(hours, ":").concat(minutes);
}
let dateElement = document.querySelector("#date");
let now = new Date();
dateElement.innerHTML = currentDate(now);
//search
function showCity(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    let cityChange = document.querySelector("#city");
    cityChange.innerHTML = searchInput.value;
    searchInput.value = "";
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", showCity);
//temperature
function convertFahrenheit(event) {
    event.preventDefault();
    let tempContainer = document.querySelector("#temperature");
    tempContainer.innerHTML = "72";
}

function convertCelsius(event) {
    event.preventDefault();
    let tempContainer = document.querySelector("#temperature");
    tempContainer.innerHTML = "22";
}

let fahrenheitTemp = document.querySelector("#fahrenheit");
fahrenheitTemp.addEventListener("click", convertFahrenheit);

let celsiusTemp = document.querySelector("#celsius");
celsiusTemp.addEventListener("click", convertCelsius);

function displayWeatherCondition(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
        response.data.main.temp
    );
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(
        response.data.wind.speed
    );
    document.querySelector("#description").innerHTML =
        response.data.weather[0].main;
}

function searchCity(city) {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
    searchCity(city);
}

function searchLocation(position) {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocBtn = document.querySelector("#current-location");
currentLocBtn.addEventListener("click", getCurrentLocation);

searchCity("Lviv");
