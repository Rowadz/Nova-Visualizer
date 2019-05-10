import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'free-subject12',
  templateUrl: './subject12.component.html',
  styleUrls: ['./subject12.component.scss']
})
// should be subject 27 but I'm lazy
export class Subject12Component implements OnInit {
  @Input() set oldSubjects(arr: Array<TreeSubejct>) {
    if (arr && arr.length) {
      this.addToForm(arr);
    }
  }
  @Output() addHours12: EventEmitter<Array<Partial<TreeSubejct>>>;
  hours12: FormGroup;

  get formArray(): FormArray {
    return this.hours12.controls.subjects12 as FormArray;
  }
  constructor(private readonly fb: FormBuilder) {
    this.addHours12 = new EventEmitter<Array<Partial<TreeSubejct>>>();
  }

  ngOnInit() {
    this.initForm12();
  }

  addToForm(arr?: Array<TreeSubejct>): void {
    if (arr && arr.length) {
      arr.forEach(({ mark, name, inTotal, cid }: TreeSubejct) => {
        this.formArray.push(this.addGroup(name, mark, inTotal, cid));
      });
    } else {
      this.formArray.push(this.addGroup());
    }
  }

  saveToDB(): void {
    console.log(this.formArray.value);
    this.addHours12.emit(this.formArray.value);
  }

  private addGroup(
    name?: string,
    mark?: number,
    inTotal: boolean = true,
    cid?: string
  ): FormGroup {
    return this.fb.group({
      name: [name, Validators.required],
      mark: [
        mark,
        [
          Validators.required,
          Validators.min(35),
          Validators.max(100),
          Validators.pattern(/^-?(0|[1-9]\d*)?$/)
        ]
      ],
      inTotal: [inTotal],
      cid: [cid || UUID.UUID()]
    });
  }

  private initForm12(): void {
    this.hours12 = this.fb.group({
      subjects12: this.fb.array([])
    });
  }
}
