const options = {
	method: 'Get',
	headers: {
		'x-rapidapi-key': '958d9f1ff6mshfc9687496766e46p162191jsn3d33e336e62c',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response);
		cloud_pct.innerHTML = response.cloud_pct;
		cloud_pct2.innerHTML = response.cloud_pct;
		temp.innerHTML = response.temp;
		temp2.innerHTML = response.temp;
		feels_like.innerHTML = response.feels_like;
		humidity.innerHTML = response.humidity;
		min_temp.innerHTML = response.min_temp;
		max_temp.innerHTML = response.max_temp;
		max_temp2.innerHTML = response.max_temp;
		wind_speed.innerHTML = response.wind_speed;
		wind_speed2.innerHTML = response.wind_speed;
		wind_degrees.innerHTML = response.wind_degrees;

		// Convert UNIX timestamps to human-readable time
		const sunrise = new Date(response.sunrise * 1000);
		const sunset = new Date(response.sunset * 1000);

		const sunriseTime = sunrise.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
		const sunsetTime = sunset.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

		sunrise_element.innerHTML = sunriseTime;
		sunrise_element2.innerHTML = sunriseTime;
		sunset_element.innerHTML = sunsetTime;
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(city.value);
})

getWeather("Hyderabad");


function myFunction() {
	var element = document.body;
	element.dataset.bsTheme = 
		element.dataset.bsTheme == "light" ? "dark" : "light";
}
