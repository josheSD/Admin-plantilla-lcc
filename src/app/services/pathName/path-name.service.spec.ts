import { TestBed } from '@angular/core/testing';

import { PathNameService } from './path-name.service';

describe('PathNameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PathNameService = TestBed.get(PathNameService);
    expect(service).toBeTruthy();
  });
});
