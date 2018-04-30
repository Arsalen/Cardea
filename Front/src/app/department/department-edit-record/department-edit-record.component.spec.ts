import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentEditRecordComponent } from './department-edit-record.component';

describe('DepartmentEditRecordComponent', () => {
  let component: DepartmentEditRecordComponent;
  let fixture: ComponentFixture<DepartmentEditRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentEditRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentEditRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
