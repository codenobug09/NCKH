import { TestBed } from '@angular/core/testing';

import { ChatbptService } from './chatbpt.service';

describe('ChatbptService', () => {
  let service: ChatbptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatbptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
