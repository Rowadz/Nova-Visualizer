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

  async init(): Promise<void> {
    this.DB.dbName = this.notifier.selectedDB;

    const myWords = await this.DB.getAll();

    const width = window.innerWidth;
    const height = window.innerHeight;

    const svg = select('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g');
    const color = scaleOrdinal()
      .domain(myWords.map(d => d.name))
      .range(schemeDark2);
    const wordLayout = cloud()
      .size([width, height])
      .words(
        myWords.map((d: TreeSubejct) => {
          return { text: d.name, size: d.mark };
        })
      )
      .padding(10)
      .fontSize(function(d: any) {
        return d.size / 2;
      })
      .on('end', words => {
        svg
          .append('g')
          .attr(
            'transform',
            'translate(' +
              wordLayout.size()[0] / 2 +
              ',' +
              wordLayout.size()[1] / 2 +
              ')'
          )
          .selectAll('text')
          .data(words)
          .enter()
          .append('text')
          .attr('fill', (d: any) => {
            return color(d.text) as any;
          })
          .style('font-size', function(d: any) {
            return d.size + 'px';
          })
          .attr('text-anchor', 'middle')
          .attr('transform', function(d: any) {
            return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')';
          })
          .text(function(d: any) {
            return d.text;
          });
      });
    wordLayout.start();

    console.log(color('dsa'));
  }
}
