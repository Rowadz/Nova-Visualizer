import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subject12Component } from './subject12.component';

describe('Subject12Component', () => {
  let component: Subject12Component;
  let fixture: ComponentFixture<Subject12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subject12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subject12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
