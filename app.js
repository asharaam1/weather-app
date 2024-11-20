const btn = document.querySelector(".btn");
const data = document.getElementById("input-text");
const numbC = document.querySelector(".numb")
const numb2FeelsLike = document.querySelector(".numb-2")
const location1 = document.querySelector(".location")
const updated = document.querySelector(".updated-time")
const humidity1 = document.querySelector("#humidity1")
const weatherCondition = document.querySelector(".weathers")
const logo1 = document.querySelector(".logo-img")




//! Weather Api valid till: 02-dec-2024 
//440b0c872d7345648511208282-41811
    
//https://www.weatherapi.com/api-explorer.aspx

btn.addEventListener("click", () => {
    
    // console.log(data.value);
    fetch(`https://api.weatherapi.com/v1/current.json?key=440b0c872d734564851120828241811&q=${data.value}&aqi=no`)
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
        
        logo1.innerHTML =`<img  src="https:${res.current.condition.icon}" set="">`
        numbC.innerHTML = `<span class="numb">${res.current.heatindex_c}</span>`
        weatherCondition.innerHTML = `<div class="weathers">
                    ${res.current.condition.text}
                    </div>`
        location1.innerHTML = `<div class="location">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>${res.location.name}, ${res.location.country}</span>
                    </div>`
        updated.innerHTML = `<span class="updated-time">Last Updated: ${res.current.last_updated}</span>`
        numb2FeelsLike.innerHTML = `<span class="numb-2">${res.current.feelslike_c}</span>`
        humidity1.innerHTML = `<span id="humidity1">${res.current.humidity}%</span>`
        
    })
    .catch((err) => console.log(err))

    data.value = '';
});
