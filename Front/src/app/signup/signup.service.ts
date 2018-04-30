import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class SignupService {

  constructor(private http: Http) { }
  public form :any;

  public submitform(firstname,lastname,imageurl, address,phonenumber,sex,maritalstatus,occupation,email,referral) {
    return this.http.post('http://localhost:3000/patient',{firstname: firstname, lastname: lastname,picURL: imageurl, address: address, phonenumber: phonenumber, sex: sex ,maritalstatus:maritalstatus, occupation:occupation, email:email, referral:referral })
      .map((res: Response) => res.json());

  }
}
