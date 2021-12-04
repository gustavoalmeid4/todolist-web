import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistDetailsComponent } from './todolist-details.component';

describe('TodolistDetailsComponent', () => {
  let component: TodolistDetailsComponent;
  let fixture: ComponentFixture<TodolistDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
