import { Component, OnInit } from '@angular/core';
import { ColumnService } from '../../services/column.service';
import * as Highcharts from 'highcharts';
import { FilterType } from 'src/app/config/models/filter-types.type';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';
import { CrudMarksComponent } from 'src/app/widgets-modules/mat/crud-marks/crud-marks.component';
import { MatBottomSheet } from '@angular/material';
import { NotifierService, ReDrawConf } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
  providers: [ColumnService]
})
export class ColumnComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
  filterType: FilterType;
  constructor(
    private readonly columnService: ColumnService,
    private readonly bottomSheet: MatBottomSheet,
    private readonly notifierService: NotifierService
  ) {}

  async ngOnInit(): Promise<void> {
    this.chartOptions = await this.columnService.init();
    this.columnService.editPoint.subscribe((ts: TreeSubejct) => {
      this.bottomSheet.open(CrudMarksComponent, { data: ts });
    });
    this.notifierService.reDrawGraph.subscribe((c: ReDrawConf) => {
      this.changeFilter(this.filterType);
    });
  }

  async changeFilter(e: FilterType): Promise<void> {
    this.filterType = e;
    const { column } = this.chartOptions.plotOptions;
    this.chartOptions = undefined;
    const options = JSON.stringify(await this.columnService.init(e));
    this.chartOptions = {
      ...JSON.parse(options),
      plotOptions: {
        column: {
          ...column
        }
      }
    };
  }
}
