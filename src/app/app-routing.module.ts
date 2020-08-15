import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'reg-screen00',
    loadChildren: () => import('./pages/reg-screen00/reg-screen00.module').then( m => m.RegScreen00PageModule)
  },
  {
    path: 'reg-num-cel',
    loadChildren: () => import('./pages/reg-num-cel/reg-num-cel.module').then( m => m.RegNumCelPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }