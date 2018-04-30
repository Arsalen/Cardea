import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit, AfterViewInit {

  constructor() { }
/* 

<!-- Jquery Core Js --> 
<script src="assets/bundles/libscripts.bundle.js"></script> <!-- Bootstrap JS and jQuery v3.2.1 -->
<script src="assets/bundles/vendorscripts.bundle.js"></script> <!-- slimscroll, waves Scripts Plugin Js -->

<script src="assets/plugins/dropzone/dropzone.js"></script> <!-- Dropzone Plugin Js -->
<script src="assets/plugins/momentjs/moment.js"></script> <!-- Moment Plugin Js -->
<script src="assets/plugins/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js"></script>

<script src="assets/bundles/mainscripts.bundle.js"></script><!-- Custom Js -->

*/
  ngOnInit() {
    document.getElementById('departments-sidebar').className += 'active open';
  }

  ngAfterViewInit(){
    $.getScript('assets/bundles/libscripts.bundle.js');
    $.getScript('assets/bundles/vendorscripts.bundle.js');
    $.getScript('assets/plugins/dropzone/dropzone.js');
    $.getScript('assets/plugins/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js');
    $.getScript('assets/plugins/momentjs/moment.js');
    $.getScript('assets/bundles/mainscripts.bundle.js');

  }

}
