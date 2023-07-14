import { TestBed } from '@angular/core/testing';

import { ChuService } from './chu.service';

describe('ChuService', () => {
  let service: ChuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
