import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import {LocalStorageService} from 'angular-2-local-storage';


@Component({
  selector: 'app-listpatient',
  templateUrl: './listpatient.component.html',
  styleUrls: ['./listpatient.component.css']
})
export class ListpatientComponent implements OnInit,AfterViewInit {

  constructor(private localStorageService: LocalStorageService) { }
/*

<!-- Jquery Core Js -->
<script src="assets/bundles/libscripts.bundle.js"></script> <!-- Bootstrap JS and jQuery v3.2.1 -->
<script src="assets/bundles/vendorscripts.bundle.js"></script> <!-- slimscroll, waves Scripts Plugin Js -->

<script src="assets/bundles/mainscripts.bundle.js"></script><!-- Custom Js -->

*/

  patient_data:any;
  firstname:any;
  lastname:any;
  address:any;
  phonenumber:any;
  recordId:any;
  email:any;
  id_patient:any;
  added_patient:boolean=false;
  see_added_patient()
  {
    if(!this.added_patient) this.added_patient=true;
    else {
      //get data for added patient from local storage
      this.patient_data = this.localStorageService.get('added_patient');

      this.firstname = JSON.parse(this.patient_data)['data']['firstname'];
      this.lastname = JSON.parse(this.patient_data)['data']['lastname'];
      this.address = JSON.parse(this.patient_data)['data']['address'];
      this.phonenumber = JSON.parse(this.patient_data)['data']['phonenumber'];
      this.recordId = JSON.parse(this.patient_data)['data']['recordId'];
      this.email = JSON.parse(this.patient_data)['data']['email'];
      this.id_patient = JSON.parse(this.patient_data)['id'];
    };

    };

  ngOnInit() {
    document.getElementById('patients-sidebar').className += 'active open';
  }

  ngAfterViewInit(){
    $.getScript('assets/bundles/libscripts.bundle.js');
    $.getScript('assets/bundles/vendorscripts.bundle.js');
    $.getScript('assets/bundles/mainscripts.bundle.js');

  }

}
