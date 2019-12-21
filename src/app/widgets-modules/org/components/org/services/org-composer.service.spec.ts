import { TestBed } from '@angular/core/testing';

import { OrgComposerService } from './org-composer.service';

describe('OrgComposerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrgComposerService = TestBed.get(OrgComposerService);
    expect(service).toBeTruthy();
  });
});
