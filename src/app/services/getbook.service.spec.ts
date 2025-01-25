import { TestBed } from '@angular/core/testing';

import { GetbookService } from './getbook.service';

describe('GetbookService', () => {
  let service: GetbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
