import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifiDatosPageRoutingModule } from './verifi-datos-routing.module';

import { VerifiDatosPage } from './verifi-datos.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        VerifiDatosPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [VerifiDatosPage]
})
export class VerifiDatosPageModule {}
