import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pie3DComponent } from './pie3-d.component';

describe('Pie3DComponent', () => {
  let component: Pie3DComponent;
  let fixture: ComponentFixture<Pie3DComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pie3DComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pie3DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
