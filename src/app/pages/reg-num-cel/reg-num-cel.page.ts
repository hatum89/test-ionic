import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reg-num-cel',
  templateUrl: './reg-num-cel.page.html',
  styleUrls: ['./reg-num-cel.page.scss'],
})
export class RegNumCelPage implements OnInit{
   number = '';
   number2 = '';
  constructor( ) {

  }

  ngOnInit(){
    this.number = '310';
    this.number2 = '2398949';
  }


}
