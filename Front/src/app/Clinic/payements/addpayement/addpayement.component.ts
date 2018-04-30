import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import {ContractsService} from '../../../CardeaToken/contracts.service';


@Component({
  selector: 'app-addpayement',
  templateUrl: './addpayement.component.html',
  styleUrls: ['./addpayement.component.css']
})
export class AddpayementComponent implements OnInit,AfterViewInit {

/*


<script src="assets/bundles/libscripts.bundle.js"></script> <!-- Bootstrap JS and jQuery v3.2.1 -->
<script src="assets/bundles/vendorscripts.bundle.js"></script> <!-- slimscroll, waves Scripts Plugin Js -->

<script src="assets/bundles/mainscripts.bundle.js"></script><!-- Custom Js -->

*/

  public balance: any;
  public account: any;
  public PatientAccount: any;
  public amount: any;
  public discount: any;
  public txHash: any;
  public payment: any;

  public cs: any

  constructor(cs: ContractsService) {
    this.cs = cs
    this.cs.getAccount().then(account => this.account = account);
    //cs.getUserBalance().then(balance => this.balance = balance);
    //cs.gettt()
    //cs.transferToken().then(bl => console.log(bl))
  }

  pay(){
    let FinalAmount = this.amount - this.discount
    this.cs.transferCardea(this.PatientAccount, this.account, FinalAmount).then(bl =>
      this.txHash = bl
    )
  }

  ngOnInit() {
    document.getElementById('payements-sidebar').className += 'active open';

  }

  ngAfterViewInit() {
    $.getScript('assets/bundles/libscripts.bundle.js');
    $.getScript('assets/bundles/vendorscripts.bundle.js');

    $.getScript('assets/bundles/mainscripts.bundle.js');

  }

}
