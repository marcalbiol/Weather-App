import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {City} from "../../models/city.model";
import {Weather} from "../../models/weather.model";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnChanges {

  @Input() city?: City;
  @Input() weather?: Weather;

  date?: Date;

  constructor() {
  }

  ngOnChanges(): void {
    if (this.weather) {
      this.date = new Date();
    }
  }

}
