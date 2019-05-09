import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';

@Component({
  selector: 'free-subject12',
  templateUrl: './subject12.component.html',
  styleUrls: ['./subject12.component.scss']
})
export class Subject12Component implements OnInit {
  @Output() addHours12: EventEmitter<Array<Partial<TreeSubejct>>>;
  hours12: FormGroup;

  get formArray(): FormArray {
    return this.hours12.controls.subjects12 as FormArray;
  }
  constructor(
    private readonly fb: FormBuilder,
    private readonly snackBar: MatSnackBar
  ) {
    this.addHours12 = new EventEmitter<Array<Partial<TreeSubejct>>>();
  }

  ngOnInit() {
    this.initForm12();
  }

  addToForm(): void {
    if (this.formArray.length === 4) {
      this.snackBar.open('بس 4', 'اوك', { duration: 2000 });
    } else {
      this.formArray.push(
        this.fb.group({
          name: [undefined, Validators.required],
          mark: [
            undefined,
            [
              Validators.required,
              Validators.min(35),
              Validators.max(100),
              Validators.pattern(/^-?(0|[1-9]\d*)?$/)
            ]
          ],
          inTotal: [undefined]
        })
      );
    }
  }

  saveToDB(): void {
    console.log(this.formArray.value);
    this.addHours12.emit(this.formArray.value);
  }

  private initForm12(): void {
    this.hours12 = this.fb.group({
      subjects12: this.fb.array([])
    });
  }
}
