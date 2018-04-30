import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpayementComponent } from './addpayement.component';

describe('AddpayementComponent', () => {
  let component: AddpayementComponent;
  let fixture: ComponentFixture<AddpayementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpayementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpayementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
