import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex01NgClassComponent } from './ex01-ng-class/ex01-ng-class.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex01NgClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {



  constructor() { }



  ngOnInit(): void { }

  toggle() { }
  
}
