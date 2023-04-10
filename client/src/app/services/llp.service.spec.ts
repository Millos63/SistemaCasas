import { TestBed } from '@angular/core/testing';

import { LlpService } from './llp.service';

describe('LlpService', () => {
  let service: LlpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LlpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
