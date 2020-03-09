import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AlamoService } from './alamo.service';

describe('AlamoService', () => {
  let service: AlamoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(AlamoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
