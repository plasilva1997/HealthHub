import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddimcPageRoutingModule } from './addimc-routing.module';

import { AddimcPage } from './addimc.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddimcPageRoutingModule,
    SharedModule
  ],
  declarations: [AddimcPage]
})
export class AddimcPageModule {}
