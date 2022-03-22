import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';
import {FormsModule} from "@angular/forms";
import {InfoService} from "./info.service";

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DisplayComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
