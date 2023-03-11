import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MainComponent} from './components/main/main.component';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {GeoapifyGeocoderAutocompleteModule} from "@geoapify/angular-geocoder-autocomplete";
import {HttpClientModule} from "@angular/common/http";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GeoapifyGeocoderAutocompleteModule.withConfig(environment.apiKeyGeoapify)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
