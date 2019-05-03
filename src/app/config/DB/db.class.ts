import Dexie from 'dexie';
import { TreeSubejct } from '../models/tree-subject.model';

export class SubjectsDB extends Dexie {
  subject: Dexie.Table<TreeSubejct, number>;

  constructor(name: string) {
    super(name);
    this.version(1).stores({
      [name]: '&cid, name, lvl, dependsOn, optional, mark'
    });
    this.subject = this.table(name);
  }

  async save(d: TreeSubejct): Promise<number> {
    if (await this.checkIfExists(d.cid)) {
      return this.subject.put(d);
    } else {
      return this.subject.add(d);
    }
  }

  async get(id: any): Promise<TreeSubejct | undefined> {
    return this.checkIfExists(id);
  }

  async getAll(): Promise<Array<TreeSubejct>> {
    return this.subject.toArray();
  }

  private async checkIfExists(id: any): Promise<TreeSubejct | undefined> {
    return this.subject.get(id);
  }
}
