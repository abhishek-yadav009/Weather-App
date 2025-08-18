const inputField = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const temperatureEl = document.querySelector(".temp");
const cityEl = document.querySelector(".city");

let defaultCity = "";

async function fetchWeather(cityName) {
    try {
        const response = await fetch(`https://wttr.in/${cityName}?format=j1`);
        const data = await response.json();

        // Update the temperature and city in HTML
        temperatureEl.innerText = data.current_condition[0].FeelsLikeC + "°C";
        cityEl.innerText = cityName;

        // Update input field value
        inputField.value = cityName;

    } catch (error) {
        console.log("Error fetching weather:", error);
    }
}

// Load default city on page load
fetchWeather(defaultCity);

// Update weather when search button is clicked
searchButton.addEventListener("click", function() {
    let newCity = inputField.value.trim();

    if (newCity !== "") {
        fetchWeather(newCity);
    } else {
        temperatureEl.innerText = "---";
        cityEl.innerText = "Invalid city";
    }
});

