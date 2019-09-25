import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureComponentComponent } from './temperature-component.component';

describe('TemperatureComponentComponent', () => {
  let component: TemperatureComponentComponent;
  let fixture: ComponentFixture<TemperatureComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
