import { TestBed } from '@angular/core/testing';

import { WordcloudService } from './wordcloud.service';

describe('WordcloudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordcloudService = TestBed.get(WordcloudService);
    expect(service).toBeTruthy();
  });
});
