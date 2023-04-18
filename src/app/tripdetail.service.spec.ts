import { TestBed } from '@angular/core/testing';

import { TripdetailService } from './tripdetail.service';

describe('TripdetailService', () => {
  let service: TripdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
