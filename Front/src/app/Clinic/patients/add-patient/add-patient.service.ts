import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class AddPatientService {

  constructor(private http: Http) { }

  public add_patient(id) {
    alert('patient to add id :::: '+ id);
    return this.http.get('http://localhost:3000/patient/' + id)
      .map((res: Response) => res.json());
  }

}
