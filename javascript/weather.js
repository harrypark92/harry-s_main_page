const API_KEY = "8d9e6e3a2a1735cf305845da8d83bc17";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector('#weather span');
        weather.innerText = `${data.main.temp}℃ / ${data.weather[0].main} \n ${data.name}`;
    })
};
function onGeoError(){
    alert("Can't find you, No weather for you")
};

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
