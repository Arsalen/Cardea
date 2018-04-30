import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  public clinic_log(id) {
    // alert('clinic s id :::: '+id);
    return this.http.get('http://localhost:3000/clinic/' + id)

      .map((res: Response) => res.json());
      }


}
