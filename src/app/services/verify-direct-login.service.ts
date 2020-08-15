import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VerifyDirectLoginService {

  private url = 'login/verifyDirectLogin';

  constructor(private httpClient: HttpClient) { }

  getLogin() {
    const url = `${environment.server}${this.url}?apiKey=${environment.token}`;
    console.log(url);
    const payload = {
      payload: 'ECrk5B8a7VVsZGYxZ8CZSV93wdrbrX0t1ClmLtOiHroev+779sEPsBGa0D1H7Kn8SeF/x2+o61CCiYrtI+59trHdfcK32zEMHdAYjSZQZsI='
    };
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
