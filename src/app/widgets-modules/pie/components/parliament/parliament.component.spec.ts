import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParliamentComponent } from './parliament.component';

describe('ParliamentComponent', () => {
  let component: ParliamentComponent;
  let fixture: ComponentFixture<ParliamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParliamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParliamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
