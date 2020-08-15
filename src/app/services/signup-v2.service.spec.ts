import { TestBed } from '@angular/core/testing';

import { SignupV2Service } from './signup-v2.service';

describe('SignupV2Service', () => {
  let service: SignupV2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupV2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
