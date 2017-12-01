import { Component } from '@angular/core';
import { ViewChild } from '@angular/core/src/metadata/di';
import { Platform } from 'ionic-angular';
import { Nav } from 'ionic-angular/components/nav/nav';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Contact } from '../pages/contact/contact';
@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild(Nav) nav : Nav;

  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      //this.nav.push(Contact);
    });
  }
}

