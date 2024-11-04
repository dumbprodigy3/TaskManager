import { TestBed } from '@angular/core/testing';

import { TaskUtilsService } from './task-utils.service';

describe('TaskUtilsService', () => {
  let service: TaskUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
