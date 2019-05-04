import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieParentComponent } from './pie-parent.component';

describe('PieParentComponent', () => {
  let component: PieParentComponent;
  let fixture: ComponentFixture<PieParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
