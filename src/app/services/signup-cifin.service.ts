import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SignupCifinService {

  // example: https://api.bancoink.biz/qa/login/verifyDirectLogin?apiKey=441252
  private url = 'signup/cifin';

  constructor(private httpClient: HttpClient) { }


}
