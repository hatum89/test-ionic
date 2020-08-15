import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegNumCelPage } from './reg-num-cel.page';

const routes: Routes = [
  {
    path: '',
    component: RegNumCelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegNumCelPageRoutingModule {}
