import { Injectable, EventEmitter } from '@angular/core';
import { NotifierService } from 'src/app/services/notifier.service';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';
import org from './chart.options';
import { DBService } from 'src/app/services/db.service';

@Injectable()
export class OrgComposerService {
  editPoint: EventEmitter<TreeSubejct>;
  constructor(
    private readonly notifier: NotifierService,
    private readonly DB: DBService
  ) {
    this.editPoint = new EventEmitter<TreeSubejct>();
  }

  async mapTreeToOrg(): Promise<Highcharts.Options> {
    this.DB.dbName = this.notifier.selectedDB;
    const dbData = (await this.DB.getAll()).filter(
      ({ cid }: TreeSubejct) => cid.split('-').length !== 5
    );
    const dependencyGraph: Array<Array<string>> = [];
    this.mergeDBDataWithSubject(dbData)
      .flatMap(({ cid, dependsOn }: TreeSubejct) => [
        dependsOn ? dependsOn.map((s: string) => [s, cid]) : [cid, cid]
      ])
      .filter(d => d)
      .forEach((lvl1: Array<string> | Array<Array<string>>) => {
        if (Array.isArray(lvl1[0])) {
          (lvl1 as Array<Array<string>>).forEach((lvl2: string[]) => {
            dependencyGraph.push(lvl2);
          });
        } else {
          dependencyGraph.push(lvl1 as Array<string>);
        }
      });
    return org({
      nodes: this.notifier
        .giveSubject()
        .map(({ cid, ...others }: TreeSubejct) => ({
          id: cid,
          ...others,
          cid,
          name: cid,
          level: others.lvl,
          color: others.mark ? '#2C3D50' : '#A63E26',
          title: others.name
        })),
      data: dependencyGraph,
      editPoint: this.editPoint
    });
  }

  private mergeDBDataWithSubject(d: Array<TreeSubejct>): Array<TreeSubejct> {
    const subjects = this.notifier.giveSubject();
    const cids = d.map(({ cid }: TreeSubejct) => cid);
    subjects.forEach((ts: TreeSubejct, i: number) => {
      if (cids.includes(ts.cid)) {
        subjects[i] = {
          ...d.find(({ cid }: TreeSubejct) => cid === ts.cid)
        };
      }
    });
    return subjects;
  }
}
