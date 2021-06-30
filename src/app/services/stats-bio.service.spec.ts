import { TestBed } from '@angular/core/testing';

import { StatsBioService } from './stats-bio.service';

describe('StatsBioService', () => {
  let service: StatsBioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatsBioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
