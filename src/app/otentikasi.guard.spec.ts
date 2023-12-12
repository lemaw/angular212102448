import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { OtentikasiGuard } from './otentikasi.guard';

describe('OtentikasiGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => OtentikasiGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
