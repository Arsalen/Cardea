import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAuthClinicComponent } from './patient-auth-clinic.component';

describe('PatientAuthClinicComponent', () => {
  let component: PatientAuthClinicComponent;
  let fixture: ComponentFixture<PatientAuthClinicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientAuthClinicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAuthClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
