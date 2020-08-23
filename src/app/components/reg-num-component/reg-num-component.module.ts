import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegNumComponentPageRoutingModule } from './reg-num-component-routing.module';

import { RegNumComponentPage } from './reg-num-component.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RegNumComponentPageRoutingModule,
        ReactiveFormsModule
    ],
    exports: [
        RegNumComponentPage
    ],
    declarations: [RegNumComponentPage]
})
export class RegNumComponentPageModule {}
