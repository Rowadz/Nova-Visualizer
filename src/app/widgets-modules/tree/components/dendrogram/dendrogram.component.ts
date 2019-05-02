import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DendrogramComposerService } from '../../services/dendrogram/dendrogram-composer.service';
import { MatSnackBar } from '@angular/material';

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
    setTimeout(
      () =>
        this.snackBar.open('حرك عجل الفأرة', 'اوك', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        }),
      0
    );
  }
}
