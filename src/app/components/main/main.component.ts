import {Component, Input, OnInit} from '@angular/core';
import {City} from "../../models/city.model";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() city: City | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
