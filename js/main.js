async function getData(Town) {
  let response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=33c6de43c2b64b1dbd3145458221410&q=${Town}&days=3`
  );
  let finalResponse = await response.json();
  console.log(finalResponse);
  displayData(finalResponse);
}
document.getElementById('search').addEventListener('keyup',function (e){
  console.log(e.target)
  if(e.target.value <= 2){
    getData('cairo')
  }
  else{
    getData(e.target.value);
  }
})

function displayData(data) {
  let temp = `<div class="animate44 col-md-4 text-center text-white overflow-hidden">
    <div class="dayBox d-flex justify-content-center align-items-center shadow rounded-3">
      <p></p>
      <p>${data.forecast.forecastday[0].date}</p>
    </div>
    <div class="shadow rounded-3 tembBox tembBox1">
      <h4>${data.location.name}</h4>
      <p class="fs-1">${data.current.temp_c}<SUp>o</SUp>C</p>
      <img src="${data.current.condition.icon}" alt="" />
      <p class="burlywood">${data.current.condition.text}</p>
    </div>
  </div>
  <div class="animate44 col-md-4 text-center text-white">
    <div class="dayBox d-flex justify-content-center align-items-center shadow rounded-3">
      <p>${data.forecast.forecastday[1].date}</p>
    </div>
    <div class="shadow rounded-3 tembBox tembBox23">
      <img src="${data.forecast.forecastday[1].day.condition.icon}" alt="" />
      <p>${data.forecast.forecastday[1].day.maxtemp_c}<SUp>o</SUp>C</p>
      <p>${data.forecast.forecastday[1].day.mintemp_c}<SUp>o</SUp>C</p>
      <p class="burlywood">${data.forecast.forecastday[1].day.condition.text}</p>
    </div>
  </div>
  <div class="animate44 col-md-4 text-center text-white">
    <div class="dayBox d-flex justify-content-center align-items-center shadow rounded-3">
      <p>${data.forecast.forecastday[2].date}</p>
    </div>
    <div class="shadow rounded-3 tembBox tembBox23">
      <img src="${data.forecast.forecastday[2].day.condition.icon}" alt="" />
      <p>${data.forecast.forecastday[2].day.maxtemp_c}</p>
      <p>${data.forecast.forecastday[2].day.mintemp_c}</p>
      <p class="burlywood">${data.forecast.forecastday[2].day.condition.text}</p>
    </div>
  </div>`;
  document.getElementById("myRow").innerHTML = temp;
}

getData('cairo');
