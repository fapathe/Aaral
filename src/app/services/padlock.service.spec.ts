import { TestBed } from '@angular/core/testing';

import { PadlockService } from './padlock.service';

describe('PadlockService', () => {
  let service: PadlockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PadlockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
