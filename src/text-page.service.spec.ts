import { TestBed, inject } from '@angular/core/testing';

import { TextPageService } from './text-page.service';

describe('TextPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextPageService]
    });
  });

  it('should be created', inject([TextPageService], (service: TextPageService) => {
    expect(service).toBeTruthy();
  }));
});
