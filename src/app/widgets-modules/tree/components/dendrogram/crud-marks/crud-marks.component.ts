import { Component, OnInit, Inject } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
  MatDialog
} from '@angular/material';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';
import { MarksEditorComponent } from './marks-editor/marks-editor.component';
import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'crud-marks',
  templateUrl: './crud-marks.component.html',
  styleUrls: ['./crud-marks.component.scss']
})
export class CrudMarksComponent implements OnInit {
  constructor(
    private readonly bottomSheetRef: MatBottomSheetRef<CrudMarksComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: TreeSubejct,
    private readonly dialog: MatDialog,
    private readonly notifierService: NotifierService
  ) {}

  ngOnInit(): void {
    this.notifierService.closeDialogs.subscribe(() => this.close());
  }

  close(): void {
    this.bottomSheetRef.dismiss();
  }

  openMarkEditor(): void {
    this.dialog.open(MarksEditorComponent, {
      width: '400px',
      data: this.data
    });
  }
}
