import { TestBed, inject } from '@angular/core/testing';

import { TodorepositoryService } from './todorepository.service';

describe('TodorepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodorepositoryService]
    });
  });

  it('should be created', inject([TodorepositoryService], (service: TodorepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
