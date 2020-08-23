import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EncryptDecryptService} from './encrypt-decrypt.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupV2Service {

  private url = 'signup/v2';

  constructor(private httpClient: HttpClient,
              private encryptDecryptService: EncryptDecryptService) { }

  signup() {
    const url = `${environment.server}${this.url}?apiKey=${environment.token}`;
    const user = {
      phone_number: '573006986749',
      names: 'JUAN ALEXANDER',
      last_names: 'HATUM VARELA',
      document_id: '1',
      document_number: '1082897799',
      document_expiration_date: '2007-06-28',
      birth_date: '1989-06-18',
      gender_id: '1',
      state_id: '1',
      city_id: '1',
      address: 'calle 34 cr 56',
      pin: '1989',
      email: 'juanhatumvarela@gmail.com',
      imei: 'C5BE7E25-5B33-448A-8AD3-78795C333DAF',
      push_registration_id: 'ARN TEST',
      topic_registration_id: 'ARN TEST',
      referrer_phonenumber: null,
      parent_info: null,
      query_id: 'xxx'
    };

    const serializedJson = JSON.stringify(user);

    const payload = {
      payload: this.encryptDecryptService.encrypt(serializedJson, environment.key)
    };
    console.log(payload.payload);
    console.log(serializedJson);
    this.httpClient.post(url, payload)
        .subscribe( response => {
          console.log(response);
          alert('Felicitaciones ya te has registrado');
        });


  }

}
