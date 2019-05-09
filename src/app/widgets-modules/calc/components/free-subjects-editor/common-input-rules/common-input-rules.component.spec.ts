import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonInputRulesComponent } from './common-input-rules.component';

describe('CommonInputRulesComponent', () => {
  let component: CommonInputRulesComponent;
  let fixture: ComponentFixture<CommonInputRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonInputRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonInputRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
