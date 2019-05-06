import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeRoutingModule } from './tree-routing.module';
import { DendrogramComponent } from './components/dendrogram/dendrogram.component';
import { MatModule } from '../mat/mat.module';

@NgModule({
  declarations: [DendrogramComponent],
  imports: [CommonModule, TreeRoutingModule, MatModule]
})
export class TreeModule {}
