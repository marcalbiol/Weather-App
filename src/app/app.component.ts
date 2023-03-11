import {Component, Input} from '@angular/core';
import {MainComponent} from "./main/main.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather-App';
  @Input() main?: MainComponent;

}
