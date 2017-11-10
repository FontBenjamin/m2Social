import { TestBed, inject } from '@angular/core/testing';

import { DataPostsService } from './data-posts.service';

describe('DataPostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataPostsService]
    });
  });

  it('should be created', inject([DataPostsService], (service: DataPostsService) => {
    expect(service).toBeTruthy();
  }));
});
