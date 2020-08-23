import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-reg-num-component',
  templateUrl: './reg-num-component.page.html',
  styleUrls: ['./reg-num-component.page.scss'],
})
export class RegNumComponentPage implements OnInit {
  form: FormGroup;
  @Input()number: string = '';
  @Input()number2: string = '';
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
  numEraser() {

    if(this.number.length > 0 && this.number.length <= 3 && this.number2.length == 0){
      this.number = this.number.substring(0, (this.number.length-1));
    } else if(this.number2.length > 0) {
      this.number2 = this.number2.substring(0, (this.number2.length-1));
    }
  }
  numAccess() {

    console.log('form', this.form.get('firsNumPart').value + this.form.get('secondNumPart').value);
     let data = this.form.get('firsNumPart').value + this.form.get('secondNumPart').value;

    if( data === '3102398949'){
      document.getElementById('modal1').click();
    } else {
      if (this.form.get('secondNumPart').value.length === 7 && this.form.get('firsNumPart').value.length === 3) {
        localStorage.setItem('numero',this.number);
        localStorage.setItem('numero2',this.number2);
        this.navController.navigateRoot('/cod-verif').then();
      }
    }

  }


  sure() {
    document.getElementById('modal').click();
  }

  cancel() {
    this.navController.navigateRoot('/').then()
  }
}
