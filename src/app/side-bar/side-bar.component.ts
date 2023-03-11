import {Component, OnInit} from '@angular/core';
import {GeoapifyGeocoderAutocompleteModule} from "@geoapify/angular-geocoder-autocomplete";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  // TODO: Set correct type
  placeSelected(event: any) {
    console.log("Lat: " + event.properties.lat);
    console.log("Lon: " + event.properties.lon);
  }

}
