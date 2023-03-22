import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Ip} from "../models/ip";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  private readonly BASE_URL = environment.apiUrlOpenWeatherMap;
  private readonly API_KEY = environment.apiKeyOpenWeatherMap;

  constructor(private http: HttpClient) {
  }

  getIp(): Observable<Ip>{
    return this.http.get<Ip>('https://ipapi.co/json/')
  }



  getWeatherData(lat: string, lon: string): Observable<any> {
    const url = `${this.BASE_URL}lat=${lat}&lon=${lon}&units=metric&appid=${this.API_KEY}`;
    return this.http.get(url);
  }

}
