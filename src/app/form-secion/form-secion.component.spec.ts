import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSecionComponent } from './form-secion.component';

describe('FormSecionComponent', () => {
  let component: FormSecionComponent;
  let fixture: ComponentFixture<FormSecionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSecionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSecionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
