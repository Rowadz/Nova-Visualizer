import { Component, OnInit } from '@angular/core';
import { WordcloudService } from '../../services/wordcloud.service';
import * as Highcharts from 'highcharts';
import wordCloudModule from 'highcharts/modules/wordcloud';
import { FilterType } from 'src/app/config/models/filter-types.type';
import { MatBottomSheet } from '@angular/material';
import { NotifierService, ReDrawConf } from 'src/app/services/notifier.service';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';
import { CrudMarksComponent } from 'src/app/widgets-modules/mat/crud-marks/crud-marks.component';
wordCloudModule(Highcharts);

@Component({
  selector: 'app-wordcloud',
  templateUrl: './wordcloud.component.html',
  styleUrls: ['./wordcloud.component.scss'],
  providers: [WordcloudService]
})
export class WordcloudComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
  private filterType: FilterType;
  constructor(
    private readonly wordcloudService: WordcloudService,
    private readonly bottomSheet: MatBottomSheet,
    private readonly notifierService: NotifierService
  ) {}

  async ngOnInit(): Promise<void> {
    this.chartOptions = await this.wordcloudService.init();
    this.wordcloudService.editPoint.subscribe((ts: TreeSubejct) => {
      this.bottomSheet.open(CrudMarksComponent, { data: ts });
    });
    this.notifierService.reDrawGraph.subscribe((c: ReDrawConf) => {
      this.changeFilter(this.filterType);
    });
  }

  async changeFilter(e: FilterType): Promise<void> {
    this.filterType = e;
    const { wordcloud } = this.chartOptions.plotOptions;
    this.chartOptions = undefined;
    const options = JSON.stringify(await this.wordcloudService.init(e));
    this.chartOptions = {
      ...JSON.parse(options),
      plotOptions: { ...wordcloud }
    };
  }
}
