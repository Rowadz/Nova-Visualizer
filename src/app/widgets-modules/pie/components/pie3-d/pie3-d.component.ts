import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { PieService } from '../../services/pie/pie.service';
import { MatBottomSheet } from '@angular/material';
import { NotifierService, ReDrawConf } from 'src/app/services/notifier.service';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';
import { CrudMarksComponent } from 'src/app/widgets-modules/mat/crud-marks/crud-marks.component';
import { FilterType } from 'src/app/config/models/filter-types.type';
require('highcharts/modules/item-series')(Highcharts);
require('highcharts/highcharts-3d')(Highcharts);

@Component({
  selector: 'app-pie3-d',
  templateUrl: './pie3-d.component.html',
  styleUrls: ['./pie3-d.component.scss'],
  providers: [PieService]
})
export class Pie3DComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
  private filterType: FilterType;

  constructor(
    private readonly pieService: PieService,
    private readonly bottomSheet: MatBottomSheet
  ) {}

  async ngOnInit(): Promise<void> {
    this.chartOptions = await this.pieService.init('3d');
    this.pieService.editPoint.subscribe((ts: TreeSubejct) => {
      this.bottomSheet.open(CrudMarksComponent, { data: ts });
    });
  }
}
