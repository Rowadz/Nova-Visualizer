import { Injectable } from '@angular/core';
import { select, scaleOrdinal, schemeAccent, schemeDark2 } from 'd3';
import * as cloud from 'd3-cloud';
import { DBService } from 'src/app/services/db.service';
import { NotifierService } from 'src/app/services/notifier.service';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';

@Injectable()
export class WordcloudService {
  constructor(
    private readonly DB: DBService,
    private readonly notifier: NotifierService
  ) {}

  async init(): Promise<any> {
    this.DB.dbName = this.notifier.selectedDB;

    const myWords = await this.DB.getAll();
    return this.pieChartOption(
      myWords.map(({ name, mark }: TreeSubejct) => ({ name, weight: mark }))
    );
  }

  private pieChartOption(
    data: Array<{ name: string; weight: number }>
  ): Highcharts.Options {
    return {
      title: undefined,
      chart: {
        type: 'wordcloud',
        animation: true
      },
      credits: {
        enabled: false
      },
      tooltip: {
        headerFormat: '',
        pointFormat:
          '<span style="color:{point.color};">\u25CF</span> <b> {point.name}</b><br/>' +
          'MARK: <b>{point.weight}</b><br/>'
      } as Highcharts.TooltipOptions,
      plotOptions: {
        wordcloud: {
          rotation: 90,
          cursor: 'pointer',
          allowPointSelect: true
        } as Highcharts.PlotWordcloudOptions
      },
      series: [
        {
          type: 'wordcloud',
          data
        }
      ]
    };
  }
}
