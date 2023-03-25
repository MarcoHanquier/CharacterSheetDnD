import { TestBed } from '@angular/core/testing';

import { ShieldsService } from './shields.service';

describe('ShieldsService', () => {
  let service: ShieldsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShieldsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
