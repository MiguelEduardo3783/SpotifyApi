import { AccountServiceService } from './account-service.service';
import { SpotifyAuth } from '@ionic-native/spotify-auth/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { IonicStorageModule } from '@ionic/storage';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Media } from '@ionic-native/media/ngx'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SpotifyAuth,
    Media,
    AccountServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
