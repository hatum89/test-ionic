import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public nav: NavController) {
    setTimeout (() => {
     nav.navigateRoot('/reg-screen00').then();
    }, 3000);
  }
}
