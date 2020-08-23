import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemiCondiPage } from './temi-condi.page';

const routes: Routes = [
  {
    path: '',
    component: TemiCondiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemiCondiPageRoutingModule {}
