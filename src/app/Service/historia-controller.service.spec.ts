import { TestBed } from '@angular/core/testing';

import { HistoriaControllerService } from './historia-controller.service';

describe('HistoriaControllerService', () => {
  let service: HistoriaControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriaControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
