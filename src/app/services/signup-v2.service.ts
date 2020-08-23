import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EncryptDecryptService} from './encrypt-decrypt.service';
import {environment} from '../../environments/environment';
import {UserModel} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SignupV2Service {

  private url = 'signup/v2';

  constructor(private httpClient: HttpClient,
              private encryptDecryptService: EncryptDecryptService) { }

  signup(user: UserModel) {
    const url = `${environment.server}${this.url}?apiKey=${environment.token}`;
    // TODO: Implements all methods, for effect of this test, I burn this data. Juan Hatum
    const userRequest = {
      phone_number: user.getPhoneNumber(),
      names: user.getNames(),
      last_names: user.getLastNames(),
      document_id: user.getDocumentId(),
      document_number: user.getDocument_number(),
      document_expiration_date: user.getDateTime_ExpedicionDate(),
      birth_date: user.getDateTime_BirthDate(),
      gender_id: user.getGender_Id(),
      state_id: '1',
      city_id: '1',
      address: 'calle 34 cr 56',
      pin: user.getPin(),
      email: user.getEmail(),
      imei: 'C5BE7E25-5B33-448A-8AD3-78795C333DAF',
      push_registration_id: 'ARN TEST',
      topic_registration_id: 'ARN TEST',
      referrer_phonenumber: null,
      parent_info: null,
      query_id: 'xxx'
    };

    const serializedJson = JSON.stringify(userRequest);

    const payload = {
      payload: this.encryptDecryptService.encrypt(serializedJson, environment.key)
    };
    return this.httpClient.post(url, payload)
  }

}
