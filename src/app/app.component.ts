import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';
import { Weather, WeatherData } from './model/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private weatherService: WeatherService){

  }

  cityName: string = 'philadelphia';
  weatherData!: WeatherData;
  
  ngOnInit(): void {
    this.getWeather(this.cityName);
    this.cityName = '';
  }

  onSubmit(){
    this.getWeather(this.cityName);
    this.cityName = '';
  }

  private getWeather(cityName: string){
    this.weatherService.getCityWeather(cityName)
    .subscribe({
      next: (response) => {
        const myImg = document.getElementById('weatherImg') as HTMLImageElement;
        const backimg = document.querySelector('.main-info') as HTMLElement;
        this.weatherData = response;
        if(this.weatherData.weather[0].main == 'Clouds'){
          myImg.src = '../assets/icons8-cloudy-80.png';
          backimg.style.backgroundImage = "url('../assets/cloudy.gif')";
        }else if(this.weatherData.weather[0].main == 'Snow'){
          myImg.src ='../assets/icons8-snow-100.png';
          backimg.style.backgroundImage = "url('../assets/snow.gif')";
        }else if(this.weatherData.weather[0].main == 'Rain'){
          myImg.src ='../assets/icons8-rain-100.png';
          backimg.style.backgroundImage = "url('../assets/rainy.gif')";
        }else{
          myImg.src ='../assets/icons8-sun-144.png';
          backimg.style.backgroundImage = "url('../assets/sunny.gif')";
        }
      }
    })
  }
}

