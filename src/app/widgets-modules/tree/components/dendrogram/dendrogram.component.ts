import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  DendrogramComposerService,
  DendrogramEvents
} from '../../services/dendrogram/dendrogram-composer.service';
import { MatSnackBar, MatBottomSheet } from '@angular/material';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';
import { NotifierService, ReDrawConf } from 'src/app/services/notifier.service';
import { select } from 'd3';
import { RouterConf } from 'src/app/config/models/router-conf.model';
import { CrudMarksComponent } from 'src/app/widgets-modules/mat/crud-marks/crud-marks.component';

@Component({
  selector: 'dendrogram',
  templateUrl: './dendrogram.component.html',
  styleUrls: ['./dendrogram.component.scss'],
  providers: [DendrogramComposerService]
})
export class DendrogramComponent implements OnInit {
  constructor(
    private readonly dendrogramComposer: DendrogramComposerService,
    private readonly snackBar: MatSnackBar,
    private readonly bottomSheet: MatBottomSheet,
    private readonly notifierService: NotifierService
  ) {}

  ngOnInit(): void {
    this.dendrogramComposer.initSvg();
    setTimeout(() => this.toast('حرك عجل الفأرة', 'اوك'), 0);
    this.subToEvents();
    this.notifierService.reDrawGraph.subscribe(({ cid, type }: ReDrawConf) => {
      select('svg')
        .select('g')
        .select('g')
        .selectAll(`g circle#cid-${cid}`)
        .style('stroke', 'steelblue')
        .style('stroke-width', type === 'add' ? 1 : 3)
        .style('fill', type === 'add' ? '#011826' : '#fff');
      const action = type === 'add' ? 'إضافة' : 'إزالة';
      this.toast(`
            تمت ${action} المادة
        `);
      // this.dendrogramComposer.initSvg();
    });
  }

  private subToEvents(): void {
    this.dendrogramComposer.events.subscribe(
      ({ data, type }: DendrogramEvents) => {
        this[type](data);
      }
    );
  }

  private click(d: TreeSubejct): void {
    this.bottomSheet.open(CrudMarksComponent, { data: d });
  }

  private mouseOver(d: TreeSubejct): void {
    // this.toast(d.name);
  }

  private toast(msg: string, btnMsg: string = 'اوك'): void {
    this.snackBar.open(msg, btnMsg, {
      duration: 5000,
      horizontalPosition: 'left',
      verticalPosition: 'top'
    });
  }
}
