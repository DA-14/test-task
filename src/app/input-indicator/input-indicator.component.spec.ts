import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputIndicatorComponent } from './input-indicator.component';

describe('InputIndicatorComponent', () => {
  let component: InputIndicatorComponent;
  let fixture: ComponentFixture<InputIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
