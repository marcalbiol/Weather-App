import {Component, OnInit} from '@angular/core';
import {City} from "./models/city.model";
import {WeatherService} from "./services/weather.service";
import {Weather} from "./models/weather.model";
import {WeatherBase} from "./models/weather-base.model";
import {OpenWeather} from "./models/open-weather.model";
import {Ip} from "./models/ip";

const timestamp = require('unix-timestamp');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Weather-App';
  city?: City;
  weather?: Weather;
  weatherForecast: WeatherBase[] = [];

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {

    if (document.cookie){
      const cityData: City = JSON.parse(document.cookie)
      const newCity = new City(cityData.name, cityData.lat, cityData.lon)
      this.onPlaceSelected(newCity);
    } else {
      //no hay cookies, llama al servicio y coge la ciudad x ip
      this.weatherService.getIp().subscribe((res: Ip) => {
        const newCity = new City(res.city, res.latitude.toString(), res.longitude.toString());
        this.onPlaceSelected(newCity);
      });
    }
  }


  onPlaceSelected(city: City) {
    this.city = city;
    document.cookie = JSON.stringify(city)
    this.loadWeather(city);
  }


  loadWeather(city: City) {
    this.weatherService.getWeatherData(city.lat, city.lon).subscribe(res => {
      const current: OpenWeather = res.current;
      const currentDate = timestamp.toDate(current.dt);
      this.weather = new Weather(currentDate, current.temp, current.weather[0].icon, current.humidity, current.dew_point, current.visibility);

      this.weatherForecast = [];
      const days = res.daily.slice(1, 7);
      days.forEach((forecast: OpenWeather) => {
        let date = timestamp.toDate(forecast.dt);
        let weather = new WeatherBase(date, forecast.temp.day, forecast.weather[0].icon);
        this.weatherForecast.push(weather);
      });
    });
  }
}

