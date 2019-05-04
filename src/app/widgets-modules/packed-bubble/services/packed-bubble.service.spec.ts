import { TestBed } from '@angular/core/testing';

import { PackedBubbleService } from './packed-bubble.service';

describe('PackedBubbleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PackedBubbleService = TestBed.get(PackedBubbleService);
    expect(service).toBeTruthy();
  });
});
