import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';


@Component({
  selector: 'app-num-cel-innput',
  templateUrl: './num-cel-innput.page.html',
  styleUrls: ['./num-cel-innput.page.scss'],
})
export class NumCelInnputPage implements OnInit {

  form: FormGroup;
  number: string = '';
  number2: string = '';
  constructor( private formBuilder: FormBuilder,
               private navController: NavController) {

    this.form = this.formBuilder.group({

      firsNumPart: ['', Validators.compose([
        Validators.max(3),
        Validators.maxLength(3),
        Validators.required
      ])],
      secondNumPart: ['', Validators.compose([
        Validators.max(7),
        Validators.maxLength(7),
        Validators.required
      ])]
    });

  }

  ngOnInit() {
    this.number = '333';
    this.number2 = '3333333';
   // this.number = localStorage.getItem('number');
   // this.number2 = localStorage.getItem('number2');
  }

  num1() {
    if(this.form.get('firsNumPart').value.length == 3 && this.form.get('secondNumPart').value.length < 7 ){
      this.number2 += '1';
    } else {
      if(this.form.get('firsNumPart').value.length < 3){
        this.number += '1';
      }

    }
  }
  num2() {
    if(this.form.get('firsNumPart').value.length == 3 && this.form.get('secondNumPart').value.length < 7 ){
      this.number2 += '2';
    } else {
      if(this.form.get('firsNumPart').value.length < 3){
        this.number += '2';
      }

    }
  }
  num3() {
    if(this.form.get('firsNumPart').value.length == 3 && this.form.get('secondNumPart').value.length < 7 ){
      this.number2 += '3';
    } else {
      if(this.form.get('firsNumPart').value.length < 3){
        this.number += '3';
      }

    }
  }
  num4() {
    if(this.form.get('firsNumPart').value.length == 3 && this.form.get('secondNumPart').value.length < 7 ){
      this.number2 += '4';
    } else {
      if(this.form.get('firsNumPart').value.length < 3){
        this.number += '4';
      }

    }

  }
  num5() {
    if(this.form.get('firsNumPart').value.length == 3 && this.form.get('secondNumPart').value.length < 7 ){
      this.number2 += '5';
    } else {
      if(this.form.get('firsNumPart').value.length < 3){
        this.number += '5';
      }

    }

  }
  num6() {
    if(this.form.get('firsNumPart').value.length == 3 && this.form.get('secondNumPart').value.length < 7 ){
      this.number2 += '6';
    } else {
      if(this.form.get('firsNumPart').value.length < 3){
        this.number += '6';
      }

    }

  }
  num7() {
    if(this.form.get('firsNumPart').value.length == 3 && this.form.get('secondNumPart').value.length < 7 ){
      this.number2 += '7';
    } else {
      if(this.form.get('firsNumPart').value.length < 3){
        this.number += '7';
      }

    }

  }
  num8() {
    if(this.form.get('firsNumPart').value.length == 3 && this.form.get('secondNumPart').value.length < 7 ){
      this.number2 += '8';
    } else {
      if(this.form.get('firsNumPart').value.length < 3){
        this.number += '8';
      }

    }
  }
  num9() {
    if(this.form.get('firsNumPart').value.length == 3 && this.form.get('secondNumPart').value.length < 7 ){
      this.number2 += '9';
    } else {
      if(this.form.get('firsNumPart').value.length < 3){
        this.number += '9';
      }

    }

  }
  num0() {
    if(this.form.get('firsNumPart').value.length == 3 && this.form.get('secondNumPart').value.length < 7 ){
      this.number2 += '0';
    } else {
      if(this.form.get('firsNumPart').value.length < 3){
        this.number += '0';
      }

    }
  }

  numAccess() {
    console.log('form', this.form.get('firsNumPart').value + this.form.get('secondNumPart').value);
    if (this.form.get('secondNumPart').value.length === 7 && this.form.get('firsNumPart').value.length === 3) {
      this.navController.navigateRoot('cod-verif').then();

    }
  }
}
