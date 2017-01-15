/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovieDataStoreService } from './movie-data-store.service';

describe('MovieDataStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieDataStoreService]
    });
  });

  it('should ...', inject([MovieDataStoreService], (service: MovieDataStoreService) => {
    expect(service).toBeTruthy();
  }));
});
