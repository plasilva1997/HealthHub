import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImcPageRoutingModule } from './imc-routing.module';

import { ImcPage } from './imc.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImcPageRoutingModule,
    SharedModule
  ],
  declarations: [ImcPage]
})
export class ImcPageModule {}
