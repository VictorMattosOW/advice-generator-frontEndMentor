import { TestBed } from '@angular/core/testing';

import { ConselhosService } from './conselhos.service';

describe('ConselhosService', () => {
  let service: ConselhosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConselhosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
