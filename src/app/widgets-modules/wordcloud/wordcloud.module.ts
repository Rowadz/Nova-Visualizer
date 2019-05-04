import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WordcloudRoutingModule } from './wordcloud-routing.module';
import { WordcloudComponent } from './components/wordcloud/wordcloud.component';
import { MatModule } from '../mat/mat.module';

@NgModule({
  declarations: [WordcloudComponent],
  imports: [CommonModule, WordcloudRoutingModule, MatModule]
})
export class WordcloudModule {}
