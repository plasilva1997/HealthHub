import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NapPage } from './nap.page';

const routes: Routes = [
  {
    path: '',
    component: NapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NapPageRoutingModule {}
