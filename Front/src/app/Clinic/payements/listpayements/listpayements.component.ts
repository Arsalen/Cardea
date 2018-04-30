import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-listpayements',
  templateUrl: './listpayements.component.html',
  styleUrls: ['./listpayements.component.css']
})
export class ListpayementsComponent implements OnInit,AfterViewInit {

  constructor() { }
/*

<!-- Jquery Core Js --> 
<script src="assets/bundles/libscripts.bundle.js"></script> <!-- Lib Scripts Plugin Js --> 
<script src="assets/bundles/vendorscripts.bundle.js"></script> <!-- Lib Scripts Plugin Js --> 

<!-- Jquery DataTable Plugin Js --> 
<script src="assets/bundles/datatablescripts.bundle.js"></script>

<script src="assets/bundles/mainscripts.bundle.js"></script><!-- Custom Js --> 
<script src="assets/js/pages/tables/jquery-datatable.js"></script>

*/
  ngOnInit() {
    document.getElementById('payements-sidebar').className += 'active open';
  }
  ngAfterViewInit() {
    $.getScript('assets/bundles/libscripts.bundle.js');
    $.getScript('assets/bundles/vendorscripts.bundle.js');
    $.getScript('assets/bundles/datatablescripts.bundle.js');
    $.getScript('assets/bundles/mainscripts.bundle.js');
    $.getScript('assets/js/pages/tables/jquery-datatable.js');
  }

}
