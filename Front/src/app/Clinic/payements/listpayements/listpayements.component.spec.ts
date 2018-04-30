import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpayementsComponent } from './listpayements.component';

describe('ListpayementsComponent', () => {
  let component: ListpayementsComponent;
  let fixture: ComponentFixture<ListpayementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpayementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpayementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
