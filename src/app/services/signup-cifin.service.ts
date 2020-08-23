import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {UserModel} from '../models/user.model';
import {EncryptDecryptService} from './encrypt-decrypt.service';


@Injectable({
  providedIn: 'root'
})
export class SignupCifinService {

  // example: https://api.bancoink.biz/qa/login/verifyDirectLogin?apiKey=441252
  private url = 'signup/cifin';

  constructor(private httpClient: HttpClient,
              private encryptDecryptService: EncryptDecryptService) { }

  signup(user: UserModel) {
    //TODO: Implements methods in some place... some time... Juan Alexander Hatum
    const userRequest = {
      'document_number': user.getDocument_number(),
      'document_type': user.getDocument_type(),
      'expedition_date': user.getDateTime_ExpedicionDate(),
      'birth_date': user.getDateTime_BirthDate()
    }
    const url = `${environment.server}${this.url}?apiKey=${environment.token}`;
    const serializedJson = JSON.stringify(userRequest);

    const payload = {
      payload: this.encryptDecryptService.encrypt(serializedJson, environment.key)
    };
    return this.httpClient.post(url, payload)
  }
}
