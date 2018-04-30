import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

import { LeftbarComponent } from './../../Core/leftbar/leftbar.component'
import { NavbarComponent } from './../../Core/navbar/navbar.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {

    document.getElementById('dashboard-sidebar').className += 'active open';

  }

  ngAfterViewInit() {
    $.getScript('assets/bundles/libscripts.bundle.js');
    $.getScript('assets/bundles/vendorscripts.bundle.js');
    $.getScript('assets/bundles/jvectormap.bundle.js');
    $.getScript('assets/bundles/knob.bundle.js');
    $.getScript('assets/bundles/morrisscripts.bundle.js');
    $.getScript('assets/bundles/mainscripts.bundle.js');
    $.getScript('assets/js/pages/index.js');
  }

  private loadScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
    const scriptElement = document.createElement('script');
    scriptElement.src = scriptUrl;
    scriptElement.onload = resolve;
    document.body.appendChild(scriptElement);
   })
  }

}
