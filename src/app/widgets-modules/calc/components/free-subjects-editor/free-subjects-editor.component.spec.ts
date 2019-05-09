import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeSubjectsEditorComponent } from './free-subjects-editor.component';

describe('FreeSubjectsEditorComponent', () => {
  let component: FreeSubjectsEditorComponent;
  let fixture: ComponentFixture<FreeSubjectsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeSubjectsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeSubjectsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
