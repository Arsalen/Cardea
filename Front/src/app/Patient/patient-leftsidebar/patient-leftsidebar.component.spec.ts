import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientLeftsidebarComponent } from './patient-leftsidebar.component';

describe('PatientLeftsidebarComponent', () => {
  let component: PatientLeftsidebarComponent;
  let fixture: ComponentFixture<PatientLeftsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientLeftsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientLeftsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
