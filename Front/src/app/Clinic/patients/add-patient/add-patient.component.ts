import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import {Router} from '@angular/router';
import {AddPatientService} from './add-patient.service';
import {LocalStorageService} from 'angular-2-local-storage';
import { NgxSmartModalService } from 'ngx-smart-modal';


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit,AfterViewInit {
  QR_code:any;
  text:any;
  constructor(private localStorageService: LocalStorageService,public ngxSmartModalService: NgxSmartModalService, private add_patient_service: AddPatientService, private router:Router) { }


  ngOnInit() {
    document.getElementById('patients-sidebar').className += 'active open';
  }

  ngAfterViewInit(){
    $.getScript('assets/bundles/libscripts.bundle.js');
    $.getScript('assets/bundles/vendorscripts.bundle.js');
    $.getScript('assets/plugins/dropzone/dropzone.js');
    $.getScript('assets/plugins/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js');
    $.getScript('assets/plugins/momentjs/moment.js');
    $.getScript('assets/bundles/mainscripts.bundle.js');


  }
  added_patient_all_data:any;
  //QR_code : for file
  //qrResult : for scan
  retrieve_patient(id){
          //get id of the clinic after login with local storage
         /* this.added_patient_asset_with_login=this.localStorageService.get(id);
          this.clinic_id = JSON.parse(this.clinic_asset_with_login)["id"] ;
          this.clinic_s_id = String(this.clinic_id);*/

          //send clinic name and id to the leftbar
         // this.localStorageService.set('current_clinic',this.clinic_asset_with_login);

          //login with service retrieve_id
          this.add_patient_service.add_patient(id).subscribe(
            (response) => {
              /*this function is executed every time there's a new output */
              console.log("VALUE RECEIVED: " + response);
              //get results from server
              this.added_patient_all_data = JSON.stringify(response);
              //stock in localstorage patient to add it to patient list
              this.localStorageService.set('added_patient', this.added_patient_all_data);
              //redirect
              //this.route.navigate(['/clinic/auth_departments']);
            },
            (err) => {
              /* this function is executed when there's an ERROR */
              alert("Bigchaindb error");
            },
            () => {
              /* this function is executed when the observable ends (completes) its stream */
              alert("logged to the Bigchain");
            }
          );
  }

  openFile(event) {
    let input = event.target;
    for (var index = 0; index < input.files.length; index++) {
      let reader = new FileReader();
      reader.onload = () => {
        // this 'text' is the content of the file
        var text = reader.result;
        this.text = text;
        this.QR_code = this.text;
      }
      reader.readAsText(input.files[index]);

    }
    ;
    return this.QR_code;
  }
    //scan QR
    camStarted = false;
    selectedDevice = undefined;
    qrResult = "";
    availableDevices = [];

    elementType: 'url' | 'canvas' | 'img' = 'url';
    value: string;



    goToRecord() {
      this.router.navigate(['/record']);
    }


    displayCameras(cams: any[]) {
      this.availableDevices = cams;
      console.log("Devices", cams);
      if (cams && cams.length > 0) {
        this.selectedDevice = cams[0];
        //this.camStarted = true;
      }
    }

    handleQrCodeResult(result: string) {
      this.qrResult = result;
      this.ngxSmartModalService.getModal("myModal").close();
      alert(result);
    }

    onChange(selectedValue: string) {
      console.log("Selection changed", selectedValue);
      this.camStarted = false;
      this.selectedDevice = selectedValue;
      this.camStarted = true;
    }
    qr() {
      this.camStarted = true;
      setTimeout(this.ngxSmartModalService.getModal("myModal").open(), 3000);
    }
    closeCam() {
      this.ngxSmartModalService.getModal("myModal").close();
      this.camStarted = false;
    }




}
