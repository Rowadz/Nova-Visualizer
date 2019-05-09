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
  constructor(
    private readonly DB: DBService,
    private readonly notifierService: NotifierService
  ) {}

  async ngOnInit() {
    this.DB.dbName = this.notifierService.selectedDB;
    console.log(await this.DB.getAll());
  }

  addHours12(arr: Array<Partial<TreeSubejct>>): void {
    arr.forEach((pts: Partial<TreeSubejct>) => {
      pts.cid = UUID.UUID();
      pts.credit = 3;
      pts.inTotal = !!pts.inTotal;
      this.DB.save(pts as TreeSubejct);
    });
  }
}
