import { TestBed, inject } from '@angular/core/testing';

import { InMemoryApiService } from './in-memory-api.service';

describe('InMemoryApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryApiService]
    });
  });

  it('should be created', inject([InMemoryApiService], (service: InMemoryApiService) => {
    expect(service).toBeTruthy();
  }));
});
