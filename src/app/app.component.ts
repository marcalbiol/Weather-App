import {Component} from '@angular/core';
import {City} from "./models/city.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather-App';

  city: City = new City("43201 Reus, Spain", "41.1555564", "1.1076133");

  onPlaceSelected(city: City) {
    this.city = city;
  }

}
