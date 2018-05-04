import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LinuxcPage } from '../pages/linuxc/linuxc';
import { LinuxintPage } from '../pages/linuxint/linuxint';
import { NetworkqaPage } from '../pages/networkqa/networkqa';
import { IntroPage } from '../pages/intro/intro';
import { DesktopspPage } from '../pages/desktopsp/desktopsp';
import { TechnicalspPage } from '../pages/technicalsp/technicalsp';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = IntroPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  onclickHome() {
    this.nav.setRoot(HomePage);
  }

  onclicklinuxco() {
    this.nav.push(LinuxcPage);
  }

  onclicklinuxint(){
    this.nav.push(LinuxintPage);
  }

  onclicknetworkqa(){
    this.nav.push(NetworkqaPage);
  }

  onclickdesktopsp(){
    this.nav.push(DesktopspPage);
  }

  onclicktechnicalsp(){
    this.nav.push(TechnicalspPage);
  }

}
