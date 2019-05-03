import { Injectable } from '@angular/core';
import { SubjectsDB } from '../config/DB/db.class';
import { TreeSubejct } from '../config/models/tree-subject.model';

@Injectable({
  providedIn: 'root'
})
export class DBService {
  private DB: SubjectsDB;
  set dbName(name: string) {
    this.DB = new SubjectsDB(name);
  }

  constructor() {}

  save(d: TreeSubejct): Promise<number> {
    return this.DB.save(d);
  }

  get(id: any): Promise<TreeSubejct | undefined> {
    return this.DB.get(id);
  }

  getAll(): Promise<Array<TreeSubejct>> {
    return this.DB.getAll();
  }
}
