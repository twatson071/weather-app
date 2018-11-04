import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  getWeather(searchTerm, searchMethod) {
    let appId = 'c77450d0bc6490eab069d2efed7f8591';
    let units = 'imperial';
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`);

  }
}
