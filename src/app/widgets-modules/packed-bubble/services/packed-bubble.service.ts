import { Injectable, EventEmitter } from '@angular/core';
import { DBService } from 'src/app/services/db.service';
import { NotifierService } from 'src/app/services/notifier.service';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';
import { SeriesClickEventObject } from 'highcharts';

@Injectable()
export class PackedBubbleService {
  editPoint: EventEmitter<TreeSubejct>;

  constructor(
    private readonly DB: DBService,
    private readonly notifier: NotifierService
  ) {
    this.editPoint = new EventEmitter<TreeSubejct>();
  }

  async init(): Promise<Highcharts.Options> {
    this.DB.dbName = this.notifier.selectedDB;
    const data = await this.DB.getAll();
    return this.packedBubbleChartOption(
      data
        .filter(({ cid }: TreeSubejct) => cid.split('-').length !== 5)
        .map((ts: TreeSubejct) => ({ name: ts.name, value: +ts.mark, ...ts }))
    ) as Highcharts.Options;
  }

  private packedBubbleChartOption(data: Array<any>): any {
    return {
      chart: {
        type: 'packedbubble'
      },
      title: {
        text: 'العلامات'
      },
      subtitle: {
        text: 'ضيف او ضيفي علامات من الشجرة, بيطلعو هون'
      },
      credits: {
        enabled: false
      },
      tooltip: {
        useHTML: true,
        formatter: function() {
          return `
            <span style="color:${this.color};">\u25CF</span> <b>
            ${this.key}
            </b><br/>
            MARK: <b> ${this.y / 10}</b><br/>
          `;
        }
      },
      plotOptions: {
        packedbubble: {
          // minSize: '30%',
          maxSize: '120%',
          zMin: 0,
          zMax: 1000,
          layoutAlgorithm: {
            splitSeries: false,
            gravitationalConstant: 0.02
          },
          events: {
            click: (e: SeriesClickEventObject) =>
              this.editPoint.emit(e.point.options as TreeSubejct)
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}',
            filter: {
              property: 'y',
              operator: '>',
              value: 250
            },
            style: {
              color: 'black',
              textOutline: 'none',
              fontWeight: 'normal'
            }
          }
        }
      },
      series: data.map(d => {
        return {
          cursor: 'pointer',
          type: 'packedbubble',
          name: d.name,
          data: [{ name: d.name, value: d.value * 10, cid: d.cid }]
        };
      })
    };
  }
}
