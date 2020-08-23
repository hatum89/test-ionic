import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-segur',
  templateUrl: './segur.page.html',
  styleUrls: ['./segur.page.scss'],
})
export class SegurPage implements OnInit {

  show: any;
  userForm: FormGroup;
  user: UserModel = new UserModel();

  constructor(private formBuilder: FormBuilder,
              private navController: NavController) {
    this.show = false;
    this.userForm = this.formBuilder.group({

      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      confirmEmail : ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      pin: ['', Validators.compose([
        Validators.required
      ])],
      confirmPin: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  ngOnInit() {
  }

  continue() {
    if(this.userForm.get('email').value === 'yo123@hotmail.com'){
      document.getElementById('modal1').click();
    } else {
      this.user.setEmail(this.userForm.get('email').value);
      this.user.setEmail(this.userForm.get('confirmEmail').value);
      this.user.setPin(this.userForm.get('pin').value);
      this.user.setPin(this.userForm.get('confirmPin').value);
      localStorage.setItem('user', JSON.stringify(this.user));
      console.log(this.user);
      this.navController.navigateRoot('temi-condi').then()
    }
  }

}
