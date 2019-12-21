import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgComponent } from './components/org/org.component';
import { OrgRoutingModule } from './org-routing.module';
import { MatModule } from '../mat/mat.module';

@NgModule({
  declarations: [OrgComponent],
  imports: [
    CommonModule, OrgRoutingModule, MatModule
  ]
})
export class OrgModule { }
