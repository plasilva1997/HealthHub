import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenderPageRoutingModule } from './gender-routing.module';

import { GenderPage } from './gender.page';
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenderPageRoutingModule,
    SharedModule
  ],
  declarations: [GenderPage]
})
export class GenderPageModule {}
