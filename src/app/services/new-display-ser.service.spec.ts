import { TestBed } from '@angular/core/testing';

import { NewDisplaySerService } from './new-display-ser.service';

describe('NewDisplaySerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewDisplaySerService = TestBed.get(NewDisplaySerService);
    expect(service).toBeTruthy();
  });
});
