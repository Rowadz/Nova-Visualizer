import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tree',
    loadChildren: './widgets-modules/tree/tree.module#TreeModule'
  },
  {
    path: 'pie',
    loadChildren: './widgets-modules/pie/pie.module#PieModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
