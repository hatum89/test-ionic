import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumCelInnputPage } from './num-cel-innput.page';

const routes: Routes = [
  {
    path: '',
    component: NumCelInnputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumCelInnputPageRoutingModule {}
