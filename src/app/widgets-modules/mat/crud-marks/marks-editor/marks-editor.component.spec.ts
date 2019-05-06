import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksEditorComponent } from './marks-editor.component';

describe('MarksEditorComponent', () => {
  let component: MarksEditorComponent;
  let fixture: ComponentFixture<MarksEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarksEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
