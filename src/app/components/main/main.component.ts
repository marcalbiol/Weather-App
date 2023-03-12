import {Component, Input, OnInit} from '@angular/core';
import {City} from "../../models/city.model";
import {Weather} from "../../models/weather.model";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() city?: City;
  @Input() weather?: Weather;

  date: Date = new Date();

  constructor() {
  }

  ngOnInit(): void {
  }

}
