import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';
import {UserModel} from '../../models/user.model';

@Component({
    selector: 'app-info-gen',
    templateUrl: './info-gen.page.html',
    styleUrls: ['./info-gen.page.scss'],
})
export class InfoGenPage implements OnInit {

    dni2: string = null;
    gender2: string = null;
    selectedOption: string = null;
    genderOptions: string = null;
    options: string[] = [
        'Masculino',
        'Femenino'
    ];
    optionsDni: string[] = [
        'Cédula de ciudadanía',
        'Cédula de extranjería'
    ]
    user: UserModel = new UserModel();
    show: boolean;
    show2: boolean;
    userForm: FormGroup;


    constructor(private formBuilder: FormBuilder,
                private navController: NavController) {
        this.show = false;
        this.userForm = this.formBuilder.group({

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
        const user = localStorage.getItem('user');
        this.user.set(JSON.parse(user));
        console.log(this.user);
    }

    continue() {
        this.dni2 = this.selectedOption;
        this.gender2 = this.genderOptions;
        console.log(this.dni2);

        if(this.dni2 === 'Cédula de ciudadanía'){
            this.user.setDocumentId(1);
        }else {
            this.user.setDocumentId(2);
        }
        if(this.gender2 === 'Masculino'){
            this.user.setGender_Id(1);
        }else {
            this.user.setGender_Id(2);
        }


        if(this.userForm.get('documentNumber').value === '80186587'){
            document.getElementById('modal1').click();
            // document.getElementById('modal2').click(); //error de conexión de internet
            // document.getElementById('modal3').click(); //algo pasa
        } else {
            this.user.setDocument_type(this.dni2);
            this.user.setDocument_number(this.userForm.get('documentNumber').value);
            const userBirthDate = this.userForm.get('dateExpedition').value.substr(0,10);
            this.user.setDateTime_BirthDate(userBirthDate);
            const userExpeditionDate = this.userForm.get('dateExpedition').value.substr(0,10);
            this.user.setDateTime_ExpedicionDate(userExpeditionDate);
            this.user.setGender_Gender(this.gender2);
            localStorage.setItem('user', JSON.stringify(this.user));
            console.log(this.user);


            this.navController.navigateRoot('/verifi-datos').then()
        }

    }

    selectOption(dni: string){
        this.show = false;
        this.selectedOption = dni;
    }

    selectedGender(gender: string) {
        this.show2 = false;
        this.genderOptions = gender;
        document.getElementById('arrow').click();
    }
}
