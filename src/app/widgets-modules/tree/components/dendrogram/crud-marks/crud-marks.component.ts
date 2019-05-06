import { Component, OnInit, Inject } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
  MatDialog,
  MatSnackBar
} from '@angular/material';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';
import { MarksEditorComponent } from './marks-editor/marks-editor.component';
import { NotifierService } from 'src/app/services/notifier.service';
import { DBService } from 'src/app/services/db.service';

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
    private readonly notifierService: NotifierService,
    private readonly DB: DBService,
    private readonly snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.notifierService.closeDialogs.subscribe(() => this.close());
  }

  close(): void {
    this.bottomSheetRef.dismiss();
  }

  async openMarkEditor(): Promise<void> {
    const { optional, mark } = this.data;
    // when the user wants to update an optional subject
    if (mark) {
      this.openEditor();
    } else if (!optional) {
      // normal nubject
      this.openEditor();
    } else if (optional && (await this.checkIFOptional())) {
      // don't allow the user to save more thant 2 optional subjects
      this.openEditor();
    }
  }

  private async checkIFOptional(): Promise<boolean> {
    const optionalSubjects = await this.DB.getOptionalCount();
    const maxOptional = this.notifierService.selectedDB === 'CS2017' ? 3 : 2;
    if (optionalSubjects.length >= maxOptional) {
      const [name1, name2, name3] = optionalSubjects.map(
        (d: TreeSubejct) => d.name
      );
      const msg = `
        انتا اخترت ${name1} &  ${name2}
         ${name3 ? ' & ' + name3 : ''}
      `;
      this.snackBar.open(msg, 'بتقدر تسمح وحده منهم', {
        verticalPosition: 'top',
        horizontalPosition: 'left',
        duration: 7000
      });
      return false;
    } else {
      return true;
    }
  }

  private openEditor(): void {
    this.dialog.open(MarksEditorComponent, {
      width: '400px',
      data: this.data
    });
  }
}
