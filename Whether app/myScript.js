const url = `https://api.openweathermap.org/data/2.5/`;
const apiKey =
	'592eefc4d557c456e0f605c794e0d811';

$(document).ready(function () {
	weatherFn('Pune');
});

async function weatherFn(cName) {
	const temp =
		`${url}?q=${cName}&appid=${apiKey}&units=metric`;
	try {
		const res = await fetch(temp);
		const data = await res.json();
		if (res.ok) {
			weatherShowFn(data);
		} else {
			alert('City not found. Please try again.');
		}
	} catch (error) {
		console.error('Error fetching weather data:', error);
	}
}

function weatherShowFn(data) {
	$('#city_name"').text(data.name);
	$('#date').text(moment().
		format('MMMM Do YYYY, h:mm:ss a'));
	$('#tem').
		html(`${data.main.temp}°C`);
	$('#description').
		text(data.weather[0].description);
	$('#windspeed').
		html(`Wind Speed: ${data.wind.speed} m/s`);
	$('#app_logo').
		attr('src',
			`...`);
	$('#Weather_info').fadeIn();
}
