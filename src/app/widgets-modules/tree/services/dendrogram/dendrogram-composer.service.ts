import { Injectable } from '@angular/core';
import {
  select,
  cluster,
  hierarchy,
  stratify,
  HierarchyNode,
  event,
  zoom,
  ClusterLayout,
  Selection
} from 'd3';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';
import { CS2012 } from 'src/app/config/tree-subjects/cs-2012.config';
import { Subject } from 'rxjs';
import { DBService } from 'src/app/services/db.service';

export interface DendrogramEvents {
  type: 'click' | 'mouseOver';
  data: TreeSubejct;
}

@Injectable()
export class DendrogramComposerService {
  events: Subject<DendrogramEvents>;
  constructor(private readonly DB: DBService) {
    this.events = new Subject<DendrogramEvents>();
  }

  initSvg(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const start = select('svg').style('cursor', 'grab');
    const zoomG = start
      .attr('width', width)
      .attr('height', height)
      .append('g');
    start.call(
      zoom().on('zoom', () => {
        zoomG.attr('transform', event.transform);
      })
    );

    const maing = zoomG
      .append('g')
      .attr('transform', 'translate(0, 0)')
      .style('cursor', 'default');
    const clust: ClusterLayout<any> = cluster().size([height, width - 100]);
    this.transform(clust, maing);
  }

  private async transform(
    clust: ClusterLayout<any>,
    maing: Selection<SVGGElement, {}, HTMLElement, any>
  ) {
    const treeData: HierarchyNode<TreeSubejct> = stratify<TreeSubejct>()
      .id((ts: TreeSubejct) => {
        return ts.cid;
      })
      .parentId((ts: TreeSubejct) => {
        if (ts.dependsOn) {
          return ts.dependsOn[0];
        } else if (ts.cid !== '000000') {
          return '000000';
        } else {
          return undefined;
        }
      })([{ cid: '000000', lvl: 1, name: '' }, ...CS2012]);
    const root = hierarchy<HierarchyNode<TreeSubejct>>(
      treeData,
      (d: HierarchyNode<TreeSubejct>) => d.children
    );
    clust(root);

    this.drawLines(maing, root);
  }

  private drawLines(
    maing: Selection<SVGGElement, {}, HTMLElement, any>,
    root: HierarchyNode<HierarchyNode<TreeSubejct>>
  ): void {
    maing
      .selectAll('path')
      .data(root.descendants().slice(1))
      .enter()
      .append('path')
      .transition()
      .duration(500)
      .style('opacity', 0)
      .transition()
      .delay(500)
      .text('3.0.0pre')
      .transition()
      .style('opacity', 1)
      .attr('d', (d: any) => {
        return (
          'M' +
          d.y +
          ',' +
          d.x +
          'C' +
          (d.parent.y + 50) +
          ',' +
          d.x +
          ' ' +
          (d.parent.y + 150) +
          ',' +
          d.parent.x +
          ' ' +
          d.parent.y +
          ',' +
          d.parent.x
        );
      })
      .style('fill', 'none')
      .attr('stroke', '#0F5E97');
    this.groupElements(maing, root);
  }

  private groupElements(
    maing: Selection<SVGGElement, {}, HTMLElement, any>,
    root: HierarchyNode<HierarchyNode<TreeSubejct>>
  ): void {
    const g = maing
      .selectAll('g')
      .data(root.descendants())
      .enter()
      .append('g')
      .attr('transform', (d: any) => {
        return 'translate(' + d.y + ',' + d.x + ')';
      });

    this.drawCircles(g);
  }

  private drawCircles(
    g: Selection<
      SVGGElement,
      HierarchyNode<HierarchyNode<TreeSubejct>>,
      SVGGElement,
      {}
    >
  ) {
    g.append('circle')
      .attr('r', 0)
      .style('fill', '#fff')
      .style('stroke', 'steelblue')
      .style('stroke', 'steelblue')
      .style('cursor', 'pointer')
      .style('stroke-width', 3)
      .transition()
      .delay((d: any, i: number) => i * 100)
      .duration(500)
      .attr('r', 100)
      .style('opacity', 0.4)
      .transition()
      .duration(500)
      .attr('r', 5)
      .style('opacity', 1)
      .attr('class', 'node');
    this.addLabels(g);
  }

  private addLabels(
    g: Selection<
      SVGGElement,
      HierarchyNode<HierarchyNode<TreeSubejct>>,
      SVGGElement,
      {}
    >
  ): void {
    g.append('text')
      .attr('dy', '0.31em')
      .attr('x', (d: HierarchyNode<HierarchyNode<TreeSubejct>>) =>
        d.children ? -6 : 6
      )
      .text((d: HierarchyNode<HierarchyNode<TreeSubejct>>) => d.data.data.name)
      .attr('text-anchor', (d: HierarchyNode<HierarchyNode<TreeSubejct>>) =>
        d.children ? 'start' : 'end'
      )
      .clone(true)
      .lower()
      .attr('stroke', 'white');
    this.addEvents(g);
  }

  private addEvents(
    g: Selection<
      SVGGElement,
      HierarchyNode<HierarchyNode<TreeSubejct>>,
      SVGGElement,
      {}
    >
  ): void {
    g.on('click', (d: HierarchyNode<HierarchyNode<TreeSubejct>>) =>
      this.events.next({ type: 'click', data: d.data.data })
    );

    g.on('mouseover', (d: HierarchyNode<HierarchyNode<TreeSubejct>>) => {
      this.events.next({ type: 'mouseOver', data: d.data.data });
    });
  }
}
