import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import firebase from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyDPbu3PzaMgeC9Zz5m731YRsVFAkYzvRfQ",
  authDomain: "jorgemrc-b11c8.firebaseapp.com",
  projectId: "jorgemrc-b11c8",
  storageBucket: "jorgemrc-b11c8.appspot.com",
  messagingSenderId: "211763942891",
  appId: "1:211763942891:web:e7e7c373b907319e3bb5ae"
};
firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
