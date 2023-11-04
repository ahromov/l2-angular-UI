import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { commonGuardGuard } from './common-guard.guard';

describe('commonGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => commonGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
