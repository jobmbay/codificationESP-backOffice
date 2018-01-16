import { TestBed, inject } from '@angular/core/testing';

import { ProjetDetailsService } from './projet-details.service';

describe('ProjetDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjetDetailsService]
    });
  });

  it('should be created', inject([ProjetDetailsService], (service: ProjetDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
