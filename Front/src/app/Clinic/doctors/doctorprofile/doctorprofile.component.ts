import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrls: ['./doctorprofile.component.css']
})
export class DoctorprofileComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('doctors-sidebar').className+='active open';
  }


ngAfterViewInit() {
    $.getScript('assets/bundles/libscripts.bundle.js');
    $.getScript('assets/bundles/vendorscripts.bundle.js');
    $.getScript('assets/bundles/mainscripts.bundle.js');
    $.getScript('assets/bundles/knob.bundle.js');
    $.getScript('assets/js/pages/charts/jquery-knob.js');
	}

 

}
