import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumCelInnputPageRoutingModule } from './num-cel-innput-routing.module';

import { NumCelInnputPage } from './num-cel-innput.page';
import {RegNumComponentPageModule} from '../../components/reg-num-component/reg-num-component.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NumCelInnputPageRoutingModule,
        RegNumComponentPageModule,
        ReactiveFormsModule
    ],
  declarations: [NumCelInnputPage]
})
export class NumCelInnputPageModule {}
