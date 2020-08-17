import { TestBed } from '@angular/core/testing';

import { VerifyDirectLoginService } from './verify-direct-login.service';

describe('VerifyDirectLoginService', () => {
  let service: VerifyDirectLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyDirectLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
