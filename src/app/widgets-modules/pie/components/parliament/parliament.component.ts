import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { PieService } from '../../services/pie/pie.service';
import { FilterType } from 'src/app/config/models/filter-types.type';
import { CrudMarksComponent } from 'src/app/widgets-modules/mat/crud-marks/crud-marks.component';
import { MatBottomSheet } from '@angular/material';
import { NotifierService, ReDrawConf } from 'src/app/services/notifier.service';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';
require('highcharts/modules/item-series')(Highcharts);

@Component({
  selector: 'app-parliament',
  templateUrl: './parliament.component.html',
  styleUrls: ['./parliament.component.scss'],
  providers: [PieService]
})
export class ParliamentComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
  private filterType: FilterType;

  constructor(
    private readonly pieService: PieService,
    private readonly bottomSheet: MatBottomSheet
  ) {}

  async ngOnInit(): Promise<void> {
    this.chartOptions = await this.pieService.init('item');
    this.pieService.editPoint.subscribe((ts: TreeSubejct) => {
      this.bottomSheet.open(CrudMarksComponent, { data: ts });
    });
  }
}
