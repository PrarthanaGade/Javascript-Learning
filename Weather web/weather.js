const apiKey = 'f2deb7136257cbee2e611e68a8fe7aae'; // Replace with your OpenWeatherMap API key
const inputField = document.querySelector('.search input');
const button = document.querySelector('.search button');
const tempElement = document.querySelector('.temp');
const cityElement = document.querySelector('.city');
const humidityElement = document.querySelector('.humidity p:first-child');
const windElement = document.querySelector('.wind p:last-child');
const weatherIcon = document.querySelector('.weather img');

button.addEventListener('click', () => {
    const city = inputField.value.trim();
    if (!city) {
        alert('Please enter a valid city name.');
        return;
    }

    // Construct API URL
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Fetch weather data
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            // Extract data
            const temp = Math.round(data.main.temp);
            const cityName = data.name;
            const humidity = data.main.humidity;
            const windSpeed = Math.round(data.wind.speed * 3.6); // Convert m/s to km/h
            const weatherMain = data.weather[0].main.toLowerCase();

            // Update the UI
            tempElement.textContent = `${temp}°C`;
            cityElement.textContent = cityName;
            humidityElement.textContent = `${humidity}%`;
            windElement.textContent = `${windSpeed} km/h`;

        })
        .catch(error => {
            alert(error.message); // Show an error message if something goes wrong
        });
});
