import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabacPage } from './tabac.page';

const routes: Routes = [
  {
    path: '',
    component: TabacPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabacPageRoutingModule {}
