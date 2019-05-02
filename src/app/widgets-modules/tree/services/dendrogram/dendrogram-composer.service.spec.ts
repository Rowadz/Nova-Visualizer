import { TestBed } from '@angular/core/testing';

import { DendrogramComposerService } from './dendrogram-composer.service';

describe('DendrogramComposerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DendrogramComposerService = TestBed.get(DendrogramComposerService);
    expect(service).toBeTruthy();
  });
});
