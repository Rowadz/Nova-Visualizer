import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordcloudComponent } from './components/wordcloud/wordcloud.component';

const routes: Routes = [{ path: '', component: WordcloudComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordcloudRoutingModule {}
