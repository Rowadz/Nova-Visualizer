import { Injectable, EventEmitter } from '@angular/core';
import { DBService } from 'src/app/services/db.service';
import { NotifierService } from 'src/app/services/notifier.service';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';
import { FilterType } from 'src/app/config/models/filter-types.type';
import { SeriesClickEventObject } from 'highcharts';

@Injectable()
export class ColumnService {
  editPoint: EventEmitter<TreeSubejct>;
  constructor(
    private readonly DB: DBService,
    private readonly notifier: NotifierService
  ) {
    this.editPoint = new EventEmitter<TreeSubejct>();
  }

  async init(filter: FilterType = 'nothing'): Promise<Highcharts.Options> {
    this.DB.dbName = this.notifier.selectedDB;
    const data = await this.DB.getAll();
    let d = data
      .filter(({ cid }: TreeSubejct) => cid.split('-').length !== 5)
      .map((ts: TreeSubejct) => ({
        name: ts.name,
        y: +ts.mark,
        drilldown: ts.name,
        ...ts
      }));
    if (filter === 'Asc') {
      d = [...d.sort((a, b) => (a.y > b.y ? -1 : 1))];
    }
    return this.columnChartOption(d) as Highcharts.Options;
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
        column: {
          events: {
            click: (e: SeriesClickEventObject) =>
              this.editPoint.emit(e.point.options as TreeSubejct)
          }
        },
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
          cursor: 'pointer',
          colorByPoint: true,
          type: 'column',
          data,
          events: {
            click: (e: SeriesClickEventObject) =>
              this.editPoint.emit(e.point.options as TreeSubejct)
          }
        }
      ]
    };
  }
}
