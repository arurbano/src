import { TestBed } from '@angular/core/testing';

import { PecesService } from './peces.service';

describe('PecesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PecesService = TestBed.get(PecesService);
    expect(service).toBeTruthy();
  });
});
