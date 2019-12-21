import { Component, OnInit } from '@angular/core';
import OrgChartModule from 'highcharts/modules/organization';
import SankeyModule from 'highcharts/modules/sankey';
import * as Highcharts from 'highcharts';
import { OrgComposerService } from './services/org-composer.service';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';
import { CrudMarksComponent } from 'src/app/widgets-modules/mat/crud-marks/crud-marks.component';
import { MatBottomSheet } from '@angular/material';
import { NotifierService, ReDrawConf } from 'src/app/services/notifier.service';
SankeyModule(Highcharts);
OrgChartModule(Highcharts);

@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.scss'],
  providers: [OrgComposerService]
})
export class OrgComponent implements OnInit {
  readonly Highcharts;
  chartOptions: Highcharts.Options;
  constructor(
    private readonly orgComposerService: OrgComposerService,
    private readonly bottomSheet: MatBottomSheet,
    private readonly notifierService: NotifierService
  ) {
    this.Highcharts = Highcharts;
  }

  ngOnInit(): void {
    this.assignOptions();
    this.orgComposerService.editPoint.subscribe((ts: TreeSubejct) =>
      this.bottomSheet.open(CrudMarksComponent, {
        data: { ...ts, name: ts.title }
      })
    );
    this.notifierService.reDrawGraph.subscribe((c: ReDrawConf) =>
      this.assignOptions()
    );
  }

  private assignOptions(): void {
    this.orgComposerService
      .mapTreeToOrg()
      .then((options: Highcharts.Options) => (this.chartOptions = options));
  }
}
