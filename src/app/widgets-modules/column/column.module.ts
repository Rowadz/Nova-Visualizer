import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColumnRoutingModule } from './column-routing.module';
import { ColumnComponent } from './components/column/column.component';
import { MatModule } from '../mat/mat.module';

@NgModule({
  declarations: [ColumnComponent],
  imports: [CommonModule, ColumnRoutingModule, MatModule]
})
export class ColumnModule {}
