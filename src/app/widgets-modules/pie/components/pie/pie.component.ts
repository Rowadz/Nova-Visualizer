import { Component, OnInit } from '@angular/core';
import { PieService } from '../../services/pie/pie.service';
import * as Highcharts from 'highcharts';
import { FilterType } from 'src/app/config/models/filter-types.type';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';
import { CrudMarksComponent } from 'src/app/widgets-modules/mat/crud-marks/crud-marks.component';
import { MatBottomSheet } from '@angular/material';
import { NotifierService, ReDrawConf } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
  providers: [PieService]
})
export class PieComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
  ratingOption: boolean;
  private filterType: FilterType;
  constructor(
    private readonly pieService: PieService,
    private readonly bottomSheet: MatBottomSheet,
    private readonly notifierService: NotifierService
  ) {}

  async ngOnInit(): Promise<void> {
    this.chartOptions = await this.pieService.init('pie', 'nothing');
    this.pieService.editPoint.subscribe((ts: TreeSubejct) => {
      this.bottomSheet.open(CrudMarksComponent, { data: ts });
    });
    this.notifierService.reDrawGraph.subscribe((c: ReDrawConf) => {
      this.changeFilter(this.filterType);
    });
  }

  async changeFilter(e: FilterType): Promise<void> {
    this.ratingOption = e === 'rating';
    this.filterType = e;
    const {
      pie,
      pie: { dataLabels }
    } = this.chartOptions.plotOptions;
    this.chartOptions = undefined;
    const options = JSON.stringify(await this.pieService.init('pie', e));
    this.chartOptions = {
      ...JSON.parse(options),
      plotOptions: {
        pie: {
          ...pie,
          dataLabels
        }
      }
    };
  }
}
