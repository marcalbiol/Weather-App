import {Component, OnInit} from '@angular/core';
import {City} from "./models/city.model";
import {WeatherService} from "./services/weather.service";
import {Weather} from "./models/weather.model";
import {WeatherBase} from "./models/weather-base.model";
import {OpenWeather} from "./models/open-weather.model";
import {Ip} from "./models/ip";
import {interval, Observable, take} from "rxjs";

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
  lastCityInfo: string[] = [];

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    // se guardan los valores de las cookies
    const [cityName, latit, long] = document.cookie.split(',');

    // si existen cookies
    const city = cityName ? new City(cityName, latit, long) : null;

    if (city) {
      this.onPlaceSelected(city);
    } else {
      //no hay cookies, llama al servicio y coge la ciudad x ip
      this.weatherService.getIp().subscribe((res: Ip) => {
        const newCity = new City(res.city, res.latitude.toString(), res.longitude.toString());
        this.onPlaceSelected(newCity);
      });
    }
  }


  onPlaceSelected(city: City) {
    this.lastCityInfo = []
    this.city = city;
    city.name = city.name.replace(',', '.')
    Object.values(city).map(x => {
      this.lastCityInfo?.push(x);
    })
    document.cookie = this.lastCityInfo.toString()
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

