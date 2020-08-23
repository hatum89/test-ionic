import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodVerifPageRoutingModule } from './cod-verif-routing.module';

import { CodVerifPage } from './cod-verif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodVerifPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CodVerifPage]
})
export class CodVerifPageModule {}
