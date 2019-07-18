import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Modal
import {AvaliacaoModalPageModule } from './avaliacao-modal/avaliacao-modal.module';
import {AvaliacaoPageModule} from './avaliacao/avaliacao.module';

// List
import {ListPageModule} from './list/list.module';

// Storage
import { IonicStorageModule } from '@ionic/storage';

// Http
import {HttpClientModule} from '@angular/common/http';

// Camera
import {Camera} from '@ionic-native/camera/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AvaliacaoModalPageModule,
    IonicStorageModule.forRoot(),
    AvaliacaoPageModule,
    HttpClientModule,
    ListPageModule],

  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
