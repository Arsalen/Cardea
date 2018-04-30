import {AfterViewInit, Component, OnInit} from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-patient-leftsidebar',
  templateUrl: './patient-leftsidebar.component.html',
  styleUrls: ['./patient-leftsidebar.component.css']
})
export class PatientLeftsidebarComponent implements OnInit,AfterViewInit {

  ngAfterViewInit() {
    $.getScript('assets/bundles/libscripts.bundle.js', function () {
    });
    $.getScript('assets/bundles/vendorscripts.bundle.js', function () {
    });
  }

  form:any;
  firstname:any;
  lastname:any;
  address:any;
  constructor(private localStorageService: LocalStorageService,private router:Router) { }

  authorize_clinic(){
    this.router.navigate(['/patient/auth_clinic']);
  }

  patient_profile(){
    this.router.navigate(['/patient/profile']);
  }

  logout(){
    this.router.navigate(['/patient/logout']);
  }

  ngOnInit() {

    this.form=this.localStorageService.get('data');
    this.firstname=JSON.parse(this.form)['firstname'];
    this.lastname=JSON.parse(this.form)['lastname'];
    this.address=JSON.parse(this.form)['address'];
  }

}
