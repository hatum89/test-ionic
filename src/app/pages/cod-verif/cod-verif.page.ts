import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-cod-verif',
  templateUrl: './cod-verif.page.html',
  styleUrls: ['./cod-verif.page.scss'],
})
export class CodVerifPage implements OnInit {

  form: FormGroup;
  number: string = '';
  number2: string = '';
  number3: string = '';
  number4: string = '';

  constructor( private formBuilder: FormBuilder,
               private navController: NavController) {

    this.form = this.formBuilder.group({

      firsNumPart: ['', Validators.compose([
        Validators.max(3),
        Validators.maxLength(3),
        Validators.required
      ])],
      secondNumPart: ['', Validators.compose([
        Validators.max(1),
        Validators.maxLength(1),
        Validators.required
      ])],
      thirdNumPart: ['', Validators.compose([
        Validators.max(1),
        Validators.maxLength(1),
        Validators.required
      ])],
      quarterNumPart: ['', Validators.compose([
        Validators.max(1),
        Validators.maxLength(1),
        Validators.required
      ])]
    });

  }

  ngOnInit() {
    // this.number = localStorage.getItem('number');
    // this.number2 = localStorage.getItem('number2');
  }

  num1() {

    if(this.number.length < 1 ) {
      this.number = '1';
    } else if(this.number.length >= 1 && this.number2.length < 1) {
      this.number2 = '1';
    } else if(this.number2.length >= 1 && this.number3.length < 1) {
      this.number3 = '1';
    } else if(this.number3.length >= 1 && this.number4.length < 1) {
      this.number4 = '1';
    }

  }
  num2() {
    if(this.number.length < 1 ) {
      this.number = '2';
    } else if(this.number.length >= 1 && this.number2.length < 1) {
      this.number2 = '2';
    } else if(this.number2.length >= 1 && this.number3.length < 1) {
      this.number3 = '2';
    } else if(this.number3.length >= 1 && this.number4.length < 1) {
      this.number4 = '2';
    }
  }
  num3() {
    if(this.number.length < 1 ) {
      this.number = '3';
    } else if(this.number.length >= 1 && this.number2.length < 1) {
      this.number2 = '3';
    } else if(this.number2.length >= 1 && this.number3.length < 1) {
      this.number3 = '3';
    } else if(this.number3.length >= 1 && this.number4.length < 1) {
      this.number4 = '3';
    }
  }
  num4() {
    if(this.number.length < 1 ) {
      this.number = '4';
    } else if(this.number.length >= 1 && this.number2.length < 1) {
      this.number2 = '4';
    } else if(this.number2.length >= 1 && this.number3.length < 1) {
      this.number3 = '4';
    } else if(this.number3.length >= 1 && this.number4.length < 1) {
      this.number4 = '4';
    }

  }
  num5() {
    if(this.number.length < 1 ) {
      this.number = '5';
    } else if(this.number.length >= 1 && this.number2.length < 1) {
      this.number2 = '5';
    } else if(this.number2.length >= 1 && this.number3.length < 1) {
      this.number3 = '5';
    } else if(this.number3.length >= 1 && this.number4.length < 1) {
      this.number4 = '5';
    }

  }
  num6() {
    if(this.number.length < 1 ) {
      this.number = '6';
    } else if(this.number.length >= 1 && this.number2.length < 1) {
      this.number2 = '6';
    } else if(this.number2.length >= 1 && this.number3.length < 1) {
      this.number3 = '6';
    } else if(this.number3.length >= 1 && this.number4.length < 1) {
      this.number4 = '6';
    }

  }
  num7() {
    if(this.number.length < 1 ) {
      this.number = '7';
    } else if(this.number.length >= 1 && this.number2.length < 1) {
      this.number2 = '7';
    } else if(this.number2.length >= 1 && this.number3.length < 1) {
      this.number3 = '7';
    } else if(this.number3.length >= 1 && this.number4.length < 1) {
      this.number4 = '7';
    }

  }
  num8() {
    if(this.number.length < 1 ) {
      this.number = '8';
    } else if(this.number.length >= 1 && this.number2.length < 1) {
      this.number2 = '8';
    } else if(this.number2.length >= 1 && this.number3.length < 1) {
      this.number3 = '8';
    } else if(this.number3.length >= 1 && this.number4.length < 1) {
      this.number4 = '8';
    }
  }
  num9() {
    if(this.number.length < 1 ) {
      this.number = '9';
    } else if(this.number.length >= 1 && this.number2.length < 1) {
      this.number2 = '9';
    } else if(this.number2.length >= 1 && this.number3.length < 1) {
      this.number3 = '9';
    } else if(this.number3.length >= 1 && this.number4.length < 1) {
      this.number4 = '9';
    }

  }
  num0() {
    if(this.number.length < 1 ) {
      this.number = '0';
    } else if(this.number.length >= 1 && this.number2.length < 1) {
      this.number2 = '0';
    } else if(this.number2.length >= 1 && this.number3.length < 1) {
      this.number3 = '0';
    } else if(this.number3.length >= 1 && this.number4.length < 1) {
      this.number4 = '0';
    }
  }
  numEraser() {

    if(this.number.length > 0 &&  this.number2.length == 0){
      this.number = this.number.substring(0, (this.number.length-1));
    } else if(this.number2.length > 0 && this.number3.length == 0 ) {
      this.number2 = this.number2.substring(0, (this.number2.length-1));
    } else if(this.number3.length > 0 && this.number4.length == 0) {
      this.number3 = this.number3.substring(0, (this.number2.length-1));
    } else if(this.number4.length) {
      this.number4 = this.number4.substring(0, (this.number2.length-1));
    }
  }
  numAccess() {
    console.log('form', this.form.get('firsNumPart').value + this.form.get('secondNumPart').value + this.form.get('thirdNumPart').value + this.form.get('quarterNumPart').value);
    if (this.form.get('secondNumPart').value.length >= 1 && this.form.get('firsNumPart').value.length >= 1 && this.form.get('thirdNumPart').value >= 1 && this.form.get('quarterNumPart').value >= 1 ){
      this.navController.navigateRoot('info-gen').then();
    }
  }
}
