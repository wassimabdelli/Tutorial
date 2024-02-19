import { TestBed } from '@angular/core/testing';

import { TooServiceService } from './too-service.service';

describe('TooServiceService', () => {
  let service: TooServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TooServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
