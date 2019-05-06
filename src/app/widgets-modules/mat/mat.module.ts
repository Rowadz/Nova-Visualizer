import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatSidenavModule,
  MatDividerModule,
  MatListModule,
  MatRippleModule,
  MatIconModule,
  MatSnackBarModule,
  MatMenuModule,
  MatDialogModule,
  MatBottomSheetModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { ActionButtonComponent } from './action-button/action-button.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { FiltersComponent } from './filters/filters.component';
import { CrudMarksComponent } from './crud-marks/crud-marks.component';
import { MarksEditorComponent } from './crud-marks/marks-editor/marks-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatSidenavModule,
    MatRippleModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule,
    ActionButtonComponent,
    HighchartsChartModule,
    FiltersComponent,
    MatDialogModule,
    CrudMarksComponent,
    MarksEditorComponent,
    ReactiveFormsModule
  ],
  declarations: [
    ActionButtonComponent,
    FiltersComponent,
    CrudMarksComponent,
    MarksEditorComponent
  ],
  entryComponents: [CrudMarksComponent, MarksEditorComponent]
})
export class MatModule {}
