import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-verifi-datos',
  templateUrl: './verifi-datos.page.html',
  styleUrls: ['./verifi-datos.page.scss'],
})
export class VerifiDatosPage implements OnInit {

  show: any;
  user: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private navController: NavController) {
    this.show = false;
    this.user = this.formBuilder.group({

      firstName: ['', Validators.compose([
        Validators.required
      ])],
      secondName : ['', Validators.compose([
        Validators.required
      ])],
      lastName: ['', Validators.compose([
        Validators.required
      ])],
      secondLastName: ['', Validators.compose([
        Validators.required
      ])],
      gender: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  ngOnInit() {
  }

  continue() {
    this.navController.navigateRoot('segur').then()
  }

  cancel() {
    this.navController.navigateRoot('info-gen').then()
  }
}


