import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-department-edit-record',
  templateUrl: './department-edit-record.component.html',
  styleUrls: ['./department-edit-record.component.css']
})
export class DepartmentEditRecordComponent implements OnInit {

  constructor(private notif: NotificationsService) {


  }
  Blood_type:any="Group A";
  Blood_pressure:any="medium 45%";
  History:any="Gastrology doctor 28/04  Cardiology doctor 10/02";
  Prescriptions:any="Doliprane, aselgic, meteoxane";
  Immunizations:any="week";
  Current_Medications:any="tuntex, Antibiotic";
  Surgical_history_Injuries:any="Artificial heart";
  Allergies:any="Spring allergies";
  Vital_Signs:any="headache";
  Appointments:any="14/12/2018 Al ALYA clinic";

  ngOnInit() {
  }
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

}
