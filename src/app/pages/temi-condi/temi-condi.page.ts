import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {UserModel} from '../../models/user.model';
import {SignupV2Service} from '../../services/signup-v2.service';

@Component({
  selector: 'app-temi-condi',
  templateUrl: './temi-condi.page.html',
  styleUrls: ['./temi-condi.page.scss'],
})
export class TemiCondiPage implements OnInit {

  access: boolean;
  user: UserModel = new UserModel();
  constructor(private navController: NavController,
              private signupV2Service: SignupV2Service) {
    this.access = false;
  }

  ngOnInit() {
    const user = localStorage.getItem('user');
    this.user.set(JSON.parse(user));
  }

  continue() {
    this.signupV2Service.signup(this.user)
        .subscribe( response => {
          console.log(response);
          localStorage.clear();
          document.getElementById('modal1').click();
          setTimeout(()=> {
              this.navController.navigateRoot('/home').then();
          },1000);
        }, error => {
            document.getElementById('modal2').click();
            console.log(error);
        });
  }
}
