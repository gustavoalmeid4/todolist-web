import { TestBed } from '@angular/core/testing';

import { TodolistDetailService } from './todolist-detail.service';

describe('TodolistDetailService', () => {
  let service: TodolistDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodolistDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
