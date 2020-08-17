import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {SignupCifinService} from '../../services/signup-cifin.service';
import {VerifyDirectLoginService} from '../../services/verify-direct-login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public nav: NavController,
               private verifyDirectLoginService: VerifyDirectLoginService) {
    this.verifyDirectLoginService.getLogin();
    setTimeout (() => {
     nav.navigateRoot('/reg-screen00').then();
    }, 3000);
  }
}
