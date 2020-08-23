import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {SignupV2Service} from '../../services/signup-v2.service';

@Component({
  selector: 'app-reg-screen00',
  templateUrl: './reg-screen00.page.html',
  styleUrls: ['./reg-screen00.page.scss'],
})
export class RegScreen00Page implements OnInit {

  constructor( public nav: NavController,
               private signupV2Service: SignupV2Service) { }

  ngOnInit() {
    this.signupV2Service.signup();
  }
  goRegister(){
    this.nav.navigateRoot('reg-num-cel').then();
  }
}
