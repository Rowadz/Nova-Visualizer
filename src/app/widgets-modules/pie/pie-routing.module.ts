import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PieComponent } from './components/pie/pie.component';
import { ParliamentComponent } from './components/parliament/parliament.component';
import { PieParentComponent } from './components/pie-parent/pie-parent.component';
import { Pie3DComponent } from './components/pie3-d/pie3-d.component';

const routes: Routes = [
  {
    path: '',
    component: PieParentComponent,
    children: [
      { path: '', component: PieComponent },
      { path: 'parliament', component: ParliamentComponent },
      { path: '3D', component: Pie3DComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PieRoutingModule {}
