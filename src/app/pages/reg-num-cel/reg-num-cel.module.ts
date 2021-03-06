import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegNumCelPageRoutingModule } from './reg-num-cel-routing.module';

import { RegNumCelPage } from './reg-num-cel.page';
import {RegNumComponentPageModule} from '../../components/reg-num-component/reg-num-component.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RegNumCelPageRoutingModule,
        ReactiveFormsModule,
        RegNumComponentPageModule
    ],
  declarations: [RegNumCelPage]
})
export class RegNumCelPageModule {}
