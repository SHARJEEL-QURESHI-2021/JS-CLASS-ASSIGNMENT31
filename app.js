let city = document.getElementById('city');
let wind = document.getElementById('wind');
let temp = document.getElementById('temp');
let cloud = document.getElementById('cloud');
let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let inp = document.getElementById('inp');
    let url = fetch(`https://goweather.herokuapp.com/weather/${inp.value}`)
    // fetch(url)
    url.then((firstValue) => {
        return firstValue.json()
    })
        .then((secondValue) => {
            city.innerHTML = inp.value;
            cloud.innerHTML = secondValue.description;
            wind.innerHTML = secondValue.wind;
            temp.innerHTML = secondValue.temperature;
            inp.value = " "
        })
})