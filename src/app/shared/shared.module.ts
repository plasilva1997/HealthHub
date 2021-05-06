import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {WaveComponent} from '../components/wave/wave.component';
import {LogoComponent} from '../components/logo/logo.component';
import {BtnLogResComponent} from '../components/btn-log-res/btn-log-res.component';
import {IonicModule} from "@ionic/angular";

const contents = [
  WaveComponent,
  LogoComponent,
  BtnLogResComponent
];

@NgModule({
  declarations: contents,
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: contents,
})
export class SharedModule { }
