import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {WaveComponent} from '../components/wave/wave.component';
import {LogoComponent} from '../components/logo/logo.component';

const contents = [
  WaveComponent,
  LogoComponent
];

@NgModule({
  declarations: contents,
  imports: [
    CommonModule,
  ],
  exports: contents,
})
export class SharedModule { }
