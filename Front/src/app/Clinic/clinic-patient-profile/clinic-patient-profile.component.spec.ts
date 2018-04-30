import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicPatientProfileComponent } from './clinic-patient-profile.component';

describe('ClinicPatientProfileComponent', () => {
  let component: ClinicPatientProfileComponent;
  let fixture: ComponentFixture<ClinicPatientProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicPatientProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicPatientProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
