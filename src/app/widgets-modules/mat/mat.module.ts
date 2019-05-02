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

@NgModule({
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatRippleModule,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class MatModule {}
