import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalcComponent } from './components/calc/calc.component';
import { FreeSubjectsEditorComponent } from './components/free-subjects-editor/free-subjects-editor.component';
import { CalcContainerComponent } from './components/calc-container/calc-container.component';

const routes: Routes = [
  {
    path: '',
    component: CalcContainerComponent,
    children: [
      { path: '', redirectTo: 'free-subjects', pathMatch: 'full' },
      { path: 'free-subjects', component: FreeSubjectsEditorComponent },
      { path: 'total', component: CalcComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalcRoutingModule {}
