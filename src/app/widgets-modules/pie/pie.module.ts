import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PieRoutingModule } from './pie-routing.module';
import { PieComponent } from './components/pie/pie.component';

@NgModule({
  declarations: [PieComponent],
  imports: [
    CommonModule,
    PieRoutingModule
  ]
})
export class PieModule { }
