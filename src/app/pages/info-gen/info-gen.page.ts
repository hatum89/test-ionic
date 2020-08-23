import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-info-gen',
  templateUrl: './info-gen.page.html',
  styleUrls: ['./info-gen.page.scss'],
})
export class InfoGenPage implements OnInit {

    expanded: boolean = false;
    selectedOption: string = null;

    options: string[] = [
        'Masculino',
        'Femenino'
    ];
    optionsDni: string[] = [
        'Cédula de ciudadanía',
        'Cédula de extranjería'
    ]

    show: any;
    user: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private navController: NavController) {
    this.show = false;
      this.user = this.formBuilder.group({

          documentNumber: ['', Validators.compose([
              Validators.required
          ])],
          dateBorn: ['', Validators.compose([
              Validators.required
          ])],
          dateExpedition: ['', Validators.compose([
              Validators.required
          ])]
      });
  }

  ngOnInit() {
  }

    continue() {
     this.navController.navigateRoot('verifi-datos').then()
    }
    toggleExpanded(): void {
        this.expanded = !this.expanded;
    }

    selectOption(text: string): void {
        this.selectedOption = text;
    }

}
