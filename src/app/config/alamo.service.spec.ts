import { TestBed } from '@angular/core/testing';

import { AlamoService } from './alamo.service';

describe('AlamoService', () => {
  let service: AlamoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlamoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
