import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-alldoctors',
  templateUrl: './alldoctors.component.html',
  styleUrls: ['./alldoctors.component.css']
})
export class AlldoctorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('doctors-sidebar').className+='active open';
  }

  async ngAfterViewInit() {
    $.getScript('assets/bundles/libscripts.bundle.js');
    $.getScript('assets/bundles/vendorscripts.bundle.js');
    $.getScript('assets/bundles/mainscripts.bundle.js');
	}

 
}
