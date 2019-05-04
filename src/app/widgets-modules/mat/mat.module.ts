import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatSidenavModule,
  MatDividerModule,
  MatListModule,
  MatRippleModule,
  MatIconModule,
  MatSnackBarModule
} from '@angular/material';
import { ActionButtonComponent } from './action-button/action-button.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterModule],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatRippleModule,
    MatIconModule,
    MatSnackBarModule,
    ActionButtonComponent,
    HighchartsChartModule
  ],
  declarations: [ActionButtonComponent]
})
export class MatModule {}
