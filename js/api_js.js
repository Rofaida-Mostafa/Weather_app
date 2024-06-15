

let units = "metric";
let city = "cairo";

// Get HTML elements:
let weather_search = document.getElementById("search");




function getWeather() {
  fetch(
    `https://api.weatherapi.com/v1/search.json?key=31a555c1c6e640d68f7185915241106&units=${units}&q=${city}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    }).catch(error=>{
      console.log('Error fetching current weather data:', error);
    });
}
getWeather();


async function search(city) {
  let apiSearch = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=31a555c1c6e640d68f7185915241106&q=${city}&days=3`
  );

  if (apiSearch && 400 != apiSearch.status) {
    let city = await apiSearch.json();
    displayCurrent(city.location, city.current),
      otherDays(city.forecast.forecastday);
  }
}

weather_search.addEventListener("keyup", (a) => {
  search(a.target.value);
});
console.log(search("cairo"));


document.body.addEventListener("load", getWeather());

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function displayCurrent(location, currentCity) {
  if (null != currentCity) {
    let realTime = new Date(currentCity.last_updated.replace(" ", "T"));
    // console.log(realTime)
    let x = ` 
       
            
               

                    <div class="card-body d-flex flex-column gap-2" id="other">
                    <div class="container card-header " id="today">\n
                     <div class="row mb-2">
                            <div class="card-day col-6 " id="day">
                                ${days[realTime.getDay()]}
                            </div>\n
                            <div class="card-date col-6 float-end" id="date">
                                ${realTime.getDate() + months[realTime.getMonth()]}
                            </div>
                    </div>
                    


                        \x3c!-- .forecast-header --\x3e\n

                        <div class="card-body d-flex flex-column gap-2" id="current">
                           
                                <div class="country m-3">${location.name}</div>
                           
                          <div class="d-flex align-items-center ">
                                <div class="temp  m-3">${currentCity.temp_c}&#176C</div>
                           
                                <div class="status mt-1">
                                  <img src="https:${currentCity.condition.icon}" alt="condition"/>
                                </div>
                           </div>
                                <div class="desc  m-3"> ${currentCity.condition.text}</div>
                          
                           
                                <div class="icons d-flex gap-4  m-3">
                                    <span><img src="/weather2/img/icon-umberella.png" alt="umberella.icon"> 20%</span>
                                    <span><img src=" /weather2/img/icon-wind.png" alt="wind.icon"> 18km/h</span>
                                    <span><img src="/weather2/img/icon-compass.png" alt="compass.icon"> East</span>
                                </div>
                           
                    
                    </div>
                 </div>
        </div>
        `;

    document.querySelector(".main-cards").innerHTML = x;
  }
}
function otherDays(forecast) {
  let t = "";

  for (let i = 1; i < forecast.length; i++)
    t += `


                    <div class="card-body other-cards d-flex flex-column justify-content-center align-items-center  " id="other">
                    <div class="container card-header  title${i} ">
                      
                            <div class="row ">
                             <div class="card-day col-12 " id="day">
                                <div class="day d-flex justify-content-center align-items-center">
                                ${days[new Date(forecast[i].date.replace(" ", "T")).getDay()]}
                                </div>
                             </div> 
                           </div>
                     </div> <div class="card-body box${i} d-flex flex-column justify-content-center align-items-center  gap-1" id="current">
                            <div class="row mt-sm-5">
                                <div class="status2">

                                    <img src="https:${forecast[i].day.condition.icon}" alt="condition" class="img-fluid">

                                </div>
                            </div>

                            <div class="row flex-column justify-content-center align-items-center">
                                <div class="temp "> 
                                ${forecast[i].day.maxtemp_c}&#176C
                                </div>
                                  <div class="mintemp mb-5 ">
                                    ${forecast[i].day.mintemp_c}&#176C
                                </div>
                            </div>

                           
                            <div class="row mb-sm-4">
                                <div class="desc"> 
                                ${forecast[i].day.condition.text} 
                                </div>
                            </div> </div>
                      </div>`;

  document.querySelector(".main-cards").innerHTML += t;

}

search("cairo");
