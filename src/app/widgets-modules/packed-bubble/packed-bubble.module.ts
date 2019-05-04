import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackedBubbleRoutingModule } from './packed-bubble-routing.module';
import { PackedBubbleComponent } from './components/packed-bubble/packed-bubble.component';
import { MatModule } from '../mat/mat.module';

@NgModule({
  declarations: [PackedBubbleComponent],
  imports: [CommonModule, PackedBubbleRoutingModule, MatModule]
})
export class PackedBubbleModule {}
