import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalcRoutingModule } from './calc-routing.module';
import { CalcComponent } from './components/calc/calc.component';
import { MatModule } from '../mat/mat.module';
import {
  MatToolbarModule,
  MatTableModule,
  MatSortModule
} from '@angular/material';

@NgModule({
  declarations: [CalcComponent],
  imports: [
    CommonModule,
    CalcRoutingModule,
    MatModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule
  ]
})
export class CalcModule {}
