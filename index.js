
var inputvalue = document.querySelector('#city')
var btn = document.querySelector('#add-city');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var pre = document.querySelector('#pre')
var hum = document.querySelector('#hum')
var wind = document.querySelector('#wind')




//kelvin to Farahanite.

function convert(num){
return (num - 255.9).toFixed(2)
}

// I collect all the information by the help of fetch method

btn.addEventListener('click', function(){

//This is the api key and api link from where all the information will be collected

  apik = "25c3942c764f3df2f802e6ce042c5d57"

  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value+'&appid='+apik)
  .then(res => res.json())
  .then(data => {

// Necessary information with the API link.

      var cityname = data['name']
      var descrip = data['weather']['0']['description']
      var tempature = data['main']['temp']
      var pressure = data['main']['pressure']
      var humidity = data['main']['humidity']
      var windspeed = data['wind']['speed']

// Make arrangements to display all the information in the webpage.
      city.innerHTML=`<span>${cityname}<span> current Weather `
      temp.innerHTML = `Temperature: <span>${ convert(tempature)} °F</span>`
      pre.innerHTML = `Pressure: <span>${pressure} hPa</span>`
      hum.innerHTML = `Humidity: <span>${humidity} %</span>`
      description.innerHTML = `Sky : <span>${descrip}<span>`
      wind.innerHTML = `Wind Speed: <span>${windspeed} M/s<span>`

  })

  .catch(err => alert('please entered correct city name'))
})
