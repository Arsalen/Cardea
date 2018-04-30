import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  async ngAfterViewInit() {
    $.getScript('../assets/bundles/libscripts.bundle.js');
		$.getScript('../assets/bundles/vendorscripts.bundle.js');
	}


}
