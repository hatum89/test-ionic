import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-verifi-datos',
  templateUrl: './verifi-datos.page.html',
  styleUrls: ['./verifi-datos.page.scss'],
})
export class VerifiDatosPage implements OnInit {

  show: any;
  userForm: FormGroup;
  user: UserModel = new UserModel();
  gender: string = null;

  constructor(private formBuilder: FormBuilder,
              private navController: NavController) {
    this.show = false;
    this.userForm = this.formBuilder.group({

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
      ])]
    });
  }

  ngOnInit() {
    const user = localStorage.getItem('user');
    this.user.set(JSON.parse(user));
    console.log(this.user.getGender_Gender());
    this.gender = this.user.getGender_Gender();

  }

  continue() {

    this.user.setFirstName(this.userForm.get('firstName').value);
    this.user.setSecondName(this.userForm.get('secondName').value);
    this.user.setFirstLastName(this.userForm.get('lastName').value);
    this.user.setSecondLastName(this.userForm.get('secondLastName').value);
    this.user.setGender_Gender(this.gender);

    localStorage.setItem('user',JSON.stringify(this.user));
    console.log(this.user);

    this.navController.navigateRoot('/segur').then()
  }

  cancel() {
    this.navController.navigateRoot('/info-gen').then()
  }
}


