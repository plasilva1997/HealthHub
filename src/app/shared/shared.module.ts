import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {WaveComponent} from '../components/wave/wave.component';
import {LogoComponent} from '../components/logo/logo.component';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';


const contents = [
  WaveComponent,
  LogoComponent
];

@NgModule({
  declarations: contents,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: contents,
})
export class SharedModule { }
