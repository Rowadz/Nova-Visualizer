import { Component, OnInit } from '@angular/core';
import { DBService } from 'src/app/services/db.service';
import { UUID } from 'angular2-uuid';
import { NotifierService } from 'src/app/services/notifier.service';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-free-subjects-editor',
  templateUrl: './free-subjects-editor.component.html',
  styleUrls: ['./free-subjects-editor.component.scss']
})
export class FreeSubjectsEditorComponent implements OnInit {
  oldSujbects: Array<TreeSubejct>;

  constructor(
    private readonly DB: DBService,
    private readonly notifierService: NotifierService,
    private readonly snackBar: MatSnackBar
  ) {}

  async ngOnInit() {
    this.DB.dbName = this.notifierService.selectedDB;
    this.oldSujbects = (await this.DB.getAll()).filter(
      ({ cid }: TreeSubejct) => cid.split('-').length === 5
    );
  }

  async addHours12(arr: Array<Partial<TreeSubejct>>): Promise<void> {
    this.snackBar.open('هيني عم بخزن فيهم اصبر شوي');
    const promises: Array<Promise<number>> = [];
    for (const mark of arr) {
      mark.credit = 3;
      mark.inTotal = !!mark.inTotal;
      promises.push(this.DB.save(mark as TreeSubejct));
    }

    Promise.all(promises).then(() => {
      this.snackBar.open('خزنت العلامات', 'اوك', {
        duration: 5000,
        verticalPosition: 'top',
        horizontalPosition: 'left'
      });
    });
  }
}
