import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent implements OnInit {

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
