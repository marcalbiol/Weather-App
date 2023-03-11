import {WeatherBase} from "./weather-base.model";

export class Weather extends WeatherBase {
  humidity: number;
  dewPoint: number;
  visibility: number;

  constructor(temp: number, humidity: number, dewPoint: number, visibility: number) {
    super(temp);
    this.humidity = humidity;
    this.dewPoint = dewPoint;
    this.visibility = visibility;
  }
}
