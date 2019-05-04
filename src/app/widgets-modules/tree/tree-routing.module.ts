import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DendrogramComponent } from './components/dendrogram/dendrogram.component';

const routes: Routes = [{ path: '', component: DendrogramComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreeRoutingModule {}
