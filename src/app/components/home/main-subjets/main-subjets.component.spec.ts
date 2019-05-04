import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSubjetsComponent } from './main-subjets.component';

describe('MainSubjetsComponent', () => {
  let component: MainSubjetsComponent;
  let fixture: ComponentFixture<MainSubjetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSubjetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSubjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
