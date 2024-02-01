import { TestBed } from '@angular/core/testing';

import { CareersOverviewService } from './careers-overview.service';

describe('CareersOverviewService', () => {
  let service: CareersOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareersOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
