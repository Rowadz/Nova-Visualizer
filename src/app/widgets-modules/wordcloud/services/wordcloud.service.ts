import { Injectable, EventEmitter } from '@angular/core';
import { DBService } from 'src/app/services/db.service';
import { NotifierService } from 'src/app/services/notifier.service';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';
import { SeriesClickEventObject } from 'highcharts';
import { ServicesHelper } from '../../mat/helpers/services-helper.service';
import { FilterType } from 'src/app/config/models/filter-types.type';

interface WordcloudCustom extends TreeSubejct {
  weight: number;
  color: string;
}

@Injectable()
export class WordcloudService extends ServicesHelper {
  editPoint: EventEmitter<TreeSubejct>;
  constructor(
    private readonly DB: DBService,
    private readonly notifier: NotifierService
  ) {
    super();
    this.editPoint = new EventEmitter<TreeSubejct>();
  }

  async init(filterType: FilterType = 'nothing'): Promise<any> {
    this.DB.dbName = this.notifier.selectedDB;

    const myWords = (await this.DB.getAll()).filter(
      ({ cid }: TreeSubejct) => cid.split('-').length !== 5
    );
    return this.worldColudhartOption(
      this.mapDataToColorsFromFilter<WordcloudCustom>(
        filterType,
        myWords.map((ts: TreeSubejct) => ({
          weight: +ts.mark,
          color: '',
          ...ts
        })),
        'weight'
      )
    );
  }

  private worldColudhartOption(data: Array<any>): Highcharts.Options {
    return {
      title: {
        text: 'العلامات'
      },
      subtitle: {
        text: 'كل ما كبرت الكلمة بتكون علامة اكبر'
      },
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
          allowPointSelect: true,
          events: {
            click: (e: SeriesClickEventObject) =>
              this.editPoint.emit(e.point.options as TreeSubejct)
          }
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
