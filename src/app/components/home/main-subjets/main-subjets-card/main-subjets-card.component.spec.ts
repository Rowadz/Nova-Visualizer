import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSubjetsCardComponent } from './main-subjets-card.component';

describe('MainSubjetsCardComponent', () => {
  let component: MainSubjetsCardComponent;
  let fixture: ComponentFixture<MainSubjetsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSubjetsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSubjetsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
