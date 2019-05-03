import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TreeSubejct } from '../config/models/tree-subject.model';
import { CS2012 } from '../config/tree-subjects/cs-2012.config';

export type dbNames = 'CS2012' | 'CS2017' | 'SE2012' | 'WE2018';
@Injectable({
  providedIn: 'root'
})
export class NotifierService {
  readonly reDrawGraph: Subject<void>;
  readonly closeDialogs: Subject<void>;
  selectedDB: dbNames;
  constructor() {
    this.reDrawGraph = new Subject<void>();
    this.closeDialogs = new Subject<void>();
    if (!this.selectedDB) {
      this.selectedDB = localStorage.getItem('db') as dbNames;
    }
  }

  giveSubject(): Array<TreeSubejct> {
    switch (this.selectedDB) {
      case 'CS2012':
        return CS2012;
    }
  }
}
