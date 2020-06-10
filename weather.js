fetch('https://api.openweathermap.org/data/2.5/weather?lat=25&lon=-100').then(function (response) {
    return response.json();
})
    .then(function (myJson) {
        document.getElementById('t').innerHTML = myJson.weather[0].description;
        var img = document.createElement("img");
        img.src = 'http://openweathermap.org/img/w/'+ myJson.weather[0].icon +'.png';
        document.getElementById('u').appendChild(img);
    })
