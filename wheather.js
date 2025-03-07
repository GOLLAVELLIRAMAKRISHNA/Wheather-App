const apiKey = '3e4a5509a0e1932b33a74228ea0c0791';

let loc = document.getElementById("location-input");
let btn = document.getElementById("btn")

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (loc.value == "") {
        alert("Please Enter The Location...");
        loc.value = "";
    }
    else {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${loc.value}&appid=${apiKey}`;
        fetch(url).then(res => res.json())
            .then(data => {
                console.log(data);
                document.getElementById("wheather-img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
                document.getElementById("temp").innerText = Math.floor(data.main.temp - 273) + "°C";
                document.getElementById("name").innerText = data.name;
                document.getElementById("feels").innerText = "Feels like " + Math.floor(data.main.feels_like - 273) + "°C";
                document.getElementById("humidity").innerText = data.main.humidity + "%"
                document.getElementById("wind").innerText = data.wind.speed + "m/s"
                document.getElementById("cloud").innerText = data.clouds.all
                document.getElementById("plessure").innerText = data.main.pressure + "hPa"
                document.getElementById("desc").innerText = data.weather[0].description
                const options = {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true
                }
                document.getElementById("suntime").innerText = getLongFormatDateTime(data.sys.sunrise, data.timezone, options);
                document.getElementById("settime").innerText = getLongFormatDateTime(data.sys.sunset, data.timezone, options);
                document.getElementById("lon").innerText = "Longitude : " + data.coord.lon;
                document.getElementById("lat").innerText = "Latitude : " + data.coord.lat;
            })
            .catch(e => {
                alert("Please Enter The Valid Location...")
                loc.value = "";
            })
    }

})

