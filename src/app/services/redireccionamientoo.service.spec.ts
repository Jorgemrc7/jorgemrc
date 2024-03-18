import { TestBed } from '@angular/core/testing';

import { RedireccionamientooService } from './redireccionamientoo.service';

describe('RedireccionamientooService', () => {
  let service: RedireccionamientooService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedireccionamientooService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
