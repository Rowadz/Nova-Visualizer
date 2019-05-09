import { Injectable } from '@angular/core';
import { DBService } from 'src/app/services/db.service';
import { NotifierService } from 'src/app/services/notifier.service';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';

@Injectable()
export class ColumnService {
  constructor(
    private readonly DB: DBService,
    private readonly notifier: NotifierService
  ) {}

  async init(): Promise<Highcharts.Options> {
    this.DB.dbName = this.notifier.selectedDB;
    const data = await this.DB.getAll();
    return this.columnChartOption(
      data
        .filter(({ cid }: TreeSubejct) => cid.split('-').length !== 5)
        .map(({ name, mark }: TreeSubejct) => ({
          name,
          y: +mark,
          drilldown: name
        }))
    ) as Highcharts.Options;
  }

  private columnChartOption(
    data: Array<{
      name: string;
      y: number;
      drilldown: string;
    }>
  ): Highcharts.Options {
    return {
      chart: {
        type: 'column'
      },
      credits: {
        enabled: false
      },
      title: {
        text: 'العلامات'
      },
      subtitle: {
        text: 'ضيف او ضيفي علامات من الشجرة, بيطلعو هون'
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'mark'
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%'
          }
        }
      },

      tooltip: {
        headerFormat: '',
        pointFormat:
          '<span style="color:{point.color};">\u25CF</span> <b> {point.name}</b><br/>' +
          'MARK: <b>{point.y}</b><br/>'
      },
      series: [
        {
          colorByPoint: true,
          type: 'column',
          data
        }
      ]
    };
  }
}
