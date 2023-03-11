import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import {GeoapifyGeocoderAutocompleteModule} from "@geoapify/angular-geocoder-autocomplete";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    GeoapifyGeocoderAutocompleteModule.withConfig('API_KEY')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
