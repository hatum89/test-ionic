import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegScreen00PageRoutingModule } from './reg-screen00-routing.module';

import { RegScreen00Page } from './reg-screen00.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegScreen00PageRoutingModule
  ],
  declarations: [RegScreen00Page]
})
export class RegScreen00PageModule {}
