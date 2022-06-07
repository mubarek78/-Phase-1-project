
let locationBtn = document.querySelector('#locateBtn'),
 city = document.querySelector('.location'),
 inputvalue = document.querySelector('#city'),
 btn = document.querySelector('#submitBtn'),
 date = document.querySelector(".date"),
 wIcon = document.querySelector("#icon"),
 temp = document.querySelector('.temp'),
 description = document.querySelector('.conditions'),
 hum = document.querySelector('.h'),
 wind = document.querySelector('.w'),
 pre = document.querySelector('.p'),
 lastUpdated = document.querySelector('#lastUpdated')


let apik = "25c3942c764f3df2f802e6ce042c5d57"
let api;
const now = new Date();



 //---------------
  // Misc Functions
  // ---------------
  

locationBtn.addEventListener("click", () =>{
     navigator.geolocation.getCurrentPosition(onSuccess);
});

function onSuccess(position){
    const {latitude, longitude} = position.coords;
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apik}`;
    fetchData(api);
}




// // I collect all the information by the help of fetch method

btn.addEventListener('click', function(){
api = 'https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value+'&units=metric&appid='+apik
//This is the api key and api link from where all the information will be collected
fetchData(api);
  

})


function fetchData(api){
  
  fetch(api)
  .then(res => res.json())
  .then(data => {

// Necessary information with the API link.

      var cityname = data['name']
      var descrip = data['weather']['0']['description']
      var tempature = data['main']['temp']
      var pressure = data['main']['pressure']
      var humidity = data['main']['humidity']
      var windspeed = data['wind']['speed']
      var country = data['sys']['country']
     
      console.log(descrip)
      console.log(windspeed)

      if(descrip == 'clear sky'){
        wIcon.src = "icons/clear.svg";
    }else if(descrip == 'thunderstorm'){
        wIcon.src = "icons/storm.svg";  
    }else if(descrip == 'snow'){
        wIcon.src = "icons/snow.svg";
    }else if(descrip == 'thunderstorm'){
        wIcon.src = "icons/haze.svg";
    }else if(descrip == 'overcast clouds' || 'broken clouds'){
        wIcon.src = "icons/cloud.svg";
    }else if(descrip == 'rain' || 'LIGHT RAIN'){
        wIcon.src = "icons/rain.svg";
    }



// Make arrangements to display all the information in the webpage.
      city.innerHTML=` ${cityname}, ${country}`
      description.innerHTML =`${descrip}`
      date.innerHTML =`${now.toDateString()}`
      temp.innerHTML = `${ Math.floor(tempature)}`
      pre.innerHTML = `${pressure} hPa`
      hum.innerHTML = `${humidity}  %`
      wind.innerHTML = `${windspeed} Km/h`
      lastUpdated.innerHTML =`-- Last updated at ${now.toLocaleTimeString()} --`
      inputvalue.value = ''
      
  })
  
  .catch(err => alert('please entered correct city name'))
  
}




// ------------------------
  // Functions to run onload
  // ------------------------
  window.onload = function() {
    api = 'https://api.openweathermap.org/data/2.5/weather?q=' + 'New york' +'&units=metric&appid='+apik
//This is the api key and api link from where all the information will be collected
  fetchData(api);
  };
