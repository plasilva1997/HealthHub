import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlcoolPageRoutingModule } from './alcool-routing.module';

import { AlcoolPage } from './alcool.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlcoolPageRoutingModule,
    SharedModule
  ],
  declarations: [AlcoolPage]
})
export class AlcoolPageModule {}
