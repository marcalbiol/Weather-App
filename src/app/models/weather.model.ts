import {WeatherBase} from "./weather-base.model";

export class Weather extends WeatherBase {
  humidity: number;
  dewPoint: number;
  visibility: number;

  constructor(temp: number, icon: string, humidity: number, dewPoint: number, visibility: number) {
    super(temp, icon);
    this.humidity = humidity;
    this.dewPoint = dewPoint;
    this.visibility = visibility;
  }
}
