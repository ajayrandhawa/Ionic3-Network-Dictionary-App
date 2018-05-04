import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LinuxcPage } from './linuxc';

@NgModule({
  declarations: [
    LinuxcPage,
  ],
  imports: [
    IonicPageModule.forChild(LinuxcPage),
  ],
})
export class LinuxcPageModule {}
