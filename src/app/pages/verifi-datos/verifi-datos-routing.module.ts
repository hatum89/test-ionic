import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifiDatosPage } from './verifi-datos.page';

const routes: Routes = [
  {
    path: '',
    component: VerifiDatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifiDatosPageRoutingModule {}
