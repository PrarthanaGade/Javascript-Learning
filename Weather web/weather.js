const apiKey = 'aa1c53baebed4ceba3671506253101'; // Replace with your OpenWeatherMap API key
const inputField = document.querySelector('.search input');
const button = document.querySelector('.search button');
const card = document.querySelector('.card');

button.addEventListener('click', () => {
    const city = inputField.value.trim();
    if (!city) {
        card.innerHTML = `<p>Please enter a valid city name.</p>`;
        return;
    }
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const temp = data.main.temp;
            const humidity = data.main.humidity;
            card.innerHTML = `
                <div class="weather-info">
                    <h2>Weather in ${city}</h2>
                    <p>Temperature: ${temp}°C</p>
                    <p>Humidity: ${humidity}%</p>
                </div>
            `;
        })
        .catch(error => {
            card.innerHTML = `<p>${error.message}</p>`;
        });
});
