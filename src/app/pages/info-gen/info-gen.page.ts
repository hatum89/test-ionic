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
            kindDocument: [this.optionsDni[0],Validators.compose([ //no pude tomar los datos!!
                Validators.required
            ])],
            documentNumber: ['', Validators.compose([
                Validators.required
            ])],
            dateBorn: ['', Validators.compose([
                Validators.required
            ])],
            dateExpedition: ['', Validators.compose([
                Validators.required
            ])],
            kindGender: [this.options[0],Validators.compose([
                Validators.required
            ])],
        });
    }

    ngOnInit() {
        const user = localStorage.getItem('user');
        this.user.set(JSON.parse(user));
        console.log(this.user);
    }

    continue() {
        if(this.userForm.get('documentNumber').value === '80186587'){
            // document.getElementById('modal1').click();
            // document.getElementById('modal2').click(); //error de conexión de internet
            document.getElementById('modal3').click(); //algo pasa
        } else {
            this.user.setDocument_type(this.userForm.get('kindDocument').value);
            this.user.setDocument_number(this.userForm.get('documentNumber').value);
            this.user.setDateTime_BirthDate(this.userForm.get('dateBorn').value);
            this.user.setDateTime_ExpedicionDate(this.userForm.get('dateExpedition').value);
            this.user.setGender_Gender(this.userForm.get('kindGender').value);
            localStorage.setItem('user', JSON.stringify(this.user));
            console.log(this.user);


            this.navController.navigateRoot('/verifi-datos').then()
        }
    }

    selectOption(dni: string){
        this.show = false;
        this.selectedOption = dni;
    }

    selectGender(gender: string) {
        this.show2 = false;
        this.genderOptions = gender;
        console.log(gender);
    }
}
