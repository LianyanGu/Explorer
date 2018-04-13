import { TestBed, inject } from '@angular/core/testing';

import { HomeServerService } from './home-server.service';

describe('HomeServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeServerService]
    });
  });

  it('should be created', inject([HomeServerService], (service: HomeServerService) => {
    expect(service).toBeTruthy();
  }));
});
