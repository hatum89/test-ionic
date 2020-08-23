import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemiCondiPageRoutingModule } from './temi-condi-routing.module';

import { TemiCondiPage } from './temi-condi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemiCondiPageRoutingModule
  ],
  declarations: [TemiCondiPage]
})
export class TemiCondiPageModule {}
