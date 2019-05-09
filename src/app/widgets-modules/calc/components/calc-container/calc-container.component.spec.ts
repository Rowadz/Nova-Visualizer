import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcContainerComponent } from './calc-container.component';

describe('CalcContainerComponent', () => {
  let component: CalcContainerComponent;
  let fixture: ComponentFixture<CalcContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
