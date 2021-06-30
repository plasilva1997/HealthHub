import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilPageRoutingModule } from './profil-routing.module';

import { ProfilPage } from './profil.page';
import {DepositModalComponent} from "../../components/deposit-modal/deposit-modal.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilPageRoutingModule
  ],
  declarations: [ProfilPage, DepositModalComponent],
  entryComponents: [DepositModalComponent]
})
export class ProfilPageModule {}
