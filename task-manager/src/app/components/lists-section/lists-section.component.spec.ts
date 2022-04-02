import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsSectionComponent } from './lists-section.component';

describe('ListsSectionComponent', () => {
  let component: ListsSectionComponent;
  let fixture: ComponentFixture<ListsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
