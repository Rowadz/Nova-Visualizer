import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  DendrogramComposerService,
  DendrogramEvents
} from '../../services/dendrogram/dendrogram-composer.service';
import { MatSnackBar, MatBottomSheet } from '@angular/material';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';
import { CrudMarksComponent } from './crud-marks/crud-marks.component';
import { NotifierService } from 'src/app/services/notifier.service';
import { select } from 'd3';
import { RouterConf } from 'src/app/config/models/router-conf.model';

@Component({
  selector: 'dendrogram',
  templateUrl: './dendrogram.component.html',
  styleUrls: ['./dendrogram.component.scss'],
  providers: [DendrogramComposerService]
})
export class DendrogramComponent implements OnInit {
  mainLinks: Array<RouterConf>;
  constructor(
    private readonly dendrogramComposer: DendrogramComposerService,
    private readonly snackBar: MatSnackBar,
    private readonly bottomSheet: MatBottomSheet,
    private readonly notifierService: NotifierService
  ) {}

  ngOnInit(): void {
    this.mainLinks = [
      {
        name: 'الخطة الشجرية',
        routerLink: 'tree',
        routerLinkActive: 'active',
        icon: 'school'
      }
    ];
    this.dendrogramComposer.initSvg();
    setTimeout(() => this.toast('حرك عجل الفأرة', 'اوك'), 0);
    this.subToEvents();
    this.notifierService.reDrawGraph.subscribe(() => {
      select('svg').remove();
      select('#dendContainer').append('svg');
      this.dendrogramComposer.initSvg();
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
