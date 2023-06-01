import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../model/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  constructor(private http: HttpClient){ }
  getCityWeather(city: string): Observable<WeatherData>{
    return this.http.get<WeatherData>("https://api.openweathermap.org/data/2.5/weather", {
      params: new HttpParams()
      .set('q', city)
      .set('appid','951bd9cc610aaa30a1c9d1117dea6f93')
      .set('units', 'imperial')
    })
  }
}
