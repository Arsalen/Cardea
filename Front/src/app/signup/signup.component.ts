import { Component, OnInit, AfterViewInit } from '@angular/core';
import {SignupService} from './signup.service';
import { saveAs } from 'file-saver';
import { LocalStorageService } from 'angular-2-local-storage';
import {Router} from '@angular/router';
import {ContractsService} from '../CardeaToken/contracts.service'
import * as $ from 'jquery';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit,AfterViewInit {

  public balance: any;
  public account: any;
  public PatientAccount: any;
  public amount: any;
  public discount: any;
  public txHash: any;
  public payment: any;
  public cs: any

  ngAfterViewInit(){
    $.getScript('assets/bundles/libscripts.bundle.js', function(){});
    $.getScript('assets/bundles/vendorscripts.bundle.js', function(){});

    $(".navbar-toggler").on('click',function() {
      $("html").toggleClass("nav-open");
    });

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
  form: any;
  id_asste_patient:any;

  imageurl:any;

  constructor(private route:Router, private newService: SignupService, private localStorageService: LocalStorageService, cs: ContractsService) {
    this.cs = cs
    this.cs.getAccount().then(account => this.account = account);
  }

  pay(){
    this.cs.transferCardea(this.account, this.referral, 1).then(bl =>
      this.txHash = bl
    )
  }



  goto_signin(){
    this.route.navigate(['/login']);
  }

  public submitform(firstname,lastname,imageurl, address, phonenumber,sex,maritalstatus,occupation,email,referral) {
    if(referral)
      this.pay()
    // console.log(imageurl)

    this.newService.submitform(firstname, lastname,imageurl, address, phonenumber,sex,maritalstatus,occupation,email,referral).subscribe(
      (response) => {
        /* this function is executed every time there's a new output */
        this.id_asste_patient=JSON.stringify(response.id);
        // console.log(response.data)
        this.form=JSON.stringify(response.data);
        this.localStorageService.set('data',this.form);
        //download file
        var blob = new Blob([this.form], {type: "JSON;charset=utf-8"});
        saveAs(blob, "Cardea.json");

        this.route.navigate(['/patient/profile']);
      },
      (err) => {
        /* this function is executed when there's an ERROR */

      },
      () => {
        /* this function is executed when the observable ends (completes) its stream */
      }
    );

  }
  ngOnInit() {
  }

}
