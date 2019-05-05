import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatSidenavModule,
  MatDividerModule,
  MatListModule,
  MatRippleModule,
  MatIconModule,
  MatSnackBarModule,
  MatMenuModule
} from '@angular/material';
import { ActionButtonComponent } from './action-button/action-button.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatMenuModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatRippleModule,
    MatIconModule,
    MatSnackBarModule,
    ActionButtonComponent,
    HighchartsChartModule,
    FiltersComponent
  ],
  declarations: [ActionButtonComponent, FiltersComponent]
})
export class MatModule {}
