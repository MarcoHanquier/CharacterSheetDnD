import { TestBed } from '@angular/core/testing';

import { ClassFeaturesService } from './class-features.service';

describe('ClassFeaturesService', () => {
  let service: ClassFeaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassFeaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
