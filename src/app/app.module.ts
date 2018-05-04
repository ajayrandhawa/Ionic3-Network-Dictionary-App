import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IntroPage } from '../pages/intro/intro';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LinuxcPage } from '../pages/linuxc/linuxc';
import { LinuxintPage } from '../pages/linuxint/linuxint';
import { NetworkqaPage } from '../pages/networkqa/networkqa';
import { DesktopspPage } from '../pages/desktopsp/desktopsp';
import { TechnicalspPage } from '../pages/technicalsp/technicalsp';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LinuxcPage,
    LinuxintPage,
    NetworkqaPage,
    IntroPage,
    DesktopspPage,
    TechnicalspPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LinuxintPage,
    LinuxcPage,
    IntroPage,
    NetworkqaPage,
    DesktopspPage,
    TechnicalspPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
