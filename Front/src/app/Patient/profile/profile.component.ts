import { Component, OnInit,AfterViewInit } from '@angular/core';
import {LocalStorageService} from "angular-2-local-storage";
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit,AfterViewInit {

  ngAfterViewInit() {
    $.getScript('assets/bundles/libscripts.bundle.js', function () {});
    $.getScript('assets/bundles/vendorscripts.bundle.js', function () {});
    $.getScript('assets/bundles/mainscripts.bundle.js', function () {});
  }

  firstname  :any;
  lastname :any;
  address :any;
  phonenumber :any;
  sex :any;
  maritalstatus:any;
  occupation:any;
  email:any;
  referral:any;
  publickey:any;
  form: any;
  imageurl: any
  constructor(private localStorageService: LocalStorageService, private router:Router) { 
    console.log(JSON.parse(this.localStorageService.get('data')))
    this.form=this.localStorageService.get('data');
    this.firstname=JSON.parse(this.form)['firstname'];
    this.lastname=JSON.parse(this.form)['lastname'];
    this.address=JSON.parse(this.form)['address'];
    this.phonenumber=JSON.parse(this.form)['phonenumber'];
    this.sex=JSON.parse(this.form)['sex'];
    this.maritalstatus=JSON.parse(this.form)['maritalstatus'];
    this.occupation=JSON.parse(this.form)['occupation'];
    this.email=JSON.parse(this.form)['email'];
    this.referral=JSON.parse(this.form)['referral'];
    this.publickey=JSON.parse(this.form)['publicKey'];
    this.imageurl=JSON.parse(this.form)['picURL'];
    console.log(this.imageurl) 
  }

  public departmentviews(){

    this.router.navigate(['/departmentviews'])

  }

  ngOnInit() {
    // console.log(this.imageurl)
  }

}
