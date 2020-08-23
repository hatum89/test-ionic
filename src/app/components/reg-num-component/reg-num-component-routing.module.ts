import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegNumComponentPage } from './reg-num-component.page';

const routes: Routes = [
  {
    path: '',
    component: RegNumComponentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegNumComponentPageRoutingModule {}
