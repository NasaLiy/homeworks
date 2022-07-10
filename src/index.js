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
