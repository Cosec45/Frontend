import { TestBed } from '@angular/core/testing';

import { TourDService } from './tour-d.service';

describe('TourDService', () => {
  let service: TourDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
