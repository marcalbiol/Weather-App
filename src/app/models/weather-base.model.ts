export class WeatherBase {
  temp: number;
  icon: string;

  constructor(temp: number, weatherCondition: string) {
    this.temp = temp;
    this.icon = weatherCondition;
  }
}
