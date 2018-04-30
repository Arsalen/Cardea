import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-listdepartments',
  templateUrl: './listdepartments.component.html',
  styleUrls: ['./listdepartments.component.css']
})
export class ListdepartmentsComponent implements OnInit,AfterViewInit {

  constructor() { }
/* 
<!-- Jquery Core Js --> 
<script src="assets/bundles/libscripts.bundle.js"></script> <!-- Lib Scripts Plugin Js --> 
<script src="assets/bundles/vendorscripts.bundle.js"></script> <!-- Lib Scripts Plugin Js --> 

<script src="assets/bundles/mainscripts.bundle.js"></script>
*/ 
  ngOnInit() {
    document.getElementById('departments-sidebar').className += 'active open';

  }

  ngAfterViewInit(){
    $.getScript('assets/bundles/libscripts.bundle.js');
    $.getScript('assets/bundles/vendorscripts.bundle.js');

    $.getScript('assets/bundles/mainscripts.bundle.js');

  }

}
