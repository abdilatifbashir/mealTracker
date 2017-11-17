import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealOptionComponent } from './meal-option.component';

describe('MealOptionComponent', () => {
  let component: MealOptionComponent;
  let fixture: ComponentFixture<MealOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
