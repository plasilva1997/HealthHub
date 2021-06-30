import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilSavePage } from './profil-save.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilSavePageRoutingModule {}
