import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewThingsComponent } from './new-things.component';

describe('NewThingsComponent', () => {
  let component: NewThingsComponent;
  let fixture: ComponentFixture<NewThingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewThingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewThingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
