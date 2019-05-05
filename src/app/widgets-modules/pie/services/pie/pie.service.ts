import { Injectable } from '@angular/core';
import { DBService } from 'src/app/services/db.service';
import { NotifierService } from 'src/app/services/notifier.service';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';
import { Chart3dOptions, PlotPieOptions } from 'highcharts';
import { FilterType } from 'src/app/config/models/filter-types.type';

@Injectable()
export class PieService {
  constructor(
    private readonly DB: DBService,
    private readonly notifier: NotifierService
  ) {}

  async init(
    seriesType: string = 'pie',
    filterType: FilterType = 'nothing'
  ): Promise<Highcharts.Options> {
    this.DB.dbName = this.notifier.selectedDB;
    const data = [...this.mapDataToPie(await this.DB.getAll(), filterType)];
    return this.pieChartOption(
      data,
      seriesType,
      filterType
    ) as Highcharts.Options;
  }

  private mapDataToPie(
    d: Array<TreeSubejct>,
    filterType: FilterType
  ): Array<{ name: string; y: number; color?: string }> {
    return d
      .map(({ mark, name }: TreeSubejct) => ({ name, y: +mark, color: '' }))
      .map(obj => {
        if (filterType === 'failSucc') {
          if (obj.y <= 49) {
            console.log(obj.y, obj.name);
            obj.color = '#F6615F';
          } else if (obj.y >= 50) {
            obj.color = '#60999B';
          }
        } else if (filterType === 'rating') {
          if (obj.y < 50) {
            obj.color = '#0D0D0D';
          } else if (obj.y >= 50 && obj.y <= 59) {
            obj.color = '#F26B5E';
          } else if (obj.y >= 60 && obj.y <= 69) {
            obj.color = '#F23A29';
          } else if (obj.y >= 70 && obj.y <= 79) {
            obj.color = '#755671';
          } else if (obj.y >= 80 && obj.y <= 89) {
            obj.color = '#0D00C4';
          } else {
            obj.color = '#0DF205';
          }
        } else {
          delete obj.color;
        }
        return obj;
      })
      .sort((a, b) => (a.y > b.y ? -1 : 1));
  }

  private pieChartOption(
    data: Array<{ name: string; y: number; color?: string }>,
    seriesType: string,
    filterType: FilterType
  ): Highcharts.Options {
    return {
      title: {
        text: 'العلامات'
      },
      subtitle: {
        text: 'ضيف او ضيفي علامات من الشجرة, بيطلعو هون'
      },
      chart: {
        type: 'pie',
        animation: true,
        ...this.threeDOptions(seriesType, true)
      },
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              plotOptions: {
                pie: {
                  dataLabels: {
                    enabled: seriesType === '3d'
                  }
                }
              },
              legend: {
                enabled: false
              }
            }
          } as Highcharts.ResponsiveRulesOptions
        ]
      },
      credits: {
        enabled: false
      },
      tooltip: {
        headerFormat: '',
        pointFormat:
          '<span style="color:{point.color};">\u25CF</span> <b> {point.name}</b><br/>' +
          'MARK: <b>{point.y}</b><br/>'
      },
      legend: {
        enabled: filterType === 'nothing',
        layout: 'horizontal',
        floating: false,
        align: seriesType === 'pie' ? 'right' : 'center',
        verticalAlign: seriesType === 'pie' ? 'middle' : 'top',
        navigation: {
          animation: true,
          arrowSize: 12,
          style: {
            fontWeight: 'bold',
            fontSize: '12px'
          }
        }
      },
      plotOptions: {
        pie: {
          ...this.threeDOptions(seriesType, false),
          cursor: 'pointer',
          showInLegend: true,
          dataLabels: {
            enabled: true,
            format: '\u202B' + '{point.name}', // \u202B is RLE char for RTL support,
            style: {
              fontSize: '15px',
              textShadow: false
            },
            useHTML: true
          }
        }
      },
      series: [
        {
          name: 'MARKS',
          allowPointSelect: true,
          type: 'item',
          data: [...data],
          ...this.seriesOptionsBasedOnType(seriesType)
        }
      ]
    } as Highcharts.Options;
  }

  private seriesOptionsBasedOnType(type: string): Highcharts.SeriesOptions {
    switch (type) {
      case 'item':
        return {
          type,
          size: '100%',
          startAngle: -100,
          endAngle: 100,
          dataLabels: {
            enabled: true,
            format: '\u202B' + '{point.name}', // \u202B is RLE char for RTL support,
            useHTML: true
          }
        };

      default:
        return {
          type: 'pie'
        };
        break;
    }
  }

  private threeDOptions(
    type: string,
    chart: boolean
  ): Chart3dOptions | Partial<PlotPieOptions> {
    if (type === '3d') {
      if (chart) {
        return {
          options3d: {
            enabled: true,
            alpha: 45
          }
        } as Chart3dOptions;
      } else {
        return {
          innerSize: 100,
          depth: 45
        } as Partial<PlotPieOptions>;
      }
    }
  }
}
