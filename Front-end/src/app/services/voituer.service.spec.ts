import { TestBed } from '@angular/core/testing';

import { VoituerService } from './voituer.service';

describe('VoituerService', () => {
  let service: VoituerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoituerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
