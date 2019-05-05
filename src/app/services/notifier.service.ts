import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TreeSubejct } from '../config/models/tree-subject.model';
import { CS2012 } from '../config/tree-subjects/cs-2012.config';
import { WE2017 } from '../config/tree-subjects/we-2017.config';
import { SE2012 } from '../config/tree-subjects/se-2012.config';
import { CS2017 } from '../config/tree-subjects/cs-2017.config';

export type dbNames = 'CS2012' | 'CS2017' | 'SE2012' | 'WE2017';
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
      case 'WE2017':
        return WE2017;
      case 'SE2012':
        return SE2012;
      case 'CS2017':
        return CS2017;
    }
  }
}
