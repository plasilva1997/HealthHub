import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'gender',
    loadChildren: () => import('./pages/gender/gender.module').then(m => m.GenderPageModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule),

  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),
  },
  {
    path: 'stats',
    loadChildren: () => import('./pages/stats/stats.module').then( m => m.StatsPageModule),
  },
  {
    path: 'infos',
    loadChildren: () => import('./pages/infos/infos.module').then(m => m.InfosPageModule),
  },
    {
    path: 'imc',
    loadChildren: () => import('./pages/imc/imc.module').then(m => m.ImcPageModule)
  },
  {
    path: 'imc',
    loadChildren: () => import('./pages/imc/imc.module').then( m => m.ImcPageModule)
  },
  {
    path: 'tabac',
    loadChildren: () => import('./pages/tabac/tabac.module').then( m => m.TabacPageModule)
  },
  {
    path: 'alcool',
    loadChildren: () => import('./pages/alcool/alcool.module').then( m => m.AlcoolPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./pages/profil/profil.module').then( m => m.ProfilPageModule)
  },  {
    path: 'profil-save',
    loadChildren: () => import('./pages/profil-save/profil-save.module').then( m => m.ProfilSavePageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./pages/profil/profil.module').then( m => m.ProfilPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
