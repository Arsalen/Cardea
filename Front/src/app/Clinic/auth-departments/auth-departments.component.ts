import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import { NotificationsService } from 'angular2-notifications';
@Component({
  selector: 'app-auth-departments',
  templateUrl: './auth-departments.component.html',
  styleUrls: ['./auth-departments.component.css']
})
export class AuthDepartmentsComponent implements OnInit,AfterViewInit {


  ngAfterViewInit() {
    $.getScript('assets/bundles/libscripts.bundle.js', function () {
    });
    $.getScript('assets/bundles/vendorscripts.bundle.js', function () {
    });
    $.getScript('assets/bundles/mainscripts.bundle.js', function () {
    });

  }
  constructor( private notif: NotificationsService) { }
  open(){
    setTimeout(function(){
      console.log("hi")
      document.getElementById('simplenotification').remove();

    }, 2500);
    this.notif.success(

      'Success',
      'Department authorized to Edit medical record',
      {
        timeOut: 1000,
        pauseOnHover: false,
        clickToClose: false,
        showProgressBar: true,

      })


  }

  ngOnInit() {
  }

}
