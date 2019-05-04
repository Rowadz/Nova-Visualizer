import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DendrogramComponent } from './dendrogram.component';

describe('DendrogramComponent', () => {
  let component: DendrogramComponent;
  let fixture: ComponentFixture<DendrogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DendrogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DendrogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
