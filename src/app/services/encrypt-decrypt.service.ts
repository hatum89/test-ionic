import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptDecryptService {

  constructor() { }

  encrypt(serializedJson: string, key: string): string {
    const toEncryptedArray = CryptoJS.enc.Utf8.parse(serializedJson);
    const keyHash = this.getKeyHash(key);
    const payload = CryptoJS.TripleDES.encrypt(toEncryptedArray, keyHash, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});
    // @ts-ignore
    return payload.ciphertext.toString(CryptoJS.enc.Base64);
  }

  decrypt(payload: string, key: string): string {
    const toEncryptArray = CryptoJS.enc.Base64.parse(payload);
    const keyHash = this.getKeyHash(key);
    // @ts-ignore
    const serializedJson = CryptoJS.TripleDES.decrypt({ ciphertext: toEncryptArray }, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return serializedJson.toString(CryptoJS.enc.Utf8);
  }

  private getKeyHash(key: string) {
    let securityKeyArray = CryptoJS.MD5(key).toString();
    securityKeyArray += securityKeyArray.substring(0, 16);
    return CryptoJS.enc.Hex.parse(securityKeyArray);
  }

}
