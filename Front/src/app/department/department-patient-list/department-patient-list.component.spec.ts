import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentPatientListComponent } from './department-patient-list.component';

describe('DepartmentPatientListComponent', () => {
  let component: DepartmentPatientListComponent;
  let fixture: ComponentFixture<DepartmentPatientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentPatientListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentPatientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
