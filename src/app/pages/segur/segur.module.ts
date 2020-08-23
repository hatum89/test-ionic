import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegurPageRoutingModule } from './segur-routing.module';

import { SegurPage } from './segur.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SegurPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [SegurPage]
})
export class SegurPageModule {}
