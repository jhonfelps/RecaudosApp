import { TestBed } from '@angular/core/testing';

import { recaudoService } from './recaudo.service';

describe('recaudoService', () => {
  let service: recaudoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(recaudoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
