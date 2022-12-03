import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleDataSource } from './datasource.model';
import { Model } from './repository.model';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SimpleDataSource,
    Model
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
