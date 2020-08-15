import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {EncryptDecryptService} from './encrypt-decrypt.service';

@Injectable({
  providedIn: 'root'
})
export class VerifyDirectLoginService {

  private url = 'login/verifyDirectLogin';

  constructor(private httpClient: HttpClient,
              private encryptDecryptService: EncryptDecryptService) { }

  getLogin() {
    const url = `${environment.server}${this.url}?apiKey=${environment.token}`;
    console.log(url);
    const data = {phone_number: '573112222222', imei: '7AD0E1F1-521E-43E6-B267-62D10CDEEC79'};
    const serializedJson = JSON.stringify(data);
    const test = this.encryptDecryptService.encrypt(serializedJson, environment.key);
    console.log(test);

    const payload = {
      payload: 'ECrk5B8a7VVsZGYxZ8CZSV93wdrbrX0t1ClmLtOiHroev+779sEPsBGa0D1H7Kn8SeF/x2+o61CCiYrtI+59trHdfcK32zEMHdAYjSZQZsI='
    };
    console.log(payload.payload);
    this.httpClient.post(url, payload)
        .subscribe( response => {
          console.log(response);
        });

    // {
    //   "payload": "ECrk5B8a7VVsZGYxZ8CZSV93wdrbrX0t1ClmLtOiHroev+779sEPsBGa0D1H7Kn8SeF/x2+o61CCiYrtI+59trHdfcK32zEMHdAYjSZQZsI="
    // }
    //
    //
    // En ese payload se envía este json.
    //
    // {"phone_number":"573112222222","imei":"7AD0E1F1-521E-43E6-B267-62D10CDEEC79"}

  }

}
