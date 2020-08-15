import { TestBed } from '@angular/core/testing';

import { SignupCifinService } from './signup-cifin.service';

describe('SignupCifinService', () => {
  let service: SignupCifinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupCifinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
