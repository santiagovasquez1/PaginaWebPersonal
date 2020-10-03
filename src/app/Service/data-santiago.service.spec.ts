import { TestBed } from '@angular/core/testing';

import { DataSantiagoService } from './data-santiago.service';

describe('DataSantiagoService', () => {
  let service: DataSantiagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSantiagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
