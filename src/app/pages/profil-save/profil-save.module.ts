import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilSavePageRoutingModule } from './profil-save-routing.module';

import { ProfilSavePage } from './profil-save.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilSavePageRoutingModule
  ],
  declarations: [ProfilSavePage]
})
export class ProfilSavePageModule {}
