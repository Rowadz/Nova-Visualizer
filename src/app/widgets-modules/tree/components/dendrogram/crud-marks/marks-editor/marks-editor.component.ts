import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DBService } from 'src/app/services/db.service';
import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-marks-editor',
  templateUrl: './marks-editor.component.html',
  styleUrls: ['./marks-editor.component.scss']
})
export class MarksEditorComponent implements OnInit {
  markForm: FormGroup;

  get mark(): number {
    return this.markForm.controls.mark.value;
  }

  constructor(
    public dialogRef: MatDialogRef<MarksEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TreeSubejct,
    private readonly fb: FormBuilder,
    private readonly DB: DBService,
    private readonly notifierService: NotifierService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  mode(mark: number): string {
    if (mark <= 35) {
      return 'mood_bad';
    } else if (mark <= 50 && mark > 35) {
      return 'sentiment_very_dissatisfied';
    } else if (mark <= 70 && mark > 50) {
      return 'sentiment_dissatisfied';
    } else if (mark <= 80 && mark > 70) {
      return 'sentiment_satisfied';
    } else if (mark <= 99 && mark > 80) {
      return 'mood';
    } else if (+mark === 100) {
      return 'whatshot';
    } else {
      return 'thumb_down_alt';
    }
  }

  save(): void {
    this.DB.save({
      ...this.data,
      ...this.markForm.value
    })
      .then((n: number) => {
        this.dialogRef.close();
        this.notifierService.closeDialogs.next();
        this.notifierService.reDrawGraph.next();
      })
      .catch((e: any) => console.error(e));
  }

  private initForm(): void {
    this.markForm = this.fb.group({
      name: [undefined, [Validators.required]],
      mark: [
        undefined,
        [Validators.required, Validators.min(35), Validators.max(100)]
      ]
    });
    this.markForm.patchValue(this.data);
  }
}
