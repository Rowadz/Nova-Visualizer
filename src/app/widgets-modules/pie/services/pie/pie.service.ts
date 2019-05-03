import { Injectable } from '@angular/core';
import {
  select,
  pie,
  arc,
  scaleOrdinal,
  schemeDark2,
  entries,
  schemeAccent
} from 'd3';
import { DBService } from 'src/app/services/db.service';
import { NotifierService } from 'src/app/services/notifier.service';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';

@Injectable()
export class PieService {
  constructor(
    private readonly DB: DBService,
    private readonly notifier: NotifierService
  ) {}

  async init() {
    this.DB.dbName = this.notifier.selectedDB;
    const details = this.mapDataToPie(await this.DB.getAll());
    const width = window.innerWidth;
    const height = window.innerHeight;

    const radius = Math.min(width, height) / 2;

    const svg = select('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const data = details.reduce((prev, curr) => {
      prev[curr.name] = curr.mark;
      return prev;
    }, {});

    // set the color scale
    const color = scaleOrdinal()
      .domain(details.map(d => d.name))
      .range(schemeAccent);

    const marksPie = pie()
      .sort(null)
      .value((d: any) => {
        return d.value;
      });
    const data_ready = marksPie(entries(data) as any);

    const marksArc = arc()
      .innerRadius(radius * 0.5)
      .outerRadius(radius * 0.8);

    const outerArc = arc()
      .innerRadius(radius * 0.9)
      .outerRadius(radius * 0.9);

    svg
      .selectAll('allSlices')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', marksArc as any)
      .attr(
        'fill',
        (d: any): any => {
          return color(d.data.key);
        }
      )
      .attr('stroke', 'white')
      .style('stroke-width', '2px')
      .style('opacity', 0.7);

    // Add the polylines between chart and labels:
    svg
      .selectAll('allPolylines')
      .data(data_ready)
      .enter()
      .append('polyline')
      .attr('stroke', 'black')
      .style('fill', 'none')
      .attr('stroke-width', 1)
      .attr(
        'points',
        (d: any): any => {
          const posA = marksArc.centroid(d);
          const posB = outerArc.centroid(d);
          const posC = outerArc.centroid(d);
          const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
          posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1);
          return [posA, posB, posC];
        }
      );

    // Add the polylines between chart and labels:
    svg
      .selectAll('allLabels')
      .data(data_ready)
      .enter()
      .append('text')
      .text((d: any) => `${d.data.key} : ${d.data.value}`)
      .attr('transform', (d: any) => {
        const pos = outerArc.centroid(d);
        const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
        return 'translate(' + pos + ')';
      })
      .style('text-anchor', function(d) {
        const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        return midangle < Math.PI ? 'start' : 'end';
      });
  }

  private mapDataToPie(
    d: Array<TreeSubejct>
  ): Array<{ name: string; mark: number }> {
    return d.map(({ mark, name }: TreeSubejct) => ({ name, mark }));
  }
}
