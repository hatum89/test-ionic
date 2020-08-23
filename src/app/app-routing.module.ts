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
  {
    path: 'reg-num-component',
    loadChildren: () => import('./components/reg-num-component/reg-num-component.module').then( m => m.RegNumComponentPageModule)
  },
  {
    path: 'num-cel-innput',
    loadChildren: () => import('./pages/num-cel-innput/num-cel-innput.module').then( m => m.NumCelInnputPageModule)
  },
  {
    path: 'cod-verif',
    loadChildren: () => import('./pages/cod-verif/cod-verif.module').then( m => m.CodVerifPageModule)
  },
  {
    path: 'info-gen',
    loadChildren: () => import('./pages/info-gen/info-gen.module').then( m => m.InfoGenPageModule)
  },
  {
    path: 'verifi-datos',
    loadChildren: () => import('./pages/verifi-datos/verifi-datos.module').then( m => m.VerifiDatosPageModule)
  },
  {
    path: 'segur',
    loadChildren: () => import('./pages/segur/segur.module').then( m => m.SegurPageModule)
  },
  {
    path: 'temi-condi',
    loadChildren: () => import('./pages/temi-condi/temi-condi.module').then( m => m.TemiCondiPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
