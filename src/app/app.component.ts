import {Component, OnInit} from '@angular/core';
import {City} from "./models/city.model";
import {WeatherService} from "./services/weather.service";
import {Weather} from "./models/weather.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Weather-App';

  city?: City;
  weather?: Weather;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    let city = new City("43201 Reus, Spain", "41.1555564", "1.1076133");
    this.onPlaceSelected(city);
  }

  onPlaceSelected(city: City) {
    this.city = city;
    this.loadWeather(city);
  }

  loadWeather(city: City) {
    this.weatherService.getWeatherData(city.lat, city.lon).subscribe(res => {
      const current = res.current;
      this.weather = new Weather(current.temp, current.weather[0].icon, current.humidity, current.dew_point, current.visibility);
    })
  }

}
