import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthDepartmentsComponent } from './auth-departments.component';

describe('AuthDepartmentsComponent', () => {
  let component: AuthDepartmentsComponent;
  let fixture: ComponentFixture<AuthDepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthDepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
