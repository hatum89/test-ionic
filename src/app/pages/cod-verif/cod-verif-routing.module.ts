import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodVerifPage } from './cod-verif.page';

const routes: Routes = [
  {
    path: '',
    component: CodVerifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodVerifPageRoutingModule {}
