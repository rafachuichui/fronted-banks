import { TestBed } from '@angular/core/testing';

import { SingletonRouterService } from './singleton-Router.service';

describe('SingletonRouterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingletonRouterService = TestBed.get(SingletonRouterService);
    expect(service).toBeTruthy();
  });
});
