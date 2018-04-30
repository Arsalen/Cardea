import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdepartmentsComponent } from './listdepartments.component';

describe('ListdepartmentsComponent', () => {
  let component: ListdepartmentsComponent;
  let fixture: ComponentFixture<ListdepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
