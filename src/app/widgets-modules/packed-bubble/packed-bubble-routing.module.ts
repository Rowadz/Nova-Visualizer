import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackedBubbleComponent } from './components/packed-bubble/packed-bubble.component';

const routes: Routes = [{ path: '', component: PackedBubbleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackedBubbleRoutingModule {}
