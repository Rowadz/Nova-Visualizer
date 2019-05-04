import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WordcloudRoutingModule } from './wordcloud-routing.module';
import { WordcloudComponent } from './components/wordcloud/wordcloud.component';

@NgModule({
  declarations: [WordcloudComponent],
  imports: [
    CommonModule,
    WordcloudRoutingModule
  ]
})
export class WordcloudModule { }
