import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {City} from "../../models/city.model";
import {Weather} from "../../models/weather.model";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Input() weather: Weather | undefined;
  @Output() onSelected = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onPlaceSelected(event: { properties: { address_line2: string; lat: string; lon: string; }; }) {
    let city = new City(event.properties.address_line2, event.properties.lat, event.properties.lon);
    this.onSelected.emit(city);
  }

}
