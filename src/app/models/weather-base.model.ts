export class WeatherBase {
  date: Date;
  temp: number;
  icon: string;

  constructor(date: Date, temp: number, icon: string) {
    this.date = date;
    this.temp = temp;
    this.icon = icon;
  }
}
