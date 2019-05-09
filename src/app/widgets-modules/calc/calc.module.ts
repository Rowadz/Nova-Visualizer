import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalcRoutingModule } from './calc-routing.module';
import { CalcComponent } from './components/calc/calc.component';
import { MatModule } from '../mat/mat.module';
import {
  MatToolbarModule,
  MatTableModule,
  MatSortModule,
  MatExpansionModule,
  MatCheckboxModule
} from '@angular/material';
import { FreeSubjectsEditorComponent } from './components/free-subjects-editor/free-subjects-editor.component';
import { CalcContainerComponent } from './components/calc-container/calc-container.component';
import { Subject12Component } from './components/free-subjects-editor/subject12/subject12.component';
import { CommonInputRulesComponent } from './components/free-subjects-editor/common-input-rules/common-input-rules.component';

@NgModule({
  declarations: [
    CalcComponent,
    FreeSubjectsEditorComponent,
    CalcContainerComponent,
    Subject12Component,
    CommonInputRulesComponent
  ],
  imports: [
    CommonModule,
    CalcRoutingModule,
    MatModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatExpansionModule,
    MatCheckboxModule
  ]
})
export class CalcModule {}
