import { TestBed, inject } from '@angular/core/testing';

import { TeatarServiceService } from './teatar-service.service';

describe('TeatarServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeatarServiceService]
    });
  });

  it('should be created', inject([TeatarServiceService], (service: TeatarServiceService) => {
    expect(service).toBeTruthy();
  }));
});
