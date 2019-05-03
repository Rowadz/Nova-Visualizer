import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMarksComponent } from './crud-marks.component';

describe('CrudMarksComponent', () => {
  let component: CrudMarksComponent;
  let fixture: ComponentFixture<CrudMarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudMarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
