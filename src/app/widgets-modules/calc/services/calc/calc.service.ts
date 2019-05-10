import { Injectable } from '@angular/core';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';
import { NotifierService } from 'src/app/services/notifier.service';
import { Marks } from 'src/app/config/models/marks.interface';

@Injectable()
export class CalcService {
  constructor(private readonly notifier: NotifierService) {}

  mappSavedDataWithItsCridedForSafity(data: Array<TreeSubejct>): Marks {
    const tree: Array<TreeSubejct> = this.notifier.giveSubject();
    return this.calcTotal(
      data.map((ts: TreeSubejct) => {
        const node: TreeSubejct = tree.find(
          ({ cid }: TreeSubejct) => ts.cid === cid
        );
        if (node) {
          ts.credit = node.credit;
          ts.inTotal = true;
        }
        return ts;
      })
    );
  }

  calcTotal(data: Array<TreeSubejct>): Marks {
    let credits = 0;
    let total = 0;
    let subOnDiv = 0;
    data.forEach((ts: TreeSubejct) => {
      if (ts.inTotal) {
        total += +ts.credit * +ts.mark;
      } else {
        subOnDiv += +ts.credit;
      }
      credits += +ts.credit;
    });
    return { credits, total: total / (credits - subOnDiv), marks: data };
  }
}
