export interface OpenWeather {
  dt: string;
  temp: any; // number | {day: number}
  weather: [{icon: string}];
  humidity: number;
  dew_point: number;
  visibility: number;
}
