import { TestBed } from '@angular/core/testing';

import { CaracteristicsService } from './caracteristics.service';

describe('CaracteristicsService', () => {
  let service: CaracteristicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaracteristicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
