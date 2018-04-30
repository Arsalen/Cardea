import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-clinic-patient-profile',
  templateUrl: './clinic-patient-profile.component.html',
  styleUrls: ['./clinic-patient-profile.component.css']
})
export class ClinicPatientProfileComponent implements OnInit {

  ngAfterViewInit() {
    $.getScript('assets/bundles/libscripts.bundle.js', function () {});
    $.getScript('assets/bundles/vendorscripts.bundle.js', function () {});
    $.getScript('assets/bundles/mainscripts.bundle.js', function () {});
  }
  patient_data:any;
  firstname  :any;
  lastname :any;
  address :any;
  phonenumber :any;
  sex :any;
  maritalstatus:any;
  occupation:any;
  email:any;
  id_patient:any;
  recordId:any;
  constructor(private localStorageService: LocalStorageService, private router:Router) { }


  ngOnInit() {
    //get data for added patient from local storage
    this.patient_data = this.localStorageService.get('added_patient');

    this.firstname = JSON.parse(this.patient_data)['data']['firstname'];
    this.lastname = JSON.parse(this.patient_data)['data']['lastname'];
    this.address = JSON.parse(this.patient_data)['data']['address'];
    this.phonenumber = JSON.parse(this.patient_data)['data']['phonenumber'];
    this.recordId = JSON.parse(this.patient_data)['data']['recordId'];
    this.email = JSON.parse(this.patient_data)['data']['email'];
    this.maritalstatus = JSON.parse(this.patient_data)['data']['maritalstatus'];
    this.occupation = JSON.parse(this.patient_data)['data']['occupation'];
    this.sex = JSON.parse(this.patient_data)['data']['sex'];

    this.id_patient = JSON.parse(this.patient_data)['id'];


    //this.localStorageService.remove('added_patient');
  }

}
