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
      ])],
      gender: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  ngOnInit() {
    const user = localStorage.getItem('user');
    this.user.setGender_Gender(JSON.parse(user));
    console.log(this.user);
  }

  continue() {

    this.user.setFirstName(this.userForm.get('firstName').value);
    this.user.setSecondName(this.userForm.get('secondName').value);
    this.user.setFirstLastNames(this.userForm.get('lastName').value);
    this.user.setSecondLastNames(this.userForm.get('secondLastName').value);
    this.user.setGender_Gender(this.userForm.get('gender').value);

    localStorage.setItem('user',JSON.stringify(this.user));
    console.log(this.user);

    this.navController.navigateRoot('/segur').then()
  }

  cancel() {
    this.navController.navigateRoot('/info-gen').then()
  }
}


