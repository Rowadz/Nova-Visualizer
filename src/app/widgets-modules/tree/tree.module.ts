import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeRoutingModule } from './tree-routing.module';
import { DendrogramComponent } from './components/dendrogram/dendrogram.component';
import { MatModule } from '../mat/mat.module';
import {
  MatBottomSheetModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { CrudMarksComponent } from './components/dendrogram/crud-marks/crud-marks.component';
import { MarksEditorComponent } from './components/dendrogram/crud-marks/marks-editor/marks-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DendrogramComponent, CrudMarksComponent, MarksEditorComponent],
  imports: [
    CommonModule,
    TreeRoutingModule,
    MatModule,
    MatBottomSheetModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [CrudMarksComponent, MarksEditorComponent]
})
export class TreeModule {}
