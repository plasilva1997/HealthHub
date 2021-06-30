import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {RouterModule, Routes} from "@angular/router";
import {RegisterPage} from "../auth/register/register.page";
import {LoginPage} from "../auth/login/login.page";
import {SharedModule} from "../../shared/shared.module";
import {AppComponent} from "../../app.component";


const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  declarations: [HomePage, LoginPage, RegisterPage],
  entryComponents: [LoginPage, RegisterPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
})
export class HomePageModule {}
