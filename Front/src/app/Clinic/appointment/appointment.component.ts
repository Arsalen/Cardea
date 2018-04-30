import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit,AfterViewInit {

  constructor() { }



  ngOnInit() {
    document.getElementById('appointment-sidebar').className+='active open';
  }

  ngAfterViewInit(){
    $.getScript('assets/bundles/libscripts.bundle.js');
    $.getScript('assets/bundles/vendorscripts.bundle.js');
    $.getScript('assets/plugins/momentjs/moment.js');
    $.getScript('assets/plugins/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js');
    $.getScript('assets/bundles/mainscripts.bundle.js');
  }
}
