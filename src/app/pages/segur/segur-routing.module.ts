import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegurPage } from './segur.page';

const routes: Routes = [
  {
    path: '',
    component: SegurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegurPageRoutingModule {}
