import { TestBed } from '@angular/core/testing';

import { LandLordService } from './land-lord.service';

describe('LandLordService', () => {
  let service: LandLordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandLordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
