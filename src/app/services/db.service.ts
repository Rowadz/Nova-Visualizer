import { Injectable } from '@angular/core';
import { SubjectsDB } from '../config/DB/db.class';
import { TreeSubejct } from '../config/models/tree-subject.model';
import { NotifierService } from './notifier.service';

@Injectable({
  providedIn: 'root'
})
export class DBService {
  private DB: SubjectsDB;
  set dbName(name: string) {
    this.DB = new SubjectsDB(name);
  }

  constructor(private readonly notifierService: NotifierService) {}

  save(d: TreeSubejct): Promise<number> {
    return this.DB.save(d);
  }

  get(id: any): Promise<TreeSubejct | undefined> {
    return this.DB.get(id);
  }

  getAll(): Promise<Array<any>> {
    return this.DB.getAll();
  }

  del(cid: string): Promise<void> {
    return this.DB.del(cid);
  }

  getOptionalCount(): Promise<Array<TreeSubejct>> {
    return this.DB.getOptionalCount(
      this.notifierService
        .giveSubject()
        .filter((t: TreeSubejct) => t.optional)
        .map(({ cid }: TreeSubejct) => cid)
    );
  }
}
