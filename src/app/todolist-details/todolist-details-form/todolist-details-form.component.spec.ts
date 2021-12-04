import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistDetailsFormComponent } from './todolist-details-form.component';

describe('TodolistDetailsFormComponent', () => {
  let component: TodolistDetailsFormComponent;
  let fixture: ComponentFixture<TodolistDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
