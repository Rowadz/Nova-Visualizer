import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {
  readonly reDrawGraph: Subject<void>;
  readonly closeDialogs: Subject<void>;
  constructor() {
    this.reDrawGraph = new Subject<void>();
    this.closeDialogs = new Subject<void>();
  }
}
