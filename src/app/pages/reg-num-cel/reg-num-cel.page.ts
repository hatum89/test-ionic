import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reg-num-cel',
  templateUrl: './reg-num-cel.page.html',
  styleUrls: ['./reg-num-cel.page.scss'],
})
export class RegNumCelPage implements OnInit {
  private form: FormGroup;

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
  num(){

  }

  ngOnInit() {
  }

}
