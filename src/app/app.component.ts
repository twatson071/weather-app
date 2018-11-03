import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  searchTerm = 'San Diego';
  searchWeather(searchTerm) {
    getSearchMethod(searchTerm);
    fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result => {
      return result.json();
    }).then(result => {
      init(result);
    })
  }

}
let appId = 'c77450d0bc6490eab069d2efed7f8591';
let units = 'imperial';
let searchMethod = 'zip'
function getSearchMethod(searchTerm) {
  if (searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm)
    searchMethod = 'zip';
  else
    searchMethod = 'q';
}
function init(resultFromServer) {
  console.log(resultFromServer.weather[0]);
  switch (resultFromServer.weather[0].main) {
    case 'Clear':
      document.body.style.backgroundImage = 'url("../assets/images/clear.jpg")';
      break;
    case 'Clouds':
      document.body.style.backgroundImage = 'url("../assets/images/cloudy.jpg")';
      break;
    case 'Rain':
    case 'Drizzle':
    case 'Mist':
      document.body.style.backgroundImage = 'url("../assets/images/rain.jpg")';
      break;

    case 'Thunderstorm':
      document.body.style.backgroundImage = 'url("../assets/images/storm.jpg")';
      break;

    case 'Snow':
      document.body.style.backgroundImage = 'url("../assets/images/snow.jpg")';
      break;

    default:
      break;
  }
}
