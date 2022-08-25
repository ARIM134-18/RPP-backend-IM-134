import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//RUTIRANJE se vrsi u odvojenom modulu (app-routing module ts) a mi taj modul importujemo ovde
@NgModule({ //dekorator
  declarations: [ //niz svih komponenti koje ce biti definisane na nivou angular aplikacije
    AppComponent
  ],
  imports: [ //ovde importujemo rout modul //svako modul koji ovde bude definisan, mocice da se koristi bilo gde u nasoj aplikaciji
  BrowserModule,
    AppRoutingModule
  ],
  providers: [], //ovo se tice dependency injection -- ovde mozemo da definisemo tokene za svaku klasu koju zelimo da imamo u providers nizu i da istu instancu injektujemo u bilo koju klasu koju zelimo -- mi koristimo samo servisne klase pa nam ovo ne treba
  bootstrap: [AppComponent] //definisemo koje to sve komponente bootstrapuju(ucitavaju) kada se ucita nas modul
})
export class AppModule { } //opet export da mozemo negde da importujemo po potrebi
