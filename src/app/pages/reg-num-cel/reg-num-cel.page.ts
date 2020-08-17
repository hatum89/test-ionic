import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reg-num-cel',
  templateUrl: './reg-num-cel.page.html',
  styleUrls: ['./reg-num-cel.page.scss'],
})
export class RegNumCelPage {
          form: FormGroup;
          number: string = '';
          number2: string = '';

  constructor( private formBuilder: FormBuilder) {

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

    num1() {
        if(this.form.get('firsNumPart').value.length == 3 ){
       this.number2 += '1';
   } else {
       this.number += '1';
   }
    }
    num2() {
        if(this.form.get('firsNumPart').value.length == 3 ){
            this.number2 += '2';
        } else {
            this.number += '2';
        }
    }
    num3() {
        if(this.form.get('firsNumPart').value.length == 3 ){
            this.number2 += '3';
        } else {
            this.number += '3';
        }

        this.number += '3';
    }
    num4() {
        if(this.form.get('firsNumPart').value.length == 3 ){
            this.number2 += '4';
        } else {
            this.number += '4';
        }

    }
    num5() {
        if(this.form.get('firsNumPart').value.length == 3 ){
            this.number2 += '5';
        } else {
            this.number += '5';
        }

    }
    num6() {
        if(this.form.get('firsNumPart').value.length == 3 ){
            this.number2 += '6';
        } else {
            this.number += '6';
        }

    }
    num7() {
        if(this.form.get('firsNumPart').value.length == 3 ){
            this.number2 += '7';
        } else {
            this.number += '7';
        }

    }
    num8() {
        if(this.form.get('firsNumPart').value.length == 3 ){
            this.number2 += '8';
        } else {
            this.number += '8';
        }

        this.number += '8';
    }
    num9() {
        if(this.form.get('firsNumPart').value.length == 3 ){
            this.number2 += '9';
        } else {
            this.number += '9';
        }

    }
    num0() {
        if(this.form.get('firsNumPart').value.length == 3 ){
            this.number2 += '0';
        } else {
            this.number += '0';
        }
    }
    numEraser() {

        if(this.form.get('firsNumPart').value.length == 3 ){
            this.number2 = this.number2.slice(1);
        }else {
            this.number = this.number.slice(1);
        }
        if(this.form.get('secondNumPart').value.length == 0 && this.form.get('firsNumPart').value.length == 3) {
            this.number = this.number.slice(1);
        }
    }
    numAccess() {
      console.log('form',this.form.get('firsNumPart').value + this.form.get('secondNumPart').value );
     if(this.form.valid) {
         console.log('numAccess');
     }
    }

}
