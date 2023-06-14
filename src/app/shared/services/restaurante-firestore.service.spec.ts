import { TestBed } from '@angular/core/testing';

import { RestauranteFirestoreService } from './restaurante-firestore.service';

describe('RestauranteFirestoreService', () => {
  let service: RestauranteFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestauranteFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
