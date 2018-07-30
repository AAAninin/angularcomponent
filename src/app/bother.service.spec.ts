import { TestBed, inject } from '@angular/core/testing';

import { BotherService } from './bother.service';

describe('BotherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BotherService]
    });
  });

  it('should be created', inject([BotherService], (service: BotherService) => {
    expect(service).toBeTruthy();
  }));
});
