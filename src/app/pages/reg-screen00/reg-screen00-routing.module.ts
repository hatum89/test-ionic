import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegScreen00Page } from './reg-screen00.page';

const routes: Routes = [
  {
    path: '',
    component: RegScreen00Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegScreen00PageRoutingModule {}
