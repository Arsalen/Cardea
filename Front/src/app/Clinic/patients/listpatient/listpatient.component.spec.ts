import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpatientComponent } from './listpatient.component';

describe('ListpatientComponent', () => {
  let component: ListpatientComponent;
  let fixture: ComponentFixture<ListpatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
