import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocalStorageModule } from 'angular-2-local-storage';

import { AppComponent } from './app.component';
import { DashboardComponent } from './Clinic/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './Patient/profile/profile.component';
import { NotfoundComponent } from './errors/notfound/notfound.component';
import { AlldoctorsComponent } from './Clinic/doctors/alldoctors/alldoctors.component';
import { AdddoctorComponent } from './Clinic/doctors/adddoctor/adddoctor.component';
import { DoctorprofileComponent } from './Clinic/doctors/doctorprofile/doctorprofile.component';
import { NavbarComponent } from './Core/navbar/navbar.component';
import { LeftbarComponent } from './Core/leftbar/leftbar.component';
import { AppointmentComponent } from './Clinic/appointment/appointment.component';
import { ListpatientComponent } from './Clinic/patients/listpatient/listpatient.component';
import { AddPatientComponent } from './Clinic/patients/add-patient/add-patient.component';
import { AddDepartmentComponent } from './Clinic/departments/add-department/add-department.component';
import { ListdepartmentsComponent } from './Clinic/departments/listdepartments/listdepartments.component';
import { ListpayementsComponent } from './Clinic/payements/listpayements/listpayements.component';
import { AddpayementComponent } from './Clinic/payements/addpayement/addpayement.component';
import { PatientAuthClinicComponent} from './Patient/patient-auth-clinic/patient-auth-clinic.component';
import { PatientLeftsidebarComponent} from './Patient/patient-leftsidebar/patient-leftsidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupService} from './signup/signup.service';
import { AuthDepartmentsComponent } from './Clinic/auth-departments/auth-departments.component';
import {LoginService} from './login/login.service';
import {AddPatientService} from './Clinic/patients/add-patient/add-patient.service';
import { ClinicPatientProfileComponent } from './Clinic/clinic-patient-profile/clinic-patient-profile.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { DepartmentLoginComponent } from './department/department-login/department-login.component';
import { DepartmentPatientListComponent } from './department/department-patient-list/department-patient-list.component';
import { DepartmentEditRecordComponent } from './department/department-edit-record/department-edit-record.component';
import {ContractsService} from './CardeaToken/contracts.service';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { NgxZxingModule } from 'ngx-zxing';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


const appRoutes: Routes = [
  { path: 'clinic', component: DashboardComponent },
  { path: 'clinic/appointments', component: AppointmentComponent },
  { path: 'clinic/patients/all', component: ListpatientComponent },
  { path: 'clinic/patients/add', component: AddPatientComponent },
  { path: 'clinic/payements/list', component: ListpayementsComponent },
  { path: 'clinic/payements/add', component: AddpayementComponent },
  { path: 'clinic/departments/add', component: AddDepartmentComponent },
  { path: 'clinic/departments/list', component: ListdepartmentsComponent },
  { path: 'clinic/alldoctors', component: AlldoctorsComponent },
  { path: 'clinic/adddoctor', component: AdddoctorComponent },
  { path: 'clinic/profiledoctor', component: DoctorprofileComponent },
  { path: 'clinic/auth_departments', component: AuthDepartmentsComponent },
  { path: 'clinic/patient/profile', component: ClinicPatientProfileComponent },


  { path: 'department_log', component: DepartmentLoginComponent },
  { path: 'department_log/patient_to_edit', component: DepartmentPatientListComponent },
  { path: 'department_log/record_to_edit', component: DepartmentEditRecordComponent },


  { path: 'patient/profile', component: ProfileComponent },
  { path: 'patient/auth_clinic', component: PatientAuthClinicComponent },
  { path: 'patient/logout', component: LoginComponent },


  { path: 'login', component: LoginComponent },
  { path: 'login/signup', component: SignupComponent },
  { path: '**', component: NotfoundComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    PatientLeftsidebarComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    NotfoundComponent,
    AlldoctorsComponent,
    AdddoctorComponent,
    PatientAuthClinicComponent,
    DoctorprofileComponent,
    NavbarComponent,
    LeftbarComponent,
    AppointmentComponent,
    ListpatientComponent,
    AddPatientComponent,
    AddDepartmentComponent,
    ListdepartmentsComponent,
    ListpayementsComponent,
    AddpayementComponent,
    AuthDepartmentsComponent,
    ClinicPatientProfileComponent,
    DepartmentLoginComponent,
    DepartmentPatientListComponent,
    DepartmentEditRecordComponent,

  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    NgxQRCodeModule,
    NgxSmartModalModule.forRoot(),
    ToastModule.forRoot(),
    NgxZxingModule.forRoot(),
    SimpleNotificationsModule.forRoot(),
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    RouterModule.forRoot(
      appRoutes
    )


  ],
  providers: [SignupService, LoginService, AddPatientService, ContractsService,NgxSmartModalService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
