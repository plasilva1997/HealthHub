import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddimcPage } from './addimc.page';

const routes: Routes = [
  {
    path: '',
    component: AddimcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddimcPageRoutingModule {}
