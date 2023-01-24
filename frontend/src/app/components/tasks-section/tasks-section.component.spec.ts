import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksSectionComponent } from './tasks-section.component';

describe('TasksSectionComponent', () => {
  let component: TasksSectionComponent;
  let fixture: ComponentFixture<TasksSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
