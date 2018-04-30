import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-patient-auth-clinic',
  templateUrl: './patient-auth-clinic.component.html',
  styleUrls: ['./patient-auth-clinic.component.css']
})
export class PatientAuthClinicComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngAfterViewInit(){
    $.getScript('assets/bundles/libscripts.bundle.js', function(){});
    $.getScript('assets/bundles/vendorscripts.bundle.js', function(){});
    $.getScript('assets/plugins/dropzone/dropzone.js', function(){});
    $.getScript('assets/plugins/momentjs/moment.js', function(){});
    $.getScript('assets/plugins/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js', function(){});
    $.getScript('assets/bundles/mainscripts.bundle.js', function(){});


  }

  ngOnInit() {
  }

}
