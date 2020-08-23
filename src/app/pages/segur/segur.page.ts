import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-segur',
  templateUrl: './segur.page.html',
  styleUrls: ['./segur.page.scss'],
})
export class SegurPage implements OnInit {

  show: any;
  user: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private navController: NavController) {
    this.show = false;
    this.user = this.formBuilder.group({

      email: ['', Validators.compose([
        Validators.required
      ])],
      confirmEmail : ['', Validators.compose([
        Validators.required
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
    this.navController.navigateRoot('temi-condi').then()
  }

}
