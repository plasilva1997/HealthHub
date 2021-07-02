import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlcoolPage } from './alcool.page';

const routes: Routes = [
  {
    path: '',
    component: AlcoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlcoolPageRoutingModule {}
