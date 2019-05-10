import { Component, OnInit } from '@angular/core';
import { DBService } from 'src/app/services/db.service';
import { UUID } from 'angular2-uuid';
import { NotifierService } from 'src/app/services/notifier.service';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';

@Component({
  selector: 'app-free-subjects-editor',
  templateUrl: './free-subjects-editor.component.html',
  styleUrls: ['./free-subjects-editor.component.scss']
})
export class FreeSubjectsEditorComponent implements OnInit {
  oldSujbects: Array<TreeSubejct>;

  constructor(
    private readonly DB: DBService,
    private readonly notifierService: NotifierService
  ) {}

  async ngOnInit() {
    this.DB.dbName = this.notifierService.selectedDB;
    this.oldSujbects = (await this.DB.getAll()).filter(
      ({ cid }: TreeSubejct) => cid.split('-').length === 5
    );
  }

  addHours12(arr: Array<Partial<TreeSubejct>>): void {
    for (const mark of arr) {
      mark.credit = 3;
      mark.inTotal = !!mark.inTotal;
      this.DB.save(mark as TreeSubejct).then(d => console.log(d));
    }
  }
}
