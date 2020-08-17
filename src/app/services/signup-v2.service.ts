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
      phone_number: '3006986749',
      names: 'JUAN ALEXANDER',
      last_names: 'HATUM VARELA',
      document_id: '1',
      document_number: '1082897799',
      document_type: '2',//
      dateTime_ExpedicionDate: '',//
      document_expiration_date: '????????',
      birth_date: '??????',
      gender_id: '1',
      state_id: '1',
      city_id: '1',
      address: 'calle 34 cr 56',
      pin: '1989',
      email: 'juanhatumvarela@gmail.com',
      imei: 'vxgd-dsf-erty-dddd',
      push_registration_id: '4546456546546546',
      topic_registration_id: 'oink',
      referrer_phonenumber: '3165225525',
      parent_info: 'dasda',
      query_id: 'data'
    };

    const serializedJson = JSON.stringify(user);

    const payload = {
      payload: this.encryptDecryptService.encrypt(serializedJson, environment.key)
    };
    console.log(payload.payload);
    this.httpClient.post(url, payload)
        .subscribe( response => {
          console.log(response);
        });


  }

}
