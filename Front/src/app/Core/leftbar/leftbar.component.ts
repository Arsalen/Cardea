import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.css']
})
export class LeftbarComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) { }
  clinic_data:any;
  publickey:any;
  name_clinic:any;
  id_clinic:any;

  ngOnInit() {


    this.clinic_data=this.localStorageService.get('current_clinic');

    this.name_clinic=JSON.parse(this.clinic_data)['data']['name'];
    this.publickey=JSON.parse(this.clinic_data)['data']['publicKey'];
    this.id_clinic=JSON.parse(this.clinic_data)['id'];

  }

}
