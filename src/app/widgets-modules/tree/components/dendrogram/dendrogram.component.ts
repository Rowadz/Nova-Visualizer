import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  DendrogramComposerService,
  DendrogramEvents
} from '../../services/dendrogram/dendrogram-composer.service';
import { MatSnackBar } from '@angular/material';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';

@Component({
  selector: 'dendrogram',
  templateUrl: './dendrogram.component.html',
  styleUrls: ['./dendrogram.component.scss'],
  providers: [DendrogramComposerService]
})
export class DendrogramComponent implements OnInit {
  constructor(
    private readonly dendrogramComposer: DendrogramComposerService,
    private readonly snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.dendrogramComposer.initSvg();
    setTimeout(() => this.toast('حرك عجل الفأرة', 'اوك'), 0);
    this.subToEvents();
  }

  private subToEvents(): void {
    this.dendrogramComposer.events.subscribe(
      ({ data, type }: DendrogramEvents) => {
        this[type](data);
      }
    );
  }

  private click(d: TreeSubejct): void {
    this.toast(d.name);
  }

  private mouseOver(d: TreeSubejct): void {
    this.toast(d.name);
  }

  private toast(msg: string, btnMsg: string = 'اوك'): void {
    this.snackBar.open(msg, btnMsg, {
      duration: 5000,
      horizontalPosition: 'left',
      verticalPosition: 'top'
    });
  }
}
