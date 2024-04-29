let loc = document.getElementById("location-input");
let tempEle = document.getElementById("temp-value");
let locEle = document.getElementById("location");
let weatherdescEle = document.getElementById('weather-desc');
let popupop = document.getElementById("empty-popup-container");
let spanvalue = document.getElementById("span");

const apiKey = '3e4a5509a0e1932b33a74228ea0c0791';

function openpopup(n) {
    switch (n) {
        case 0: spanvalue.innerHTML = "Some";
            popupop.classList.add("empty-popup-container-display");
            break;
        case 1: spanvalue.innerHTML = "Valid";
            popupop.classList.add("empty-popup-container-display");
            break;
    }
}

function closepopup() {
    popupop.classList.remove("empty-popup-container-display");
}

function getwheather() {
    if (loc.value == "") {
        openpopup(0);
    }
    else {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${loc.value}&appid=${apiKey}`
        fetch(url).then(res => res.json())
            .then(data => {
                console.log(data)
                const { name } = data
                const { feels_like } = data.main
                const { description } = data.weather[0]
                tempEle.innerText = Math.floor(feels_like - 273);
                locEle.innerText = name;
                weatherdescEle.innerText = description
            })
            .catch(error => {
                openpopup(1);
                console.error('Error fetching weather data:', error);
            })
    }
}