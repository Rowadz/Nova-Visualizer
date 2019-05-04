import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PieRoutingModule } from './pie-routing.module';
import { PieComponent } from './components/pie/pie.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ParliamentComponent } from './components/parliament/parliament.component';
import { PieParentComponent } from './components/pie-parent/pie-parent.component';
import { MatToolbarModule } from '@angular/material';
import { MatModule } from '../mat/mat.module';
import { Pie3DComponent } from './components/pie3-d/pie3-d.component';

@NgModule({
  declarations: [PieComponent, ParliamentComponent, PieParentComponent, Pie3DComponent],
  imports: [
    CommonModule,
    PieRoutingModule,
    HighchartsChartModule,
    MatToolbarModule,
    MatModule
  ]
})
export class PieModule {}
