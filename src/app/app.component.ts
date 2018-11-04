import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private appService: AppService) { }
  title = 'weather-app';
  searchTerm = 'San Diego';
  searchMethod = getSearchMethod(this.searchTerm);
  showWeather(searchTerm) {
    this.appService.getWeather(searchTerm, searchMethod).subscribe(
      data => {
        changeBackground(data);
      }
    );
  }
}
let searchMethod = 'zip';
function getSearchMethod(searchTerm) {

  if (searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm)
    searchMethod = 'zip';
  else
    searchMethod = 'q';
}
function changeBackground(resultFromServer) {
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
