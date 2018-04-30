import { TestBed, inject } from '@angular/core/testing';

import { AddPatientService } from './add-patient.service';

describe('AddPatientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddPatientService]
    });
  });

  it('should be created', inject([AddPatientService], (service: AddPatientService) => {
    expect(service).toBeTruthy();
  }));
});
