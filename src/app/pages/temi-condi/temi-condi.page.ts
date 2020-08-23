import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-temi-condi',
  templateUrl: './temi-condi.page.html',
  styleUrls: ['./temi-condi.page.scss'],
})
export class TemiCondiPage implements OnInit {

  access: boolean;

  constructor(private navController: NavController) {
    this.access = false;
  }

  ngOnInit() {
  }

  continue() {
  this.navController.navigateRoot('/home').then()
  }
}
