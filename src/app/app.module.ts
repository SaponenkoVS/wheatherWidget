import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WidgetComponent } from './components/widget/widget.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { CityComponent } from './components/widget/city/city.component';
import {NgForOf, NgIf} from "@angular/common";
import {UsecasesModule} from "./usecase/usecases.module";

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    CityComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterOutlet,
    UsecasesModule
  ],
  providers: [
    NgForOf,
    NgIf
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
