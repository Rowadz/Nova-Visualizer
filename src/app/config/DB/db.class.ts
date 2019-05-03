import Dexie from 'dexie';
import { TreeSubejct } from '../models/tree-subject.model';

export class SubjectsDB extends Dexie {
  subjects: Dexie.Table<TreeSubejct, number>;

  constructor() {
    super('SubjectsDB');
    this.version(1).stores({
      subjects: '&cid, name, lvl, dependsOn, optional, mark'
    });
    this.subjects = this.table('subjects');
  }

  async save(d: TreeSubejct): Promise<number> {
    if (await this.checkIfExists(d.cid)) {
      return this.subjects.put(d);
    } else {
      return this.subjects.add(d);
    }
  }

  async get(id: any): Promise<TreeSubejct | undefined> {
    return this.checkIfExists(id);
  }

  private async checkIfExists(id: any): Promise<TreeSubejct | undefined> {
    return this.subjects.get(id);
  }
}
