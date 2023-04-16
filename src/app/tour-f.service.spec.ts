import { TestBed } from '@angular/core/testing';

import { TourFService } from './tour-f.service';

describe('TourFService', () => {
  let service: TourFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
