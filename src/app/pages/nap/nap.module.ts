import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NapPageRoutingModule } from './nap-routing.module';

import { NapPage } from './nap.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NapPageRoutingModule,
    SharedModule
  ],
  declarations: [NapPage]
})
export class NapPageModule {

}
