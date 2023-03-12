import {WeatherBase} from "./weather-base.model";

export class Weather extends WeatherBase {
  humidity: number;
  dewPoint: number;
  visibility: number;

  constructor(date: Date, temp: number, icon: string, humidity: number, dewPoint: number, visibility: number) {
    super(date, temp, icon);
    this.humidity = humidity;
    this.dewPoint = dewPoint;
    this.visibility = visibility;
  }
}
