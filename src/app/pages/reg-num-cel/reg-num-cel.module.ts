import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegNumCelPageRoutingModule } from './reg-num-cel-routing.module';

import { RegNumCelPage } from './reg-num-cel.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RegNumCelPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [RegNumCelPage]
})
export class RegNumCelPageModule {}
