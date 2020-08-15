import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-reg-screen00',
  templateUrl: './reg-screen00.page.html',
  styleUrls: ['./reg-screen00.page.scss'],
})
export class RegScreen00Page implements OnInit {

  constructor( public nav: NavController) { }

  ngOnInit() {
  }
  goRegister(){
    this.nav.navigateRoot('reg-num-cel').then();
  }
}
